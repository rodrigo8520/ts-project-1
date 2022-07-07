import { NextFunction, Request, Response } from "express";
import FacturaServices from "../../services/factura.service";



export const getFactura = async (req: Request, res: Response, next: NextFunction) => {

    //console.log("getServicio Ok")
    const FacturaServ = new FacturaServices();
    const factura = await FacturaServ.getFactura();

    //res.send('Tu empresa:  ' + empresa);

    // res.json( {mod} );

    console.log("getFactura Ok")
    res.status(200).json(factura)

    //res.status(200) para apis
}

export const getFacturaId = async (req: Request, res: Response, next: NextFunction) => {

    const id: number = parseInt(req.params.id);
    const facturaServ = new FacturaServices();
    const factura = await facturaServ.getFacturaId(id);

    if (factura) {
        console.log("getFactura ID controller ok");
        res.status(200).json(factura);
    } else {
        res.status(404).json({
            msg: `No existe Factura con id ${id}`
        })
    }


}

export const putFactura = async (req: Request, res: Response, next: NextFunction) => {

    const id: number = parseInt(req.params.id);
    const payload = req.body;
    const objService = new FacturaServices();

    //const empresa = await objService.putEmpresa(id, payload)
    // console.log("params",req.params)
    // console.log("query", req.query)
    // console.log("body", req.body, id)
    // res.status(200).json(empresa);

    try {
        const factura = await objService.putFactura(id, payload)
        console.log("body", req.body, id)
        res.status(200).json(factura);
    } catch (error) {

        console.log(error);
        res.status(500)
    }

}

export const postFactura = async (req: Request, res: Response, next: NextFunction) => {

    const payload = req.body;
    const objService = new FacturaServices();

    // await objService.deleteFactura(id)

    try {
        console.log(payload.rut);

        const factura = await objService.postFactura(payload);
        console.log("postFactura controller ok");

        res.status(200).json(factura);
    } catch (error) {

        console.log(error);
        res.status(500)

    }


}

export const deleteFactura = async (req: Request, res: Response, next: NextFunction) => {

    //const { id } = req.params;
    const id: number = parseInt(req.params.id);
    const objService = new FacturaServices();

    // await objService.deleteEmpresa(id)
    // const empresa = await objService.deleteEmpresa(id);
    // console.log("deleteEMpresa OK");

    // res.status(200).json(empresa);

    try {
        const factura = await objService.deleteFactura(id);
        console.log("deleteFactura OK");
        res.status(200).json(factura);

    } catch (error) {
        console.log('error en deleteFactura controller');
        res.status(500).json({ })
    }

}