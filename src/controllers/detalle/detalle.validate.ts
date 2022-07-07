import express from 'express';
import { body, check, validationResult } from "express-validator";



export const getDetalleValid = () => {
    return [

        body('id').optional().isNumeric(),
        body('descripcionDetalle').optional().isString()
    ]
}

export const getDetalleValidById = () => {
    return [

        check('id').exists().isNumeric().withMessage('Tiene que ser numerico'),
    ]
}

export const postDetalleValid = () => {
    return [

        body('descripcionDetalle').optional().isString()

    ]
}

export const deleteDetalleValid = () => {
    return [
        check('id', "parametro requerido").exists().isNumeric()
    ]
}

export const putDetalleValid = () => {
    return [

        check('id', "parametro requerido").exists().isNumeric(),
        body('descripcionDetalle').optional().isString()

    ]
}


// el error detectado lo ataja aca.
export const validateDetalle = async (
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