import type { Sequelize } from "sequelize";
import { Empresa as _Empresa } from "./Empresa";
import type { EmpresaAttributes, EmpresaCreationAttributes } from "./Empresa";

export {
  _Empresa as Empresa,
};

export type {
  EmpresaAttributes,
  EmpresaCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Empresa = _Empresa.initModel(sequelize);


  return {
    Empresa: Empresa,
  };
}
