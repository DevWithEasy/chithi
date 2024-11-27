import Mail from "@/database/models/mail"

export default async function handler(req, res) {
    try {
        const {id} = req.query
        const mails = await Mail.find(is)
    } catch (error) {
        
    }
}