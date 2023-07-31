import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            autoincrement: true,
            unique: true,
        },
        url: {
            type: String,
            required: true,
        },originalPoster:{
            type: Number,
        },
        orphaned: Boolean,
    },
    { timestamps: true }
);

const Image = mongoose.model('Image', ImageSchema);
export default Image;
