import mongoose from "mongoose";

var cardSchema = new mongoose.Schema({
    uuid:{
        type:String,
        index:true,
    },
    Title:{
        type:String,
    },
    Description: {
        type:String,
    },
    timestmap: {
        type:Number,
    }
})

export default mongoose.model('CardModel',cardSchema);