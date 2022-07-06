import { Router } from "express"
import { deleteServicio, getServicio, getServicioId, postServicio, putServicio } from "../controllers/servicio.controller"
import { deleteServicioValid, getServicioValid, getServicioValidById,
         postServicioValid, putServicioValid, validateServicio } from "../controllers/servicio.validate"



const router = Router()
//router.use('/empresa', empresa)

router.get('/', getServicioValid(), validateServicio, getServicio)

router.get('/:id',getServicioValidById() , validateServicio, getServicioId)

//router.put('/:goku/detalles', putEmpresa)
router.put('/:id', putServicioValid(), validateServicio, putServicio)

router.delete('/:id', deleteServicioValid(), validateServicio, deleteServicio)

router.post('/', postServicioValid(), validateServicio, postServicio)




export default router