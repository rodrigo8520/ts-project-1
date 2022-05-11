import type { Sequelize } from "sequelize";
import { alumnos as _alumnos } from "./alumnos";
import type { alumnosAttributes, alumnosCreationAttributes } from "./alumnos";

export {
  _alumnos as alumnos,
};

export type {
  alumnosAttributes,
  alumnosCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const alumnos = _alumnos.initModel(sequelize);


  return {
    alumnos: alumnos,
  };
}
