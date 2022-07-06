/**
 * GET /v1/producto
 * @description  Toda la lista de la producto 
 * @summary  Toda la lista de la producto
 * @tags producto - endpoints para producto
 * @return {object} 200 - resultado ok - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - error no controlado - application/json
 */


/**
 * GET /v1/producto/{id}
 * @description  lista de producto por id
 * @summary  lista de producto por id
 * @tags producto - endpoints para producto
 * @param {number} id.path.required - busca por id  
 * @return {object} 200 - resultado ok - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - error no controlado - application/json
 */

/**
 * POST /v1/producto
 * @description  Crear producto 
 * @summary Crear producto 
 * @tags producto - endpoints para producto
 * @param {ProductoCreate} request.body.required - - Items requeridos
 * @return {object} 201 - Creacion correcta. - application/json
 * @return {object} 422 - faltan datos para realizar la peticion - application/json
 * @return {object} 500 - no se creo el registro, leer respuesta. - application/json 
 */


/**
 * A ProductoCreate type
 * @typedef {object} ProductoCreate
 * @property {string} nombre.required 
 * @property {number} precio.required
 * @property {number} stock.required
 * @property {string} tipoProcucto.required
*/



/**
 * DELETE /v1/producto/{id}
 * @description elimina registro de producto
 * @summary elimina registro de producto
 * @tags  producto
 * @param {number} id.path.required - id a eliminar.
 * @return {object} 204 - eliminacion correcta. - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - Error al eliminar - application/json
 */


/**
 * PUT /v1/producto/{id}
 * @description actualizacion de producto
 * @summary actualizacion de producto
 * @tags producto
 * @param {number} id.path.required - id a actualizar
 * @param {productoUpdate} request.body.required - Items requeridos
 * @return {object} 200 - correcto - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - Error - application/json
 */


/**
 * A productoUpdate type
 * @typedef {object} productoUpdate
 * @property {string} nombre.required 
 * @property {number} precio.required
 * @property {number} stock.required
 * @property {string} tipoProcucto.required
*/