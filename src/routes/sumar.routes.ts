
import { Router } from "express";
import { getSumar } from "../controllers/sumar.controller";


const router = Router()
//matematicas/sumar/var1/var2

router.get('/sumar/:valor1/:valor2', getSumar)
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


export default router
