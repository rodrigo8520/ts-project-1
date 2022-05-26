
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import router from './router';

class Server {

    // public app: express.Application
    // public port: number
    // public urlBase: string
    public app = express();
    public port = 3000;

    constructor() {

        // this.app.get('/', (req, res) => {
        //     res.send('Express + TypeScript Server')
        // });

        // lectura parse del body
        this.app.use(express.json({
            limit: '5MB'
        }));

        //Morgan http loger
        // morgan.token('body', (req: Request, res) => {

        //     const resp = JSON.stringify(req.body)
        //     return resp.substring(0, 1000);
        // });

        this.app.use(morgan('tiny'));
        console.log("Morgan OK");
        
        // se genera aca la url base
        this.app.use('/v1',router);
        console.log("Iniciando Routes")

        // this.app.get('/sumar/:valor1/:valor2', (req, res) => {

        //     let var1 = req.params.valor1;
        //     let var2 = req.params.valor2;


        //     let aus1 = parseInt(var1)
        //     let aus2 = parseInt(var2)
        //     let respuesta = sumar(aus1 ,  aus2)
        //     //const respuesta = this();
        //     res.send('el numero es ' + respuesta);
        //     //res.send('el numero es '+dos);
        // });

        // this.app.get('/reajusteSalario/:valor1/:valor2', (req, res) => {

        //     let var1 = req.params.valor1;
        //     let var2 = req.params.valor2;


        //     let aus1 = parseInt(var1)
        //     let aus2 = parseInt(var2)

        //     const respuesta = this.reajusteSalario(aus1, aus2);
        //     res.send('Tu nuevo salario es de  ' + respuesta);
        //     //res.send('el numero es '+dos);
        // });

        // this.app.get('/horaTrabajo/:valor1/:valor2', (req, res) => {

        //     let var1 = req.params.valor1;
        //     let var2 = req.params.valor2;

        //     let aus1 = parseInt(var1)
        //     let aus2 = parseInt(var2)

        //     const respuesta = this.horaTrabajo(aus1, aus2);
        //     res.send('Tu salario es ' + respuesta);
        // })

        // function suma (numero1:number, numero2:number) {
        //     return numero1+numero2;
        // }
        // console.log(suma(10,5));

        // const suma2 = (num1:number, num2:number) :number => {
        //     return num1+num2;
        // }procedimiento retorna algo

    }

    


    // hora(hora: number, tarifa: number): number {

    //     let resultadoHora 
    //     return resultadoHora = hora * tarifa;
    // }

    // horaExtra(hora: number, tarifa: number): number {

    //     return hora * (tarifa + tarifa/2)
    // }

    // horaTrabajo(horas: number, tarifa: number): number {
        
    //     let salarios

    //     if (horas > 40) {
    //         salarios = this.horaExtra(horas, tarifa)
            

    //     } else if (horas <= 40) {
    //         salarios = this.hora(horas, tarifa)

    //     }
    //     return salarios;
    // }

    //Calcular nuevo salario de un empleado si obtuvo un reajuste del 4,5 sobre si salario anterior
    // reajusteSalario(salario: number, reajuste: number): number {

    //     let nuevoSalario

    //     reajuste = salario * 0.045
    //     return nuevoSalario = salario + reajuste;
    // }


    listen() {
        this.app.listen(this.port, () => {
            console.log("proceso corriendo en puerto", this.port);
        })
    }

}

export default Server