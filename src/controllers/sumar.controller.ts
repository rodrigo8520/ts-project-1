import { NextFunction, Request, Response } from "express";
import { sumar } from "../services/matematica";
import { Model, Optional, Sequelize } from 'sequelize';
import { alumnos } from "../models/alumnos";

// const router = Router()
                        
export const getSumar = async (req: Request, res: Response, next: NextFunction) => {

    //const id: number = parseInt(req.params.id);
    const var1  = req.params.valor1;
    const var2 = req.params.valor2;
   // console.log(var1)
    let aus1 = parseInt(var1)
    let aus2 = parseInt(var2)
    let respuesta = sumar(aus1, aus2)
    //const respuesta = this();

    
    //console.log(respuesta)

    const sequelize = new Sequelize({
        database:"prueba",
        username:"usuario",
        password:"password",
        host:"localhost",
        port:3306,
        dialect:'mysql',
    })
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

      

    //   const alum = `INSERT INTO alumnos (alumnoID, nombre, apellido, telefono) 
    //   VALUES ('', '', '');`

      //const jane = await User.create({ name: "Jane" });

     /*const AlumnoPO = await alumnos.initModel(sequelize)
      const alumno = await AlumnoPO.create({
          alumnoID: 3,
          nombre: "Juan",
          apellido: "qwerty",
          telefono: 7777
      })*/

      const AlumnoUp = await alumnos.initModel(sequelize)
      const up = await AlumnoUp.update({ apellido: "Doe" }, {
        where: {
          apellido: "bbb"
        }
      });

      //// Delete everyone named "Jane"
      const AlumnoDele = await alumnos.initModel(sequelize)
      const dele = await AlumnoDele.destroy({
        where: {
          nombre: "Ju"
        }
      });

      const AlumnoModel = await alumnos.initModel(sequelize)
      const mod = await AlumnoModel.findAll()

      //console.log(mod);
      console.log(mod.every(alumnoID => alumnoID instanceof alumnos)); // true
      console.log("All mod:", JSON.stringify(mod, null, 2));

    //   const mod = AlumnoModel.findAll({
    //     include: [alumnos]
    //   });

     /* Team.findAll({
        include: [
            Player
        ]
    }
)*/

      res.send('el numero es ' + respuesta);

}

// router.get('/sumar/:valor1/:valor2', (req, res) => {

//     let var1 = req.params.valor1;
//     let var2 = req.params.valor2;

//     let aus1 = parseInt(var1)
//     let aus2 = parseInt(var2)
//     let respuesta = sumar(aus1 , aus2)
//     //const respuesta = this();
//     res.send('el numero es ' + respuesta);
//     //res.send('el numero es '+dos);
// });

// export default router