export interface Productinterface {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[],
    createdAt:string,
    quantity:number,
    quantitiyerror:ErrorEnum
}


export enum ErrorEnum {
  ErrorOver = 1,
  ErrorLess=-1,
  NoError = 0
}
