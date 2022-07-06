import { Router } from "express";
import { deleteProducto, getProducto, getProductoId, postProducto, putProducto } from "../controllers/producto/producto.controller";
import { deleteProductoValid, getProductoValid, getProductoValidById, postProductoValid, putProductoValid, validateProducto } from "../controllers/producto/producto.validate";




const router = Router()

router.get('/', getProductoValid(),          validateProducto, getProducto)
router.get('/:id',getProductoValidById() ,   validateProducto, getProductoId)
router.put('/:id', putProductoValid(),       validateProducto, putProducto)
router.delete('/:id', deleteProductoValid(), validateProducto, deleteProducto)
router.post('/', postProductoValid(),        validateProducto, postProducto)


export default router