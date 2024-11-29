export default async function handler(req,res){
    try {
        console.log(req.body)
        const { username, password } = req.body

        //find exists userEmail
        const findUser = await User.findOne({ username: username })

        if (findUser) return res.status(405).json({
            success: "failed",
            status: 405,
            message: "User already exists"
        })

        // //generate hash password
        const hashed = await bcrypt.hash(password, 10)

        // //create user
        const newUser = new User({
            ...req.body,
            password: hashed,
        })

        const user = await newUser.save()


        // //generate access token
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        res.status(200).json({
            success: "success",
            status: 200,
            message: "Successfully signup",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}