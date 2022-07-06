import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Detalle, DetalleId } from './Detalle';

export interface ServicioAttributes {
  id: number;
  nombre?: string;
  descripcionServ?: string;
}

export type ServicioPk = "id";
export type ServicioId = Servicio[ServicioPk];
export type ServicioOptionalAttributes = "id" | "nombre" | "descripcionServ";
export type ServicioCreationAttributes = Optional<ServicioAttributes, ServicioOptionalAttributes>;

export class Servicio extends Model<ServicioAttributes, ServicioCreationAttributes> implements ServicioAttributes {
  id!: number;
  nombre?: string;
  descripcionServ?: string;

  // Servicio hasMany Detalle via idServicio
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Servicio {
    return Servicio.init({
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
    descripcionServ: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Servicio',
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
