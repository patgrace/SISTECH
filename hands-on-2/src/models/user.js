import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'], 
        default: 'user'
    }
},
{ timestamps: true }
); 

const User = models.User || mongoose.model("User", userSchema);


async function setAdmin(email) {
    try {
        const result = await User.updateOne(
            { email: email }, 
            { role: 'admin' } 
        );
        console.log(result);
    } catch (error) {
        console.error('Error updating user role:', error);
    }
}

setAdmin('pat@gmail.com'); 

export default User;