import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String
    },
    artist:{
        type:String,
        required: true
    },
    imageUrl:{
        required: true,
        type: String
    },
    releaseYear:{
        type: Number,
        required: true
    },
    songs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Song"
    }]
    
},{timestamps: true});

export const Album = mongoose.model("Album", albumSchema);