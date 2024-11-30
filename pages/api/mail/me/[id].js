import initDatabase from "@/database/initDB";
import Mail from "@/database/models/mail";

export default async function handler(req,res){
    initDatabase()
    try {
        const {id} = req.query
        const mails = await Mail.find({user : id}).sort({createdAt : -1})
        return res.status(200).json(mails)
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}