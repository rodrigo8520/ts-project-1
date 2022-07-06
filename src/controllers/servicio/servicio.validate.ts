import express from 'express';
import { body, check, validationResult } from "express-validator";



export const getServicioValid = () => {
    return [

        body('id').optional().isNumeric(),
        body('nombre').optional().isString()
    ]
}

export const getServicioValidById = () => {
    return [

        check('id').exists().isNumeric().withMessage('Tiene que ser numerico'),
    ]
}

export const postServicioValid = () => {
    return [

        body('nombre').exists().isString(),
        body('descripcionServ').exists().isString()

    ]
}

export const deleteServicioValid = () => {
    return [
        check('id', "parametro requerido").exists().isNumeric()
    ]
}

export const putServicioValid = () => {
    return [

        check('id', "parametro requerido").exists().isNumeric(),
        body('nombre').exists().isString(),
        body('descripcionServ').exists().isString()

    ]
}


// el error detectado lo ataja aca.
export const validateServicio = async (
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
