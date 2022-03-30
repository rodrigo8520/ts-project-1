
import express, { Request, Response } from 'express'



class Server {

    // public app: express.Application
    // public port: number
    // public urlBase: string
    public app = express();
    public port = 3000;

    constructor() {

        this.app.get('/', (req, res) => res.send('Express + TypeScript Server'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("proceso corriendo en puerto", this.port);
        })
    }

}

export default Server