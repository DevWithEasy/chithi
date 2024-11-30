import initDatabase from "@/database/initDB";
import Mail from "@/database/models/mail";

export default async function handler(req,res){
    initDatabase()
    try {
        const {id} = req.query
        const newMail = new Mail({
            ...req.body,
            user : id
        })
        
        await newMail.save()
        
        return res.status(200).json({
            success : true,
            status: 200,
            message: "চিঠি সফলভাবে পাঠানো হয়েছে!",
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}