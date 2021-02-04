import {IorderRows} from './IorderRows'

export interface IAdmin {
    created: string;
    totalPrice:number;
    orderRows:IorderRows;
    productId:number;
    customerId:number;
    id:number;
}