import mongoose, {Schema, Document} from "mongoose";
import { token } from "morgan";

interface IUser extends Document {

    _id: string;
    nome: string;
    email: string;
    password: string;
    access_token: string;
}

const User: Schema = new mongoose.Schema({
    nome: {
        typicode:String,
        Requeired:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    passord:{
        type: String,
        required: true,

    },
    access_token:{
        type: String,
        required: true,
        
    }, 
},
    {timestamps: true} 
);

export default mongoose.model<IUser>('User', User, 'users')