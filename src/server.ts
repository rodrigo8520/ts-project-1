
import express, { Request, Response } from 'express'



class Server {

    // public app: express.Application
    // public port: number
    // public urlBase: string
    public app = express();
    public port = 3000;

    constructor() {

        this.app.get('/', (req, res) => res.send('Express + TypeScript Server'));

        function suma (numero1:number, numero2:number) :number {
            return numero1+numero2;
        }
        console.log(suma(10,5));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("proceso corriendo en puerto", this.port);
        })
    }

}

export default Server