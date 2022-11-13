import dotenv from 'dotenv';


dotenv.config({path: '.env'});



const mongConfig = {
   
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.uc4acot.mongodb.net/Formation?retryWrites=true&w=majority`
}



export default mongConfig;
