import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Order, OrderResponse } from '../models/orden-models';

@Injectable()
export class OrderServices
{    
    orders : Array<Order> = [];
    urlOrerservicesBase = "https://localhost:44376/api/Order";

    constructor (private _httpClient: HttpClient)
    {       
        console.log("OrderServices listo!!")
    }

    _postOrder(order: Order)
    {
        return this._httpClient.post<OrderResponse>(this.urlOrerservicesBase,order);
    }

    _getOrdersByEmail(email:string)
    {
        let url = this.urlOrerservicesBase + '/list?email=' + email;
        return this._httpClient.get<OrderResponse[]>(url);
    }

    _getOrderDetails(orderId:number)
    {
        let url = this.urlOrerservicesBase + '/' + orderId;
        return this._httpClient.get<OrderResponse>(url);
    }
}