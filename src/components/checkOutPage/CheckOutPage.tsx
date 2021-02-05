import React, {useState, useEffect, MouseEvent} from 'react';
import {IForm} from '../../models/IForm'
import Form from '../Form/Form'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Axios from 'axios';
import moment from 'moment';
import '../Form/Form.css';
import {IshoppingCart} from '../../models/IshoppingCart';

interface ICart {
    myShoppingCart: Array< IshoppingCart >
}

export default function CheckoutPage( props:ICart) {
    const defaultValue: IForm = { name:'', adress: '', city: ''};
    // const defaultValue: IForm = {firstname: '', lastname:'', address: '', zipcode: "", city: ''};
    const [userForm, setUserForm] = useState(defaultValue);
    const defaultValue2: Array<{ 
        productId:number,
        amount:number}> =[];
    const [shoppingCart, setShoppingCart] = useState(defaultValue2);
    const [total, setTotal] = useState(0);

    const myCart:Array<{
        productId:number,
        amount:number
        }> = [];

    useEffect(() => {
        myCart.push(...shoppingCart)
        myCart.push(...props.myShoppingCart);
        setShoppingCart(myCart)
        let total1 = 0;
        for (let i = 0; i< myCart.length; i++) {
            total1 += total + myCart[i].amount
        }
        setTotal(total1);
    },[]);
    
    function updateForm(formValue: IForm): void {
        setUserForm(formValue);
    }

function placeOrder(e: MouseEvent<HTMLButtonElement>){
    const createOrder = {
        customer: userForm,
        created: moment().format(),
        totalPrice: total,
        orderRows: shoppingCart
    }

    const url : string = 'https://localhost:5001/order'
   
    Axios.post(url, createOrder)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
}
    const cartProduct = shoppingCart.map((product: IshoppingCart) =>{
        function removeItem(e:MouseEvent<HTMLButtonElement>){
            const tempCart = [...shoppingCart];
            const item = {
                productId:product.productId,
                amount: product.amount,
            };
            let itemIndex = tempCart.findIndex(function (ind){
                return(ind.productId === item.productId);
            });
            if (itemIndex !== -1){
                tempCart.splice(itemIndex,1);
            }
            let total = 0;
            for (let i = 0; i < tempCart.length; i++){
                total += total + tempCart[i].amount;
            }
            setTotal(total);
            setShoppingCart(tempCart);
        }
        return(
        <CheckoutProduct
        productId={product.productId}
        amount={product.amount}
        updateCart={removeItem}
        />
        )
    });
    return(
        <div className="boxBuy">
            <h1>CHECKOUT</h1>
        <Form updateParent={updateForm}/>
        <div className="productsCheckout">
        <div className="cartProduct">{cartProduct}</div>
        <hr/>
        <div className="total"> Totalt {total} kr</div>
        </div>
        <button className="CheckoutBtn buyBtn" type="button" onClick={placeOrder}>
        Köp
      </button>
        </div>
    )
}