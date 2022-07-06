import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Factura, FacturaId } from './Factura';
import type { Producto, ProductoId } from './Producto';
import type { Servicio, ServicioId } from './Servicio';

export interface DetalleAttributes {
  id: number;
  idFactura?: number;
  idProducto?: number;
  idServicio?: number;
  descripcionDetalle?: string;
}

export type DetallePk = "id";
export type DetalleId = Detalle[DetallePk];
export type DetalleOptionalAttributes = "id" | "idFactura" | "idProducto" | "idServicio" | "descripcionDetalle";
export type DetalleCreationAttributes = Optional<DetalleAttributes, DetalleOptionalAttributes>;

export class Detalle extends Model<DetalleAttributes, DetalleCreationAttributes> implements DetalleAttributes {
  id!: number;
  idFactura?: number;
  idProducto?: number;
  idServicio?: number;
  descripcionDetalle?: string;

  // Detalle belongsTo Factura via idFactura
  idFactura_Factura!: Factura;
  getIdFactura_Factura!: Sequelize.BelongsToGetAssociationMixin<Factura>;
  setIdFactura_Factura!: Sequelize.BelongsToSetAssociationMixin<Factura, FacturaId>;
  createIdFactura_Factura!: Sequelize.BelongsToCreateAssociationMixin<Factura>;
  // Detalle belongsTo Producto via idProducto
  idProducto_Producto!: Producto;
  getIdProducto_Producto!: Sequelize.BelongsToGetAssociationMixin<Producto>;
  setIdProducto_Producto!: Sequelize.BelongsToSetAssociationMixin<Producto, ProductoId>;
  createIdProducto_Producto!: Sequelize.BelongsToCreateAssociationMixin<Producto>;
  // Detalle belongsTo Servicio via idServicio
  idServicio_Servicio!: Servicio;
  getIdServicio_Servicio!: Sequelize.BelongsToGetAssociationMixin<Servicio>;
  setIdServicio_Servicio!: Sequelize.BelongsToSetAssociationMixin<Servicio, ServicioId>;
  createIdServicio_Servicio!: Sequelize.BelongsToCreateAssociationMixin<Servicio>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Detalle {
    return Detalle.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idFactura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Factura',
        key: 'id'
      }
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Producto',
        key: 'id'
      }
    },
    idServicio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Servicio',
        key: 'id'
      }
    },
    descripcionDetalle: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Detalle',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_idDetalle_fact",
        using: "BTREE",
        fields: [
          { name: "idFactura" },
        ]
      },
      {
        name: "fk_idDetalle_prod",
        using: "BTREE",
        fields: [
          { name: "idProducto" },
        ]
      },
      {
        name: "fk_idDetalle_serv",
        using: "BTREE",
        fields: [
          { name: "idServicio" },
        ]
      },
    ]
  });
  }
}
