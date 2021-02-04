import { Console } from 'console'
import React from 'react'

interface IProps{
    productId:number,
    amount:number,
    updateCart(val:any):void;
}

export default function CheckoutProduct(props:IProps){
    function handleClick(){
        props.updateCart(props.productId)
    }
   // console.log(props.productId);

    return(
        <div className="totalProduct">
            <span>ProduktId: {props.productId}, Pris: <b>{props.amount}kr </b></span>
            <button className="deleteBtn" type="button" onClick={handleClick}>X</button>
        </div>
    )
    }