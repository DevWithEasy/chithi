export default async function handler(req,res){
    try {
        const {id} = req.params
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
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}