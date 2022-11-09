import dotenv from 'dotenv';
import { ConnectOptions} from 'mongoose';

dotenv.config({path: '.en'});



const mongConfig = {
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.gzcrw7f.mongodb.net/Formacao?retryWrites=true&w=majority`
}



export default mongConfig;
