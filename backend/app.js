//Se esta llamdo la libreria express osea se importa todo
import express from "express";
import productRoutes from "./src/routes/products.js";

//Creo una constante que es igual a la libreria que importe
const app = express();

//Que acepte datos en json
app.use(express.json());

//Definimos las rutas de las funciones que tenfra la pagina web 

app.use("/api/products", productRoutes)

//Se exporta la contante para poder usar express en otros archivos (se exporta todo)
export default app;

//En package.json tenemos que siempre agregar "type": "module" debajo de main 