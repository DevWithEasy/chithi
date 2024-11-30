import initDatabase from "@/database/initDB";
import User from "@/database/models/user";
import bcrypt from "bcrypt"

export default async function handler(req, res, next) {
    initDatabase()
    try {
        console.log(req.body)
        const { username, password } = req.body

        //find exists userEmail
        const findUser = await User.findOne({ username: username })

        if (findUser) return res.status(405).json({
            success: "failed",
            status: 405,
            message: "এই নামে অন্য আরকেটি একাউন্ট আছে!"
        })

        // //generate hash password
        const hashed = await bcrypt.hash(password, 10)

        // //create user
        const newUser = new User({
            ...req.body,
            password: hashed,
        })

        await newUser.save()

        res.status(200).json({
            success: "success",
            status: 200,
            message: "একাউন্ট খোলা সফল হয়েছে!",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}