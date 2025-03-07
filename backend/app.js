//Se esta llamdo la libreria express osea se importa todo
import express from "express";

//Creo una constante que es igual a la libreria que importe
const app = express();

//Definimos las rutas de las funciones que tenfra la pagina web 

app.use("api/products")

//Se exporta la contante para poder usar express en otros archivos (se exporta todo)
export default app;

//En package.json tenemos que siempre agregar "type": "module" debajo de main 