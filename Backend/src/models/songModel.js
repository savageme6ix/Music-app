import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
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
    audioUrl:{
        type: String,
        required: true
    },
    duration:{
        type: number,
        required: true
    },
    albumId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: false
    }
}, {timestamps: true});

export const Song = mongoose.model("Song", songSchema);