import type { Sequelize } from "sequelize";
import { Detalle as _Detalle } from "./Detalle";
import type { DetalleAttributes, DetalleCreationAttributes } from "./Detalle";
import { Empresa as _Empresa } from "./Empresa";
import type { EmpresaAttributes, EmpresaCreationAttributes } from "./Empresa";
import { Factura as _Factura } from "./Factura";
import type { FacturaAttributes, FacturaCreationAttributes } from "./Factura";
import { Producto as _Producto } from "./Producto";
import type { ProductoAttributes, ProductoCreationAttributes } from "./Producto";
import { Servicio as _Servicio } from "./Servicio";
import type { ServicioAttributes, ServicioCreationAttributes } from "./Servicio";
import { Usuario as _Usuario } from "./Usuario";
import type { UsuarioAttributes, UsuarioCreationAttributes } from "./Usuario";

export {
  _Detalle as Detalle,
  _Empresa as Empresa,
  _Factura as Factura,
  _Producto as Producto,
  _Servicio as Servicio,
  _Usuario as Usuario,
};

export type {
  DetalleAttributes,
  DetalleCreationAttributes,
  EmpresaAttributes,
  EmpresaCreationAttributes,
  FacturaAttributes,
  FacturaCreationAttributes,
  ProductoAttributes,
  ProductoCreationAttributes,
  ServicioAttributes,
  ServicioCreationAttributes,
  UsuarioAttributes,
  UsuarioCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Detalle = _Detalle.initModel(sequelize);
  const Empresa = _Empresa.initModel(sequelize);
  const Factura = _Factura.initModel(sequelize);
  const Producto = _Producto.initModel(sequelize);
  const Servicio = _Servicio.initModel(sequelize);
  const Usuario = _Usuario.initModel(sequelize);

  Detalle.belongsTo(Factura, { as: "idFactura_Factura", foreignKey: "idFactura"});
  Factura.hasMany(Detalle, { as: "Detalles", foreignKey: "idFactura"});
  Detalle.belongsTo(Producto, { as: "idProducto_Producto", foreignKey: "idProducto"});
  Producto.hasMany(Detalle, { as: "Detalles", foreignKey: "idProducto"});
  Detalle.belongsTo(Servicio, { as: "idServicio_Servicio", foreignKey: "idServicio"});
  Servicio.hasMany(Detalle, { as: "Detalles", foreignKey: "idServicio"});
  Factura.belongsTo(Usuario, { as: "rut_Usuario", foreignKey: "rut"});
  Usuario.hasMany(Factura, { as: "Facturas", foreignKey: "rut"});

  return {
    Detalle: Detalle,
    Empresa: Empresa,
    Factura: Factura,
    Producto: Producto,
    Servicio: Servicio,
    Usuario: Usuario,
  };
}
