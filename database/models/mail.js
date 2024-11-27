import mongoose from 'mongoose';

const mailSchema = mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    content : {
        type : String,
        required :true
    },
    font :{
        type : String,
        required :true
    },
    design :{
        type : Number,
        required :true
    },

},{
    timestamps:true
})

const Mail = mongoose.models.Mail || mongoose.model('Mail',mailSchema)
export default Mail