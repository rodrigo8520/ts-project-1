import { Model, Optional, Sequelize } from 'sequelize';
import { Usuario } from "../models/Usuario";


class UsuarioServices {

    public usuario
    public conexion

    constructor() {

        this.usuario = []

        this.conexion = new Sequelize({
            database: "facturacionDb",
            username: "factur",
            password: "abc123",
            host: "localhost",
            port: 3306,
            dialect: 'mysql',
        })
        
    }


    async getUsuario() {

        
        const UsuarioModel = await Usuario.initModel(this.conexion);
        const mod = await UsuarioModel.findAll();
        //const mod = await EmpresaModel.findByPk();

        console.log(mod.every(rut => rut instanceof Usuario)); // true
        console.log("All mod:", JSON.stringify(mod, null, 1));

        return mod;


    }

    async getUsuarioId(rut: number) {

        const UsuarioModel = await Usuario.initModel(this.conexion);
        const mod = await UsuarioModel.findByPk(rut);
        console.log("getUsuarioRut Service");

        return mod;

    }

    //actualizaar
    async putUsuario(rut: number, usuario: any) {

        const UsuarioUp = await Usuario.initModel(this.conexion)
        const up = await UsuarioUp.findByPk(rut);

        // const ups = await EmpresaUp.update({
        //     direccion: "villa alemana 123",
        //     telefono: 555555
        // }, {
        //     where: {
        //         id: 8
        //     }
        // });
        console.log("putUsuario Ok")
        await up.update(usuario);

        //return up;


    }

    async postUsuario(usuario: any) {

        const ServId = await Usuario.initModel(this.conexion);
        console.log("postUsuario services OK");
        const usuarioid = await ServId.create(
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
                ...usuario,
                //fechaModificacion: new Date()
            }

        )

    }



    async deleteUsuario(rut: number) {

        const UsuarioDele = await Usuario.initModel(this.conexion)
        // const dele = await EmpresaDele.destroy({
        //     where: {
        //         id: 2
        //     }
        // });

        try {
            const usuario = await Usuario.findByPk(rut);
            await usuario.destroy();

        } catch (error) {
            console.log(error);
            // return new Error("Error en deleteUsuario service");
            throw new Error("Error en deleteUsuario service");
        }
    }


}

export default UsuarioServices