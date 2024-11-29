export default async function handler(req,res){
    try {
        const { q } = req.query
        const user = await User.findOne({ username: q }).select('username')
        if (!user) return res.status(200).json({ status: 'yes', user: {} })
        return res.status(200).json({ status: 'no', user })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}