import initDatabase from "@/database/initDB";
import User from "@/database/models/user";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export default async function handler(req, res, next) {
    initDatabase()
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username: username })

        if (!user) {
            return res.status(405).json({
                success: false,
                status: 405,
                message: 'একাউন্ট খুঁজে পাওয়া যাচ্ছেনা!'
            })
        }

        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        const isVerified = await bcrypt.compare(password, user.password)

        if (!isVerified) {
            return res.status(405).json({
                success: false,
                status: 405,
                message: 'ইউজার নাম অথবা পাসওয়ার্ড ভুল দিচ্ছেন!'
            })
        }

        res.status(200).json({
            success: true,
            status: 200,
            message: 'লগ-ইন সফল হয়েছে!',
            token: token,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}