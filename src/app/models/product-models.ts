export class Product
{
    productId: number;
    name:string;
    description:string;
    price: number;
    currency:string;
    imgUrl:string;

    constructor(productId: number, name:string, description:string, price: number, currency:string, imgUrl:string)
    {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.currency = currency;
        this.imgUrl = imgUrl;
    }
}