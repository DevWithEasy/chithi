export default async function handler(req,res){
    try {
        const {id} = req.params
        const mail = await Mail.findByIdAndUpdate(id,{
            seen : true
        },{new : true})
        return res.status(200).json(mail)
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}