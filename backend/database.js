// Importo la librería mongoose para interactuar con MongoDB
import mongoose from "mongoose";

// 1- Configuro la URI o dirección de la base de datos
const URI = "mongodb://localhost:27017/ZonaDiguitalDB20230098"; 

// 2- Conectamos la base de datos usando la URI configurada
mongoose.connect(URI);

// Comprobar todo
// 3- Creo una constante que representa la conexión a la base de datos
const connection = mongoose.connection; 

// Evento que se ejecuta una vez que la conexión se abre exitosamente
connection.once("open", () => {
    console.log("DB is connected"); 
});

// Evento que se ejecuta cuando la conexión se pierde
connection.on("disconnected", () => {
    console.log("DB is disconnected"); 
});

// Evento que se ejecuta en caso de un error en la conexión
connection.on("error", (error) => {
    console.log("error found: " + error); 
});

