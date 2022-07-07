import { Router } from "express";
import { deleteFactura, getFactura, getFacturaId, postFactura, putFactura } from "../controllers/factura/factura.controller";
import { deleteFacturaValid, getFacturaValid, getFacturaValidById, postFacturaValid, putFacturaValid, validateFactura } from "../controllers/factura/factura.validate";



const router = Router()

router.get('/', getFacturaValid(),          validateFactura, getFactura)
router.get('/:id',getFacturaValidById() ,   validateFactura, getFacturaId)
router.put('/:id', putFacturaValid(),       validateFactura, putFactura)
router.delete('/:id', deleteFacturaValid(), validateFactura, deleteFactura)
router.post('/', postFacturaValid(),        validateFactura, postFactura)


export default router