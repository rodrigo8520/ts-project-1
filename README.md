

```bash
npm run start
```

npm install -g mysql2
npm install -g sequelize-auto


sequelize-auto -o "./src/models" -h localhost -d prueba -u usuario -p 3306 -x 'password' -l ts

sequelize-auto -o "./src/models" -h localhost -d facturacionDb -u factur -p 3306 -x 'abc123' -l ts

TAREA

* Borrar tabla alumnos, crear tabla Empresa
* Tiene camelcase , alumnoID a id
* id autonumerico 
* fecha de creacion y de modificacion
* una sola con getdate autom
* Crear crud Empresa

docker ps -a  (lista)
docker container rm (remove)
docker image ls
docker container stop adminerDb
docker container ls
docker image rm 96d0eae5ed60


Montar iniciar servidor Docker
PS D:\source\docker\MySql> docker-compose -f mysql.yml up -d 


Morgan - se instalo npm de tyscript y dio error 
        se instala el npm i morgan se soluciono

Adminer http://localhost:9090/
http://localhost:3000/v1matematicas/sumar/5/5
http://localhost:3000/api-docs/


endPoints Usuario - incompletos --> problema en no  postUsuario 
endPOints factura - incompletos --> duda con rut 
endPOints detalle - incompletos --> llave foraneas null, duda pendiente 