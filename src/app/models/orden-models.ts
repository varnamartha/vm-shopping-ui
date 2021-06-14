import { Product } from './product-models';
import { Client } from './client-models';

export class Order
{
    Product: Product;
    Client:Client;

    constructor(Product: Product, Client:Client)
    {
        this.Product = Product;   
        this.Client = Client
    }
}