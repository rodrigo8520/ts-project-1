/**
 * GET /v1/detalle
 * @description  Toda la lista de la detalle 
 * @summary  Toda la lista de la detalle
 * @tags detalle - endpoints para detalle
 * @return {object} 200 - resultado ok - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - error no controlado - application/json
 */


/**
 * GET /v1/detalle/{id}
 * @description  lista de detalle por id
 * @summary  lista de detalle por id
 * @tags detalle - endpoints para detalle
 * @param {number} id.path.required - busca por id  
 * @return {object} 200 - resultado ok - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - error no controlado - application/json
 */

/**
 * POST /v1/detalle
 * @description  Crear detalle 
 * @summary Crear detalle 
 * @tags detalle - endpoints para detalle
 * @param {DetalleCreate} request.body.required - - Items requeridos
 * @return {object} 201 - Creacion correcta. - application/json
 * @return {object} 422 - faltan datos para realizar la peticion - application/json
 * @return {object} 500 - no se creo el registro, leer respuesta. - application/json 
 */


/**
 * A DetalleCreate type
 * @typedef {object} DetalleCreate
 * @property {string} descripcionDetalle.required
*/



/**
 * DELETE /v1/detalle/{id}
 * @description elimina registro de detalle
 * @summary elimina registro de detalle
 * @tags  detalle
 * @param {number} id.path.required - id a eliminar.
 * @return {object} 204 - eliminacion correcta. - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - Error al eliminar - application/json
 */


/**
 * PUT /v1/detalle/{id}
 * @description actualizacion de detalle
 * @summary actualizacion de detalle
 * @tags detalle
 * @param {number} id.path.required - id a actualizar
 * @param {detalleUpdate} request.body.required - Items requeridos
 * @return {object} 200 - correcto - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - Error - application/json
 */


/**
 * A detalleUpdate type
 * @typedef {object} detalleUpdate
 * @property {string} descripcionDetalle.required
*/