import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './mastercomponent.css';
import Home from '../Home/Home';
import ProductPage from '../ProductPage/ProductPage';
import {ICart} from '../../models/ICart'

import ShoppingCart from '../ShoppingCart/ShoppingCart';
import CheckoutPage from '../checkOutPage/CheckOutPage';
import AdminPage from '../AdminPage/AdminPage';

function MasterComponent() {
  const myShoppingCart: Array<{
    productId:number;
    amount:number;
}>=[]; 
  const [cartTotal, setcartTotal] = useState(0);
  const [cart, setCart] = useState(myShoppingCart);
    
    const increment = (props:ICart) =>{
      myShoppingCart.push(...cart);
      let productId ={
        productId:props.productId,
        amount:props.amount
      };
      myShoppingCart.push(productId);
      setCart(myShoppingCart);
      setcartTotal(cartTotal + 1)
    }
    
  return (
    <Router>
      <nav className="header">
        <Link to="/">
            <img className="headerLogo" src="https://www.flaticon.com/svg/vstatic/svg/2770/2770821.svg?token=exp=1611744382~hmac=9951d549f82b5554d050ef911df44323" alt="logoRockStar"></img>
        </Link>
        <div className="headerSearch">
        </div>
        <div className="headerNav">
            <Link to="/Admin" className="headerLink">
                <div className="headerOption">
                  <span className="headerOptionLineOne">ADMIN</span>
                  <span className="headerOptionLineTwo">LOGIN</span>
                </div>
            </Link>
            <Link to="/checkout">
              <div className="shoppingcartNavIcon">
              <img src="https://www.flaticon.com/svg/vstatic/svg/891/891462.svg?token=exp=1611744432~hmac=05b1fce2463055c1f5df0181ee6ddd1d"></img>
              <ShoppingCart  total={cartTotal}/>
              </div>
            </Link>
        </div>
      </nav>
      <div className="app">
      <Switch>
          <Route path="/checkout">
            <CheckoutPage myShoppingCart={cart}></CheckoutPage>
          </Route>
          <Route path="/Admin">
            <AdminPage></AdminPage>
          </Route>
          <Route path="/products/:id">
                <ProductPage updateCount={increment}></ProductPage>
            </Route>
          <Route path="/" exact={true}>
            <Home></Home>
          </Route> 
      </Switch>
      </div>
    </Router>
  );
}

export default MasterComponent;
