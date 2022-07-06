import { NextFunction, Request, Response } from "express";
import ServicioServices from "../../services/servicio.service";


export const getServicio = async (req: Request, res: Response, next: NextFunction) => {

    //console.log("getServicio Ok")
    const servicioServ = new ServicioServices();
    const servicio = await servicioServ.getServicio();

    //res.send('Tu empresa:  ' + empresa);

    // res.json( {mod} );

    console.log("getServicio Ok")
    res.status(200).json(servicio)

    //res.status(200) para apis
}

export const getServicioId = async (req: Request, res: Response, next: NextFunction) => {

    const id: number = parseInt(req.params.id);
    const servicioServ = new ServicioServices();
    const servicio = await servicioServ.getServicioId(id);

    if (servicio) {
        console.log("getServicio ID controller ok");
        res.status(200).json(servicio);
    } else {
        res.status(404).json({
            msg: `No existe Servicio con id ${id}`
        })
    }


}

export const putServicio = async (req: Request, res: Response, next: NextFunction) => {

    const id: number = parseInt(req.params.id);
    const payload = req.body;
    const objService = new ServicioServices();

    //const empresa = await objService.putEmpresa(id, payload)
    // console.log("params",req.params)
    // console.log("query", req.query)
    // console.log("body", req.body, id)
    // res.status(200).json(empresa);

    try {
        const servicio = await objService.putServicio(id, payload)
        console.log("body", req.body, id)
        res.status(200).json(servicio);
    } catch (error) {

        console.log(error);
        res.status(500)
    }

}

export const postServicio = async (req: Request, res: Response, next: NextFunction) => {

    const payload = req.body;
    const objService = new ServicioServices();

    // await objService.deleteServicio(id)

    try {
        console.log(payload.nombre);

        const servicio = await objService.postServicio(payload);
        console.log("postServicio controller ok");

        res.status(200).json(servicio);
    } catch (error) {

        console.log(error);
        res.status(500)

    }


}

export const deleteServicio = async (req: Request, res: Response, next: NextFunction) => {

    //const { id } = req.params;
    const id: number = parseInt(req.params.id);
    const objService = new ServicioServices();

    // await objService.deleteEmpresa(id)
    // const empresa = await objService.deleteEmpresa(id);
    // console.log("deleteEMpresa OK");

    // res.status(200).json(empresa);

    try {
        const servicio = await objService.deleteServicio(id);
        console.log("deleteServicio OK");
        res.status(200).json(servicio);

    } catch (error) {
        console.log('error en deleteServicio controller');
        res.status(500).json({ })
    }

}