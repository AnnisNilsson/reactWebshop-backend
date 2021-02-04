import React from 'react';

interface IcartTotal{
    total:number;
}

export default function ShoppingCart(props:IcartTotal) {
    return(
        <div className="headerBasket">
        <span className="headerOptionLineTwo BasketCounter">{props.total}</span>
        {/* <i className="fas fa-shopping-cart"></i> */}
    </div>
    )
}