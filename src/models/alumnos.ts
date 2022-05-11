import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface alumnosAttributes {
  alumnoID: number;
  nombre?: string;
  apellido?: string;
  telefono?: number;
}

export type alumnosPk = "alumnoID";
export type alumnosId = alumnos[alumnosPk];
export type alumnosOptionalAttributes = "alumnoID" | "nombre" | "apellido" | "telefono";
export type alumnosCreationAttributes = Optional<alumnosAttributes, alumnosOptionalAttributes>;

export class alumnos extends Model<alumnosAttributes, alumnosCreationAttributes> implements alumnosAttributes {
  alumnoID!: number;
  nombre?: string;
  apellido?: string;
  telefono?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof alumnos {
    return alumnos.init({
    alumnoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'alumnos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "alumnoID" },
        ]
      },
    ]
  });
  }
}
