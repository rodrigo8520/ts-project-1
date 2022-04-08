import { Router } from "express"
import { getHoraTrabajo, getReajuste } from "../controllers/remu.controller"



const router = Router()
//matematicas/sumar/var1/var2

router.use('/horatrabajo/:valor1/:valor2', getHoraTrabajo)

router.use('/reajuste/:valor1/:valor2', getReajuste)



export default router