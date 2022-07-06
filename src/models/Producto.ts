import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Detalle, DetalleId } from './Detalle';

export interface ProductoAttributes {
  id: number;
  nombre?: string;
  precio?: number;
  stock?: number;
  tipoProcucto?: string;
}

export type ProductoPk = "id";
export type ProductoId = Producto[ProductoPk];
export type ProductoOptionalAttributes = "id" | "nombre" | "precio" | "stock" | "tipoProcucto";
export type ProductoCreationAttributes = Optional<ProductoAttributes, ProductoOptionalAttributes>;

export class Producto extends Model<ProductoAttributes, ProductoCreationAttributes> implements ProductoAttributes {
  id!: number;
  nombre?: string;
  precio?: number;
  stock?: number;
  tipoProcucto?: string;

  // Producto hasMany Detalle via idProducto
  Detalles!: Detalle[];
  getDetalles!: Sequelize.HasManyGetAssociationsMixin<Detalle>;
  setDetalles!: Sequelize.HasManySetAssociationsMixin<Detalle, DetalleId>;
  addDetalle!: Sequelize.HasManyAddAssociationMixin<Detalle, DetalleId>;
  addDetalles!: Sequelize.HasManyAddAssociationsMixin<Detalle, DetalleId>;
  createDetalle!: Sequelize.HasManyCreateAssociationMixin<Detalle>;
  removeDetalle!: Sequelize.HasManyRemoveAssociationMixin<Detalle, DetalleId>;
  removeDetalles!: Sequelize.HasManyRemoveAssociationsMixin<Detalle, DetalleId>;
  hasDetalle!: Sequelize.HasManyHasAssociationMixin<Detalle, DetalleId>;
  hasDetalles!: Sequelize.HasManyHasAssociationsMixin<Detalle, DetalleId>;
  countDetalles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Producto {
    return Producto.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipoProcucto: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Producto',
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
    ]
  });
  }
}
