import express from 'express';
import { body, check, validationResult } from "express-validator";



export const getProductoValid = () => {
    return [

        body('id').optional().isNumeric(),
        body('nombre').optional().isString()
    ]
}

export const getProductoValidById = () => {
    return [

        check('id').exists().isNumeric().withMessage('Tiene que ser numerico'),
    ]
}

export const postProductoValid = () => {
    return [

        body('nombre').exists().isString(),
        body('precio').exists().isNumeric(),
        body('stock').exists().isNumeric(),
        body('tipoProcucto').exists().isString()

    ]
}

export const deleteProductoValid = () => {
    return [
        check('id', "parametro requerido").exists().isNumeric()
    ]
}

export const putProductoValid = () => {
    return [

        check('id', "parametro requerido").exists().isNumeric(),
        body('nombre').exists().isString(),
        body('precio').exists().isNumeric(),
        body('stock').exists().isNumeric(),
        body('tipoProcucto').exists().isString()

    ]
}


// el error detectado lo ataja aca.
export const validateProducto = async (
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