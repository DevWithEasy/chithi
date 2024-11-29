export default async function handler(req,res){
    try {
        const user = await User.findById(req.params.id)
        const mails = await Mail.find({user : req.params.id}).sort({createdAt :-1})
        return res.status(200).json({
            user : user,
            mails : mails
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}