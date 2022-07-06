import { Router } from "express"
import { deleteUsuarioValid, getUsuarioValid, getUsuarioValidById, postUsuarioValid, putUsuarioValid, validateUsuario } from "../controllers/usuario/usuario.validate"
import { getUsuario, getUsuarioId, putUsuario } from "../controllers/usuario/usuario.controller"




const router = Router()

router.get('/', getUsuarioValid(),          validateUsuario, getUsuario)
router.get('/:id',getUsuarioValidById() ,   validateUsuario, getUsuarioId)
router.put('/:id', putUsuarioValid(),       validateUsuario, putUsuario)
router.delete('/:id', deleteUsuarioValid(), validateUsuario, deleteUsuarioValid)
router.post('/', postUsuarioValid(),        validateUsuario, postUsuarioValid)


export default router