import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Order } from '../models/orden-models';
import { OrderResponse } from '../models/order-response-models';

@Injectable()
export class OrderServices
{    
    constructor (private _httpClient: HttpClient)
    {       
        console.log("OrderServices listo!!")
    }

    _postOrder(order: Order)
    {
        return this._httpClient.post<OrderResponse>("https://localhost:44376/api/Order",order);
    }

    _getOrdersByEmail(email:string)
    {
        this._httpClient.get('https://localhost:44376/api/Order/list/varnamartha@gmail.com').subscribe(data => {console.log(data)});
    }

    _getOrderDetails(orderId:number)
    {
        this._httpClient.get('https://localhost:44376/api/Order/1').subscribe(data => {console.log(data)});
    }
}