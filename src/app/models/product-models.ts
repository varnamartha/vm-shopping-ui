export class Product
{
    ProductId: number;
    Name:string;
    Description:string;
    Price: number;
    Currency:string;
    ImgUrl:string;

    constructor(ProductId: number, Name:string, Description:string, Price: number, Currency:string, ImgUrl:string)
    {
        this.ProductId = ProductId;
        this.Name = Name;
        this.Description = Description;
        this.Price = Price;
        this.Currency = Currency;
        this.Name = Name;
        this.ImgUrl = ImgUrl;
    }
}