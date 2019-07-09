import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    favorite:{
        type: Array,
        required:true,
    },
    userId:{
        type: String,
        required:true,
    },
});

export default mongoose.model('UserSchema', UserSchema);
