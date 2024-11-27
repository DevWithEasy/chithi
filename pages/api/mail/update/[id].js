import Mail from "@/database/models/mail";

export default async function handler(req, res) {
    try {
        const {id} = req.query
        const mail = await Mail.findByIdAndUpdate(id,{
            seen : true
        },{new : true})
        return res.status(200).json(mail);
    } catch (error) {
        console.log(error)
    }
}