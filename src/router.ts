import { Router } from "express";
import express, { Request, Response } from 'express'
import { horaTrabajo, reajusteSalario, sumar } from "./services/matematica";


const router = Router()

router.get('/', (req, res) => {
    res.send('Express + TypeScript Server')
}); 

router.get('/sumar/:valor1/:valor2', (req, res) => {

    let var1 = req.params.valor1;
    let var2 = req.params.valor2;

    let aus1 = parseInt(var1)
    let aus2 = parseInt(var2)
    let respuesta = sumar(aus1 , aus2)
    //const respuesta = this();
    res.send('el numero es ' + respuesta);
    //res.send('el numero es '+dos);
});

router.get('/reajusteSalario/:valor1/:valor2', (req, res) => {

    let var1 = req.params.valor1;
    let var2 = req.params.valor2;

    let aus1 = parseInt(var1)
    let aus2 = parseInt(var2)

    const respuesta = reajusteSalario(aus1, aus2);
    res.send('Tu nuevo salario es de  ' + respuesta);
    //res.send('el numero es '+dos);
});

router.get('/horaTrabajo/:valor1/:valor2', (req, res) => {

    let var1 = req.params.valor1;
    let var2 = req.params.valor2;

    let aus1 = parseInt(var1)
    let aus2 = parseInt(var2)

    const respuesta = horaTrabajo(aus1, aus2);
    res.send('Tu salario es ' + respuesta);
})

// export const sumar = (num1: number, num2: number): number => {

//     let sumarResultado = num1 + num2;
//     return sumarResultado
// }


export default router