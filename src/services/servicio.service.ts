import { Model, Optional, Sequelize } from 'sequelize';
import { Servicio } from '../models/Servicio';


class ServicioServices {

    public servicio
    public conexion

    constructor() {

        this.servicio = []

        this.conexion = new Sequelize({
            database: "facturacionDb",
            username: "factur",
            password: "abc123",
            host: "localhost",
            port: 3306,
            dialect: 'mysql',
        })
        
    }


    async getServicio() {

        
        const ServicioModel = await Servicio.initModel(this.conexion);
        const mod = await ServicioModel.findAll();
        //const mod = await EmpresaModel.findByPk();

        console.log(mod.every(id => id instanceof Servicio)); // true
        console.log("All mod:", JSON.stringify(mod, null, 2));

        return mod;


    }

    async getServicioId(id: number) {

        const ServicioModel = await Servicio.initModel(this.conexion);
        const mod = await ServicioModel.findByPk(id);
        console.log("getServicioId Service");

        return mod;

    }

    //actualizaar
    async putServicio(id: number, servicio: any) {

        const ServicioUp = await Servicio.initModel(this.conexion)
        const up = await ServicioUp.findByPk(id);

        // const ups = await EmpresaUp.update({
        //     direccion: "villa alemana 123",
        //     telefono: 555555
        // }, {
        //     where: {
        //         id: 8
        //     }
        // });
        console.log("putServicio Ok")
        await up.update(servicio);

        //return up;


    }

    async postServicio(servicio: any) {

        const ServId = await Servicio.initModel(this.conexion);
        console.log("postServicio services OK");
        const servicioid = await ServId.create(
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
                ...servicio,
                //fechaModificacion: new Date()
            }

        )

    }



    async deleteServicio(id: number) {

        const ServicioDele = await Servicio.initModel(this.conexion)
        // const dele = await EmpresaDele.destroy({
        //     where: {
        //         id: 2
        //     }
        // });

        try {
            const servicio = await Servicio.findByPk(id);
            await servicio.destroy();

        } catch (error) {
            console.log(error);
            // return new Error("Error en deleteServicio service");
            throw new Error("Error en deleteServicio service");
        }
    }


}

export default ServicioServices