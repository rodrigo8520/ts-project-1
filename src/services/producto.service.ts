import { Model, Optional, Sequelize } from 'sequelize';
import { Producto } from '../models/Producto';




class ProductoServices {

    public producto
    public conexion

    constructor() {

        this.producto = []

        this.conexion = new Sequelize({
            database: "facturacionDb",
            username: "factur",
            password: "abc123",
            host: "localhost",
            port: 3306,
            dialect: 'mysql',
        })
        
    }


    async getProducto() {

        
        //const sequelize = new Sequelize();
        const ProductoModel = await Producto.initModel(this.conexion);
        const mod = await ProductoModel.findAll();
        //const mod = await ProductoModel.findByPk();

        console.log(mod.every(id => id instanceof Producto)); // true
        console.log("All mod:", JSON.stringify(mod, null, 2));

        return mod;


    }

    async getProductoId(id: number) {

        const ProductoModel = await Producto.initModel(this.conexion);
        const mod = await ProductoModel.findByPk(id);
        console.log("getProductoId Service");

        return mod;

    }

    //actualizaar
    async putProducto(id: number, producto: any) {

        const ProductoUp = await Producto.initModel(this.conexion)
        const up = await ProductoUp.findByPk(id);

        console.log("putProducto Ok")
        await up.update(producto);

        //return up;


    }

    async postProducto(producto: any) {

        const ProducId = await Producto.initModel(this.conexion);
        console.log("postProducto services OK");
        const productoid = await ProducId.create(
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
                ...producto,
                //fechaModificacion: new Date()
            }

        )

    }



    async deleteProducto(id: number) {

        const ProductoDele = await Producto.initModel(this.conexion)
        // const dele = await EmpresaDele.destroy({
        //     where: {
        //         id: 2
        //     }
        // });

        try {
            const producto = await Producto.findByPk(id);
            await producto.destroy();

        } catch (error) {
            console.log(error);
            // return new Error("Error en deleteProducto service");
            throw new Error("Error en deleteProducto service");
        }
    }


}

export default ProductoServices

























/*
import faker from "@faker-js/faker";


class Productos {

    public products 
    //Fake data (Libreria para generar información random)
    constructor() {
        this.products = []
        this.generate()
    }

    async generate() {
        const limite = 100 //Iniciar con 100 productos de ejemplo
        for (let i = 0; i < limite; i++) {
            this.products.push({
                //Generando datos aleatorios
                uuid: faker.datatype.uuid(),
                nombre: faker.commerce.productName(),
                precio: parseInt(faker.commerce.price(), 10),
                color: faker.commerce.color(),
                //description: faker.commerce.productDescription()
            })
        }
    }
    
    async getProduct()  {

        return this.products;
    }

    async getProductName()  {

        return this.products;
    }

}

export default Productos

*/