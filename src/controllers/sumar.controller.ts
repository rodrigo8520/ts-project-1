import { NextFunction, Request, Response } from "express";
import { sumar } from "../services/matematica";

// const router = Router()
                        
export const getSumar = async (req: Request, res: Response, next: NextFunction) => {

    //const id: number = parseInt(req.params.id);
    const var1  = req.params.valor1;
    const var2 = req.params.valor2;
   // console.log(var1)
    let aus1 = parseInt(var1)
    let aus2 = parseInt(var2)
    let respuesta = sumar(aus1, aus2)
    //const respuesta = this();

    res.send('el numero es ' + respuesta);
    //console.log(respuesta)


}

// router.get('/sumar/:valor1/:valor2', (req, res) => {

//     let var1 = req.params.valor1;
//     let var2 = req.params.valor2;

//     let aus1 = parseInt(var1)
//     let aus2 = parseInt(var2)
//     let respuesta = sumar(aus1 , aus2)
//     //const respuesta = this();
//     res.send('el numero es ' + respuesta);
//     //res.send('el numero es '+dos);
// });

// export default router