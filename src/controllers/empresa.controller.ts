import { NextFunction, Request, Response } from "express";
import { createModuleResolutionCache } from "typescript";
import { Empresa } from "../models/Empresa";
import EmpresaServices from "../services/empresa.service";



export const getEmpresa = async (req: Request, res: Response, next: NextFunction) => {

    //console.log("getEmpresa Ok")
    const empresaServ = new EmpresaServices();
    const empresa = await empresaServ.getEmpresa();

    //res.send('Tu empresa:  ' + empresa);

    // res.json( {mod} );
    console.log("getEmpresa Ok")
    res.status(200).json(empresa)
    //res.status(200) para apis
}

export const putEmpresa = async (req: Request, res: Response, next: NextFunction) => {

    const id: number = parseInt(req.params.id);
    const payload = req.body;
    const objService = new EmpresaServices();
    
    const empresa = await  objService.putEmpresa(id, payload)
    // console.log("params",req.params)
    // console.log("query", req.query)
    console.log("body", req.body, id)
    res.status(200).json(empresa);

}

export const postEmpresa = async (req: Request, res: Response, next: NextFunction) => {

    const payload = req.body;
    const objService = new EmpresaServices();

    // await objService.deleteEmpresa(id)
    console.log(payload.direccion);
    
    const empresa = await objService.postEmpresa(payload);
    console.log("postEmpresa ok");
    
    res.status(200).json(empresa);

}

export const deleteEmpresa = async (req: Request, res: Response, next: NextFunction) => {

    //const { id } = req.params;
    const id: number = parseInt(req.params.id);
    const objService = new EmpresaServices();

    // await objService.deleteEmpresa(id)
    const empresa = await objService.deleteEmpresa(id);
    console.log("deleteEMpresa OK");
    
    res.status(200).json(empresa);

}