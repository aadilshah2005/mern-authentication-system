import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const userRegister = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false, 
                message:  "Name, email and password are required"
            })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success:false,
                message:"User already exists with this email"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email: email.toLowerCase(),
            password: hashedPassword
        })

        const { password: _, ...userData} = newUser._doc;
        res.status(201).json({
            success:true,
            message:"User created successfully",
            userData
        })
        
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({
            success:false,
            message: "User registration failed",
            error: error.message
        })
    }
}


export const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message: "email and password are required"
            })
        }

        const user = await User.findOne({ email }).select("-password");
        if(!user){
            return res.status(404).json({
                success:false,
                message: "User not found"
            })
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, 
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            success:false,
            message: "User loggedIn successfully",
            user,
            token
        })

    } catch (error) {
        res.status(500).json({
            success:false, 
            message: "Something went wrong while logging in. Please try again later.",
            error: error.message
        })
    }
}

export const userLogOut = async (req, res) => {
    try {
        
        res.cookie("token", "", {
            httpOnly: true,
            secure: false, 
            sameSite: "strict",
            expires: new Date(0)
        })

         res.status(200).json({
            success: true,
            message: "User logged out successfully"
        });

    } catch (error) {
        res.status(500).json({
            seccess:false,
            message: "An error occurred while logging out. Please try again later.",
            error: error.message
        })
    }
}

export const getProfile = async (req, res) => {
    try {
        const id =  req.user.id;
        const user = await User.findById(id).select("-password");
        if (!user) {
            return res.status(404).json({
                success:false,
                message: "User not found"
            })
        }

        res.status(200).json({
            success:true,
            message: "User profile fetched successfully",
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Error fetching user profile",
            error: error.message
        })
    }
}