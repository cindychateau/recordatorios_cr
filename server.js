/*
TERMINAL DE SERVIDOR
Creamos server.js
terminal: npm init -y (crea package.json)
Editar package.json -> "start": "nodemon server.js"
terminal: npm install express mongoose cors
Crear siguientes carpetas:
   -server
        -config
        -controllers
        -models
        -routes
*Si instalamos algo erróneo: npm uninstall express
--------
TERMINAL DE CLIENTE
terminal: npx create-react-app client
Esperamos a que diga Happy hacking!
terminal: cd client
terminal: npm install axios react-router-dom
*/

const express = require("express");
const app = express();

const cors = require("cors")

app.use(express.json(), express.urlencoded({extended:true}));

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL de React
        origin: "http://localhost:3000"
    })
)

//Inicializar BD
require("./server/config/mongoose.config");

//Importar Rutas
const misRutas = require("./server/routes/recordatorio.routes");
misRutas(app);

//Ejecutamos el server
app.listen(8000, ()=>console.log("Servidor listo !"));