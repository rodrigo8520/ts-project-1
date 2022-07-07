import { Router } from "express"
import { deleteDetalle, getDetalle, getDetalleId, postDetalle, putDetalle } from "../controllers/detalle/detalle.controller"
import { deleteDetalleValid, getDetalleValid, getDetalleValidById, postDetalleValid, putDetalleValid, validateDetalle } from "../controllers/detalle/detalle.validate"




const router = Router()

router.get('/', getDetalleValid(),          validateDetalle, getDetalle)
router.get('/:id',getDetalleValidById() ,   validateDetalle, getDetalleId)
router.put('/:id', putDetalleValid(),       validateDetalle, putDetalle)
router.delete('/:id', deleteDetalleValid(), validateDetalle, deleteDetalle)
router.post('/', postDetalleValid(),        validateDetalle, postDetalle)


export default router