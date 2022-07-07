import express from 'express';
import { body, check, validationResult } from "express-validator";



export const getFacturaValid = () => {
    return [

        body('id').optional().isNumeric(),
        body('rut').optional().isNumeric(),
        body('fecha').optional().isString()
    ]
}

export const getFacturaValidById = () => {
    return [

        check('id').exists().isNumeric().withMessage('Tiene que ser numerico'),
    ]
}

export const postFacturaValid = () => {
    return [

        body('fecha').optional().isString()

    ]
}

export const deleteFacturaValid = () => {
    return [
        check('id', "parametro requerido").exists().isNumeric()
    ]
}

export const putFacturaValid = () => {
    return [

        check('id', "parametro requerido").exists().isNumeric(),
        body('fecha').optional().isString()

    ]
}


// el error detectado lo ataja aca.
export const validateFactura = async (
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