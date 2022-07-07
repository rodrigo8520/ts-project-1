/**
 * GET /v1/factura
 * @description  Toda la lista de la factura 
 * @summary  Toda la lista de la factura
 * @tags factura - endpoints para factura
 * @return {object} 200 - resultado ok - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - error no controlado - application/json
 */


/**
 * GET /v1/factura/{id}
 * @description  lista de factura por id
 * @summary  lista de factura por id
 * @tags factura - endpoints para factura
 * @param {number} id.path.required - busca por id  
 * @return {object} 200 - resultado ok - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - error no controlado - application/json
 */

/**
 * POST /v1/factura
 * @description  Crear factura 
 * @summary Crear factura 
 * @tags factura - endpoints para factura
 * @param {FacturaCreate} request.body.required - - Items requeridos
 * @return {object} 201 - Creacion correcta. - application/json
 * @return {object} 422 - faltan datos para realizar la peticion - application/json
 * @return {object} 500 - no se creo el registro, leer respuesta. - application/json 
 */


/**
 * A FacturaCreate type
 * @typedef {object} FacturaCreate
 * @property {string} fechaCreacion.required
*/



/**
 * DELETE /v1/factura/{id}
 * @description elimina registro de factura
 * @summary elimina registro de factura
 * @tags  factura
 * @param {number} id.path.required - id a eliminar.
 * @return {object} 204 - eliminacion correcta. - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - Error al eliminar - application/json
 */


/**
 * PUT /v1/factura/{id}
 * @description actualizacion de factura
 * @summary actualizacion de factura
 * @tags factura
 * @param {number} id.path.required - id a actualizar
 * @param {facturaUpdate} request.body.required - Items requeridos
 * @return {object} 200 - correcto - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - Error - application/json
 */


/**
 * A facturaUpdate type
 * @typedef {object} facturaUpdate
 * @property {string} fechaCreacion.required
*/