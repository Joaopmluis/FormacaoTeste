import dotenv from 'dotenv';


dotenv.config({path: '.env'});



const mongConfig = {
   
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.ih4e5i5.mongodb.net/Formation?retryWrites=true&w=majority`
}



export default mongConfig;
