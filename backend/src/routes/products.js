// Importo la librería express
import express from "express";
// Importo la librería de productsControllers
import productsController from "../controllers/productsControllers.js";

// Creo una instancia del enrutador de express
const router = express.Router();

// Defino la ruta raíz "/"
router.route("/")
    .get(productsController.getProducts)
    .post(productsController.createProducts)

router.route("/:id")

    .put(productsController.updateProducts)
    .delete(productsController.deleteProducts);

