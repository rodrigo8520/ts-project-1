import express from 'express';
import { body, check, validationResult } from "express-validator";



export const getUsuarioValid = () => {
    return [

        body('rut').optional().isNumeric(),
        body('nombre').optional().isString()
    ]
}

export const getUsuarioValidById = () => {
    return [

        check('rut').exists().isNumeric().withMessage('Tiene que ser numerico'),
    ]
}

export const postUsuarioValid = () => {
    return [

        body('rut').exists().isNumeric(),
        body('nombre').exists().isString(),
        body('apellido').exists().isString(),
        body('direccion').exists().isString(),
        body('telefono').exists().isNumeric(),
        body('email').exists().isString()

    ]
}

export const deleteUsuarioValid = () => {
    return [
        check('rut', "parametro requerido").exists().isNumeric()
    ]
}

export const putUsuarioValid = () => {
    return [

        check('rut', "parametro requerido").exists().isNumeric(),
        body('nombre').exists().isString(),
        body('apellido').exists().isString(),
        body('direccion').exists().isString(),
        body('telefono').exists().isNumeric(),
        body('email').exists().isString()

    ]
}


// el error detectado lo ataja aca.
export const validateUsuario = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }
    next();

}