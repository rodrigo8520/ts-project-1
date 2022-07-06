/**
 * GET /v1/servicio
 * @description  Toda la lista de la servicio 
 * @summary  Toda la lista de la servicio
 * @tags servicio - endpoints para servicio
 * @return {object} 200 - resultado ok - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - error no controlado - application/json
 */


/**
 * GET /v1/servicio/{id}
 * @description  lista de servicio por id
 * @summary  lista de servicio por id
 * @tags servicio - endpoints para servicio
 * @param {number} id.path.required - busca por id  
 * @return {object} 200 - resultado ok - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - error no controlado - application/json
 */

/**
 * POST /v1/servicio
 * @description  Crear servicio 
 * @summary Crear servicio 
 * @tags servicio - endpoints para servicio
 * @param {ServicioCreate} request.body.required - - Items requeridos
 * @return {object} 201 - Creacion correcta. - application/json
 * @return {object} 422 - faltan datos para realizar la peticion - application/json
 * @return {object} 500 - no se creo el registro, leer respuesta. - application/json 
 */


/**
 * A ServicioCreate type
 * @typedef {object} ServicioCreate
 * @property {string} nombre.required 
 * @property {string} descripcionServ.required
*/



/**
 * DELETE /v1/servicio/{id}
 * @description elimina registro de servicio
 * @summary elimina registro de servicio
 * @tags  servicio
 * @param {number} id.path.required - id a eliminar.
 * @return {object} 204 - eliminacion correcta. - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - Error al eliminar - application/json
 */


/**
 * PUT /v1/servicio/{id}
 * @description actualizacion de servicio
 * @summary actualizacion de servicio
 * @tags servicio
 * @param {number} id.path.required - id a actualizar
 * @param {servicioUpdate} request.body.required - Items requeridos
 * @return {object} 200 - correcto - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - Error - application/json
 */


/**
 * A servicioUpdate type
 * @typedef {object} servicioUpdate
 * @property {string} nombre.required 
 * @property {string} descripcionServ.required
*/