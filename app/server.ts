import http from 'http';
import express , {Express} from 'express';
import morgan from 'morgan';
import { router as PostRouter } from './routes/posts';


const router: Express = express();

router.use(express.urlencoded({extended: false}));

router.use(express.json());

router.use('/', PostRouter);

router.get("/",( req, res) => {
    res.send("Hello world")
})

router.listen(8080, () => {
    console.log("servidor started")
})
