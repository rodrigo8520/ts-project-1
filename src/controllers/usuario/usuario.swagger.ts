/**
 * GET /v1/usuario
 * @description  Toda la lista de la usuario 
 * @summary  Toda la lista de la usuario
 * @tags usuario - endpoints para usuario
 * @return {object} 200 - resultado ok - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - error no controlado - application/json
 */


/**
 * GET /v1/usuario/{rut}
 * @description  lista de usuario por rut
 * @summary  lista de usuario por rut
 * @tags usuario - endpoints para usuario
 * @param {number} rut.path.required - busca por rut  
 * @return {object} 200 - resultado ok - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - error no controlado - application/json
 */

/**
 * POST /v1/usuario
 * @description  Crear usuario 
 * @summary Crear usuario 
 * @tags usuario - endpoints para usuario
 * @param {UsuarioCreate} request.body.required - - Items requeridos
 * @return {object} 201 - Creacion correcta. - application/json
 * @return {object} 422 - faltan datos para realizar la peticion - application/json
 * @return {object} 500 - no se creo el registro, leer respuesta. - application/json 
 */


/**
 * A UsuarioCreate type
 * @typedef {object} UsuarioCreate
 * @property {number} rut.required
 * @property {string} nombre.required 
 * @property {string} apellido.required
 * @property {string} direccion.required
 * @property {number} telefono.required
 * @property {string} email.required
*/



/**
 * DELETE /v1/usuario/{rut}
 * @description elimina registro de usuario
 * @summary elimina registro de usuario
 * @tags  usuario
 * @param {number} rut.path.required - rut a eliminar.
 * @return {object} 204 - eliminacion correcta. - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - Error al eliminar - application/json
 */


/**
 * PUT /v1/usuario/{rut}
 * @description actualizacion de usuario
 * @summary actualizacion de usuario
 * @tags usuario
 * @param {number} rut.path.required - rut a actualizar
 * @param {usuarioUpdate} request.body.required - Items requeridos
 * @return {object} 200 - correcto - application/json
 * @return {object} 404 - no encontrado - application/json
 * @return {object} 500 - Error - application/json
 */


/**
 * A usuarioUpdate type
 * @typedef {object} usuarioUpdate
 * @property {number} rut.required
 * @property {string} nombre.required 
 * @property {string} apellido.required
 * @property {string} direccion.required
 * @property {number} telefono.required
 * @property {string} email.required
*/