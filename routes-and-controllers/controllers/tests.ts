import { Response, Request } from "express";
import * as querystring from "querystring";
import * as url from 'url'
import { searchProducts } from '../controllers/products-controllers'
import Product, { ProductInterface } from "../../models/products-model";











export class testControllers {

    constructor(){

    }

    queriesTest(req: Request, res: Response){
        const query: any = req.query
     
        // console.log(queryUrl.search);
        // const decodedQuery = querystring.decode(query);
        // const encodeQuery = querystring.encode(query);
        // const escapeQuery = querystring.escape(query);
        // const parsingQuery  = querystring.parse(query);
        // const stringifyQuery = querystring.stringify({foo: 'bar', salute: 'hello'});
        // console.log(`decoding query: ${decodedQuery}`)
        // console.log(`encoding query ${encodeQuery}`)
        // console.log(`escaping query ${escapeQuery}`)
        // console.log(`parsing query ${parsingQuery}`)
        // console.log(`transforming object to URL query string ${stringifyQuery}`)
        res.send('received');

    }

    
     searchProducts2 = (req: Request, res: Response) => {
    let itemsPerPage = 43
    let product = req.query.q
    let page: any = req.query.page
    let categoria = req.query.categoria
    console.log(searchProducts)

    Product.aggregate([
        {$match: { $or: [{title: new RegExp(`${product}, 'gi'`)}]}}
    ], (err, products) => {
        if(err){
            res.json({ message: 'error finding products'})
        }
        else {
            res.json({message: 'Products found', products: products})
        }
    })
}
} 