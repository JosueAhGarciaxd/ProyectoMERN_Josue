// Array de métodos (CRUD)
const productsController = {};
import productsModel from "../models/Products.js"

// Método para obtener todos los productos (SELECT)
productsController.getProducts = async (req, res) => {
    // Busca todos los productos en el modelo
    const products = await productsModel.find()
    // Envía los productos como respuesta en formato JSON
    res.json(products)
};

// Método para crear un nuevo producto (INSERT)
productsController.createProducts = async (req, res) => {
    const { name, description, price, stock } = req.body;
    const newProduct = new productsModel({ name, description, price, stock })
    await newProduct.save()
    res.json({ message: "product saved" })
};

// Método para eliminar un producto (DELETE)
productsController.deleteProducts = async (req, res) => {
    // Elimina el producto con el ID proporcionado en la solicitud
    await productsModel.findOneAndDelete(req.params.id)
    res.json({ message: "product deleted" })
};

// Método para actualizar un producto (UPDATE)
productsController.updateProducts = async (req, res) => {
    const { name, description, price, stock } = req.body;
    // Actualiza el producto con el ID proporcionado en la solicitud
    await productsModel.findByIdAndUpdate(req.params.id, { name, description, price, stock }, { new: true });
    res.json({message: "product updated"});
};

// Exporta el objeto del controlador de productos
export default productsController;
