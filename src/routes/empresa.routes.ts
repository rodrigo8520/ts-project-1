import { Router } from "express"
import { deleteEmpresa, getEmpresa, getEmpresaId,
         postEmpresa, putEmpresa } from "../controllers/empresa.controller"


const router = Router()
//router.use('/empresa', empresa)

router.get('/', getEmpresa)

router.get('/:id', getEmpresaId)

//router.put('/:goku/detalles', putEmpresa)
router.put('/:id', putEmpresa)

router.delete('/:id', deleteEmpresa)

router.post('/', postEmpresa)






export default router