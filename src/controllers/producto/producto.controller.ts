import { NextFunction, Request, Response } from "express";
import ProductoServices from "../../services/producto.service";



export const getProducto = async (req: Request, res: Response, next: NextFunction) => {

    const productoServ = new ProductoServices();
    const producto = await productoServ.getProducto();

    console.log("getProducto Ok")
    res.status(200).json(producto)

    //res.status(200) para apis
}

export const getProductoId = async (req: Request, res: Response, next: NextFunction) => {

    const id: number = parseInt(req.params.id);
    const productoServ = new ProductoServices();
    const producto = await productoServ.getProductoId(id);

    if (producto) {
        console.log("getProducto ID controller ok");
        res.status(200).json(producto);
    } else {
        res.status(404).json({
            msg: `No existe Producto con id ${id}`
        })
    }


}

export const putProducto = async (req: Request, res: Response, next: NextFunction) => {

    const id: number = parseInt(req.params.id);
    const payload = req.body;
    const objService = new ProductoServices();


    try {
        const producto = await objService.putProducto(id, payload)
        console.log("body", req.body, id)
        res.status(200).json(producto);
    } catch (error) {

        console.log(error);
        res.status(500)
    }

}

export const postProducto = async (req: Request, res: Response, next: NextFunction) => {

    const payload = req.body;
    const objService = new ProductoServices();

    try {
        console.log(payload.nombre);

        const producto = await objService.postProducto(payload);
        console.log("postProducto controller ok");

        res.status(200).json(producto);
    } catch (error) {

        console.log(error);
        res.status(500)
    }

}


export const deleteProducto = async (req: Request, res: Response, next: NextFunction) => {

    //const { id } = req.params;
    const id: number = parseInt(req.params.id);
    const objService = new ProductoServices();

    try {
        const producto = await objService.deleteProducto(id);
        console.log("deleteProducto OK");
        res.status(200).json(producto);

    } catch (error) {
        console.log('error en deleteProducto controller');
        res.status(500).json({ })
    }

}

























/*
export const getProducto = async (req: Request, res: Response, next: NextFunction) => {

    //const id: number = parseInt(req.params.id);
    const var1  = req.params.valor1;
   // const var2 = req.params.valor2;
   // console.log(var1)
    // let aus1 = parseInt(var1)
    // let aus2 = parseInt(var2)
    let respuesta = var1
    //const respuesta = this();

    const var3 = faker.commerce.productName()

    const productosServ = new Productos();
    const productos = await productosServ.getProduct()

    //res.send('Tu producto es:  ' + productos);
    //console.log(productos.getProduct())

    res.status(200).json(productos)
    //res.status(200) para apis

}

export const getProductoNombre = async (req: Request, res: Response, next: NextFunction) => {

    //const id: number = parseInt(req.params.id);
    const var1  = req.params.name;
   // const var2 = req.params.valor2;
   // console.log(var1)
    // let aus1 = parseInt(var1)
    // let aus2 = parseInt(var2)
    let respuesta = var1
    //const respuesta = this();

    const var3 = faker.commerce.productName()

    const productosServ = new Productos();
    const productos = await productosServ.getProduct()

    //res.send('Tu producto es:  ' + productos);
    //console.log(productos.getProduct())

    res.status(200).json(productos)
    //res.status(200) para apis

}
*/