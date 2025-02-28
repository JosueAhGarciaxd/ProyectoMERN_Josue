// Se está importando la aplicación desde el archivo app.js
import app from "./app.js";
import "./database.js"; 

// Función principal asíncrona que inicia el servidor
async function main() {
    // Defino el puerto en el que el servidor escuchará las peticiones
    const port = 4000;

    // El servidor comienza a escuchar en el puerto definido
    app.listen(port);

    //Mostrala en la consola el texto Funciona si todo esta correctamente
    console.log("Server on port " + port);
}

// Llamo a la función principal para iniciar el servidor
main();
