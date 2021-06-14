import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Order, OrderResponse } from '../models/orden-models';
import { environment } from '../../environments/environment';

@Injectable()
export class OrderServices
{    
    orders : Array<Order> = [];
    orderUrlBase = `${environment.appUrl}/order`;

    constructor (private _httpClient: HttpClient)
    {       
    }

    _postOrder(order: Order)
    {
        return this._httpClient.post<OrderResponse>(this.orderUrlBase,order);
    }

    _getOrdersByEmail(email:string)
    {
        let url = `${this.orderUrlBase}/list?email=${email}`;
        return this._httpClient.get<OrderResponse[]>(url);
    }

    _getOrderDetails(orderId:number)
    {
        let url = `${this.orderUrlBase}/${orderId}`;
        return this._httpClient.get<OrderResponse>(url);
    }
}