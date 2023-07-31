import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            autoincrement: true,
            unique: true,
        },
        firstNamme: {
            type: String,
            required: true,
            min: 2,
            max: 30,
        },
        lastNamme: {
            type: String,
            required: true,
            min: 2,
            max: 30,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 8,
        },
        picturePath: {
            type: String,
            default: '',
        },
        friends: {
            type: Array,
            default: [],
        },
        location: String,
        impression: Number,
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
export default User;
