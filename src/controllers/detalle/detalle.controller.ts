import { NextFunction, Request, Response } from "express";
import DetalleServices from "../../services/detalle.service";



export const getDetalle = async (req: Request, res: Response, next: NextFunction) => {

    //console.log("getDetalle Ok")
    const DetalleServ = new DetalleServices();
    const detalle = await DetalleServ.getDetalle();

    console.log("getDetalle Ok")
    res.status(200).json(detalle)

    //res.status(200) para apis
}


export const getDetalleId = async (req: Request, res: Response, next: NextFunction) => {

    const id: number = parseInt(req.params.id);
    const detalleServ = new DetalleServices();
    const detalle = await detalleServ.getDetalleId(id);

    if (detalle) {
        console.log("getDetalle ID controller ok");
        res.status(200).json(detalle);
    } else {
        res.status(404).json({
            msg: `No existe Detalle con id ${id}`
        })
    }


}

export const putDetalle = async (req: Request, res: Response, next: NextFunction) => {

    const id: number = parseInt(req.params.id);
    const payload = req.body;
    const objService = new DetalleServices();


    try {
        const detalle = await objService.putDetalle(id, payload)
        console.log("body", req.body, id)
        res.status(200).json(detalle);
    } catch (error) {

        console.log(error);
        res.status(500)
    }

}

export const postDetalle = async (req: Request, res: Response, next: NextFunction) => {

    const payload = req.body;
    const objService = new DetalleServices();

    // await objService.deleteDetalle(id)

    try {
        console.log(payload.rut);

        const detalle = await objService.postDetalle(payload);
        console.log("postDetalle controller ok");

        res.status(200).json(detalle);
    } catch (error) {

        console.log(error);
        res.status(500)

    }


}

export const deleteDetalle = async (req: Request, res: Response, next: NextFunction) => {

    //const { id } = req.params;
    const id: number = parseInt(req.params.id);
    const objService = new DetalleServices();

    // await objService.deleteEmpresa(id)
    // const empresa = await objService.deleteEmpresa(id);
    // console.log("deleteEMpresa OK");

    // res.status(200).json(empresa);

    try {
        const detalle = await objService.deleteDetalle(id);
        console.log("deleteDetalle OK");
        res.status(200).json(detalle);

    } catch (error) {
        console.log('error en deleteDetalle controller');
        res.status(500).json({ })
    }

}