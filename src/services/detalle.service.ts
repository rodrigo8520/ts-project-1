import { Model, Optional, Sequelize } from 'sequelize';
import { Detalle } from '../models/Detalle';


class DetalleServices {

    public detalle
    public conexion

    constructor() {

        this.detalle = []

        this.conexion = new Sequelize({
            database: "facturacionDb",
            username: "factur",
            password: "abc123",
            host: "localhost",
            port: 3306,
            dialect: 'mysql',
        })
        
    }


    async getDetalle() {

        
        const DetalleModel = await Detalle.initModel(this.conexion);
        const mod = await DetalleModel.findAll();
        //const mod = await EmpresaModel.findByPk();

        console.log(mod.every(id => id instanceof Detalle)); // true
        console.log("All mod:", JSON.stringify(mod, null, 2));

        return mod;


    }

    async getDetalleId(id: number) {

        const DetalleModel = await Detalle.initModel(this.conexion);
        const mod = await DetalleModel.findByPk(id);
        console.log("getDetalleId Service");

        return mod;

    }

    //actualizaar
    async putDetalle(id: number, detalle: any) {

        const DetalleUp = await Detalle.initModel(this.conexion)
        const up = await DetalleUp.findByPk(id);

        
        console.log("putFactura Ok")
        await up.update(detalle);

        //return up;

    }

    async postDetalle(detalle: any) {

        const ServId = await Detalle.initModel(this.conexion);
        console.log("postFactura services OK");
        const facturaid = await ServId.create(
            //opcion 1 Trae al objeto entero no se usa, puede traer problemas
            //empresa      

            //opcion 2  Se escribe cada uno de los 
            // {
            //     direccion: empresa.direccion,                
            //     telefono: empresa.telefono,
            //     fechaCreacion: empresa.fechaCreacion,
            //     fechaModificacion: new Date()
            // }
            //opcion 3  Tecnica de los 3 puntos
            //   Trae el objeto entero + elementos extras que uno quiera
            {
                ...detalle,
                //fechaModificacion: new Date()
            }

        )

    }

    async deleteDetalle(id: number) {

        const DetalleDele = await Detalle.initModel(this.conexion)

        try {
            const detalle = await Detalle.findByPk(id);
            await detalle.destroy();

        } catch (error) {
            console.log(error);
            // return new Error("Error en deleteDetalle service");
            throw new Error("Error en deleteDetalle service");
        }
    }


}

export default DetalleServices