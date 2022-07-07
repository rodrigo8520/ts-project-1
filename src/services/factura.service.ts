import { Model, Optional, Sequelize } from 'sequelize';
import { Factura } from '../models/Factura';


class FacturaServices {

    public factura
    public conexion

    constructor() {

        this.factura = []

        this.conexion = new Sequelize({
            database: "facturacionDb",
            username: "factur",
            password: "abc123",
            host: "localhost",
            port: 3306,
            dialect: 'mysql',
        })
        
    }


    async getFactura() {

        
        const FacturaModel = await Factura.initModel(this.conexion);
        const mod = await FacturaModel.findAll();
        //const mod = await EmpresaModel.findByPk();

        console.log(mod.every(id => id instanceof Factura)); // true
        console.log("All mod:", JSON.stringify(mod, null, 2));

        return mod;


    }

    async getFacturaId(id: number) {

        const FacturaModel = await Factura.initModel(this.conexion);
        const mod = await FacturaModel.findByPk(id);
        console.log("getFacturaId Service");

        return mod;

    }

    //actualizaar
    async putFactura(id: number, factura: any) {

        const FacturaUp = await Factura.initModel(this.conexion)
        const up = await FacturaUp.findByPk(id);

        // const ups = await EmpresaUp.update({
        //     direccion: "villa alemana 123",
        //     telefono: 555555
        // }, {
        //     where: {
        //         id: 8
        //     }
        // });
        console.log("putFactura Ok")
        await up.update(factura);

        //return up;


    }

    async postFactura(factura: any) {

        const ServId = await Factura.initModel(this.conexion);
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
                ...factura,
                //fechaModificacion: new Date()
            }

        )

    }



    async deleteFactura(id: number) {

        const FacturaDele = await Factura.initModel(this.conexion)
        // const dele = await EmpresaDele.destroy({
        //     where: {
        //         id: 2
        //     }
        // });

        try {
            const factura = await Factura.findByPk(id);
            await factura.destroy();

        } catch (error) {
            console.log(error);
            // return new Error("Error en deleteFactura service");
            throw new Error("Error en deleteFactura service");
        }
    }


}

export default FacturaServices