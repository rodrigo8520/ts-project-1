import { NextFunction, Request, Response } from "express";
import UsuarioServices from "../../services/usuario.service";



export const getUsuario = async (req: Request, res: Response, next: NextFunction) => {

    const usuarioServ = new UsuarioServices();
    const usuario = await usuarioServ.getUsuario();

    console.log("getUsuario Ok")
    res.status(200).json(usuario)

    //res.status(200) para apis
}

export const getUsuarioId = async (req: Request, res: Response, next: NextFunction) => {

    const rut: number = parseInt(req.params.rut);
    const usuarioServ = new UsuarioServices();
    const usuario = await usuarioServ.getUsuarioId(rut);

    if (usuario) {
        console.log("getUsuario Rut controller ok");
        res.status(200).json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe Usuario con id ${rut}`
        })
    }


}

export const putUsuario = async (req: Request, res: Response, next: NextFunction) => {

    const rut: number = parseInt(req.params.rut);
    const payload = req.body;
    const objService = new UsuarioServices();


    try {
        const usuario = await objService.putUsuario(rut, payload)
        console.log("body", req.body, rut)
        res.status(200).json(usuario);
    } catch (error) {

        console.log(error);
        res.status(500)
    }

}

export const postUsuario = async (req: Request, res: Response, next: NextFunction) => {

    const payload = req.body;
    const objService = new UsuarioServices();

    try {
        console.log(payload.nombre);

        const usuario = await objService.postUsuario(payload);
        console.log("postUsuario controller ok");

        res.status(200).json(usuario);
    } catch (error) {

        console.log(error);
        res.status(500)
    }

}


export const deleteUsuario = async (req: Request, res: Response, next: NextFunction) => {

    //const { id } = req.params;
    const rut: number = parseInt(req.params.rut);
    const objService = new UsuarioServices();

    try {
        const usuario = await objService.deleteUsuario(rut);
        console.log("deleteUsuario OK");
        res.status(200).json(usuario);

    } catch (error) {
        console.log('error en deleteUsuario controller');
        res.status(500).json({ })
    }

}