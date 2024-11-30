import initDatabase from "@/database/initDB";
import Mail from "@/database/models/mail";

export default async function handler(req,res){
    initDatabase()
    try {
        const {id} = req.query
        const mail = await Mail.findById(id)
        
        return res.status(200).json(mail)
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}