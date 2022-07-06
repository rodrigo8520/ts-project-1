import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Detalle, DetalleId } from './Detalle';
import type { Usuario, UsuarioId } from './Usuario';

export interface FacturaAttributes {
  id: number;
  rut?: number;
  fecha?: Date;
}

export type FacturaPk = "id";
export type FacturaId = Factura[FacturaPk];
export type FacturaOptionalAttributes = "id" | "rut" | "fecha";
export type FacturaCreationAttributes = Optional<FacturaAttributes, FacturaOptionalAttributes>;

export class Factura extends Model<FacturaAttributes, FacturaCreationAttributes> implements FacturaAttributes {
  id!: number;
  rut?: number;
  fecha?: Date;

  // Factura hasMany Detalle via idFactura
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
  // Factura belongsTo Usuario via rut
  rut_Usuario!: Usuario;
  getRut_Usuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>;
  setRut_Usuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>;
  createRut_Usuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Factura {
    return Factura.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rut: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Usuario',
        key: 'rut'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Factura',
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
        name: "rut",
        using: "BTREE",
        fields: [
          { name: "rut" },
        ]
      },
    ]
  });
  }
}
