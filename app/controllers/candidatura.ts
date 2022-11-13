import {Request , Response , NextFunction} from 'express';
import Candidatura from "../models/Candidatura";



const candidatura = async (req: Request, res:Response) => {
   if(!req.body.name && ! req.body.morada && req.body.funcao){
        res.status(400).send({message: "content canot be empty"});
        return;
    }
   const newCandidatura = new Candidatura({
        name: req.body.name,
        morada: req.body.morada,
        funcao: req.body.funcao
   })

   newCandidatura.save((err, candidatura) => {
        if(err) res.status(502).send({message: "Erro", err})
        res.status(200).send({message: "Candidatura criada com sucesso"})
    }) 
}

export default { candidatura }

