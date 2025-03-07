// Importo la librería express
import express from "express";

// Creo una instancia del enrutador de express
const router = express.Router();

// Defino la ruta raíz "/"
router.route("/")
    .get()
    .post()
    .put()
    .delete();  
