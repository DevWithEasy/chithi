export default async function handler(req,res){
    try {
        const {id} = req.params
        const mails = await Mail.find({user : id})
        return res.status(200).json(mails)
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}