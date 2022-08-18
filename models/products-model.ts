import { Schema, model, Document } from 'mongoose';

export interface ProductInterface extends Document {
    title: string,
    description: string,
    modelo: string,
    precio: number,
    cantidad: number,
    imagePath: string,
    ubicacion: string
    categorias: string[]
}


export const ProductSchema: Schema = new Schema({
    title: {type: String, index: true},
    description: String,
    modelo: {type: String, index: true},
    precio: Number,
    cantidad: Number,
    imagePath: String,
    ubicacion: {type: String, default: 'No ubicado'},
    categorias: Array
    
})


export default  model<ProductInterface>('Product', ProductSchema);

