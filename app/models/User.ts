import mongoose, {Schema, Document} from "mongoose";
import { token } from "morgan";

interface IUser extends Document {

    _id: string;
    name: string;
    email: string;
    password: string;
    access_token: string;
}

const User: Schema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,

    },
    
},
    {timestamps: true} 
);

export default mongoose.model<IUser>('User', User, 'users')