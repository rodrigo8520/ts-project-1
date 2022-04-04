
import express, { Request, Response } from 'express'



class Server {

    // public app: express.Application
    // public port: number
    // public urlBase: string
    public app = express();
    public port = 3000;

    constructor() {

        this.app.get('/', (req, res) => {
            res.send('Express + TypeScript Server')
        });

        this.app.get('/sumar/:valor1/:valor2', (req, res) => {
            let var1 = req.params.valor1;
            let var2 = req.params.valor2;
    

            let aus1 = parseInt(var1)
            let aus2 = parseInt(var2)
            
            const respuesta = this.sumar(aus1,aus2);
            res.send('el numero es '+ respuesta);
            //res.send('el numero es '+dos);
        });

        

        // function suma (numero1:number, numero2:number) {
        //     return numero1+numero2;
        // }
        // console.log(suma(10,5));

        // const suma2 = (num1:number, num2:number) :number => {
        //     return num1+num2;
        // }

    }

    sumar (num1: number, num2: number): number   {
        
            return num1 + num2;
        }
        

    resta() {
        const reta = (num1: number, num2: number): number => {
            return num1 - num2;
        }
        console.log(reta(10, 5));
        
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log("proceso corriendo en puerto", this.port);
        })
    }

}

export default Server