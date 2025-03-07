//Array de metodos (CRUD)
const productsController = {};
import productsModel from "../models/Products.js"

//SELECT
productsController.getProducts = async (req, res) => { 

    const products = await productsModel.find()
    res.json(products)
}

//INSERT
