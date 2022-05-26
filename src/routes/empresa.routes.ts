import { Router } from "express"
import { deleteEmpresa, getEmpresa, postEmpresa, putEmpresa } from "../controllers/empresa.controller"


const router = Router()
//router.use('/empresa', empresa)

router.get('/', getEmpresa)

//router.put('/:goku/detalles', putEmpresa)
router.put('/:id', putEmpresa)

router.delete('/:id', deleteEmpresa)

router.post('/', postEmpresa)






export default router