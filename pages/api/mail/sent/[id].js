import initDatabase from "@/database/initDB";
import Mail from "@/database/models/mail";

export default async function handler(req, res) {
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
            message: "Successfully added mail",
        })
    } catch (error) {
        console.log(error)
    }
}