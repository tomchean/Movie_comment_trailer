import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    content:{
        type: String,
        required:true,
    },

    stars:{
        type: Number,
        required:true,
    },
    movieid:{
        type: Number,
        required:true,
    },
    id:{
        type: String,
        required:true,
    },
});

export default mongoose.model('Comment', CommentSchema);
