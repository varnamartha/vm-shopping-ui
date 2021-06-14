import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Order, OrderResponse } from '../models/orden-models';

@Injectable()
export class OrderServices
{    
    orders : Array<Order> = [];

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
        let url = 'https://localhost:44376/api/order/list?email=' + email;
        return this._httpClient.get<OrderResponse[]>(url);
    }

    _getOrderDetails(orderId:number)
    {
        this._httpClient.get('https://localhost:44376/api/Order/1').subscribe(data => {console.log(data)});
    }
}