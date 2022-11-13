import mongoose, {Schema, Document} from "mongoose";
import { token } from "morgan";

interface ICandidatura extends Document {

    _id: string;
    name: string;
    morada: string;
    funcao: string;
   
}

const Candidatura: Schema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    morada:{
        type: String,
        required: true,
        unique: true
    },
    funcao:{
        type: String,
        required: true,

    },
    
},
    {timestamps: true} 
);

export default mongoose.model<ICandidatura>('Candidatura', Candidatura, 'candidaturas')