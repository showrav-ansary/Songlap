import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            autoincrement: true,
            unique: true,
        },
        body: {
            type: String,
            required: true,
        },originalPoster:{
            type: Number,
        },
        orphaned: Boolean,
        parentNode: Array,
        childNode: Array,
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);
export default Post;
