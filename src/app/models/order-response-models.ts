import { Status } from "./status-models";

export class OrderResponse
{
    urlRedirection: string;
    shoppingOrderId: number;
    status: Status;
    constructor( urlRedirection: string, shoppingOrderId: number, status: Status)
    {
        this.urlRedirection= urlRedirection;
        this.shoppingOrderId= shoppingOrderId;
        this.status= status;
    }
}


