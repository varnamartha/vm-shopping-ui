import { Product } from './product-models';
import { Client } from './client-models';
import { Status } from './status-models';

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

export class OrderResponse
{
    product: Product;
    shoppingOrderId : number;
    status : Status;
    urlRedirection: string;

    constructor(product: Product, shoppingOrderId : number, status : Status, urlRedirection: string)
    {
        this.product = product;   
        this.shoppingOrderId = shoppingOrderId;
        this.status = status;   
        this.urlRedirection = urlRedirection;
    }
}