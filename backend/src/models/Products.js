/*
 Campos:
    nombre
    descripción
    precio
    stock
*/

// Importo los módulos necesarios de Mongoose
import { Schema, model } from "mongoose";

// Defino el esquema del modelo de productos
const productsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    stock: {
        type: Number,
        min: 0
    }
}, {
    timestamps: true,
    strict: false
});

// Exporto el modelo de productos
export default model("Products", productsSchema);
