import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import axios from 'axios';
import {ICart} from '../../models/ICart'

interface IParams {
    id: string;
}

interface IClickProps {
    updateCount(value:ICart): void;
}

export default function ProductPage(props: IClickProps) {
    const [productInfo, setProductInfo] = useState(Object);
    let { id } = useParams<IParams>();
    
    useEffect(() => {
        axios.get(`https://localhost:5001/Product/${id}`)
        .then(res => {
            console.log(res)
            setProductInfo(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    
        function handleClick () {
            let product = {
                productId: productInfo.id,
                amount: productInfo.price   
            }

            localStorage.setItem(productInfo.name, JSON.stringify(productInfo));
            props.updateCount(product);
        }
        return(
            <div key={productInfo.id}>
                <div className="productPage"> 
                    <img className="productPageImage" src={productInfo.image} alt="produkter"/>
                     <div className="productPageBox"> 
                        <h2 className="productPageName">{productInfo.title}</h2>
                        <p className="productPageDescription">{productInfo.description}</p>
                        <strong className="productPagePrice">{productInfo.price} kr</strong>
                        <button className="purchase-btn" type="button" onClick={handleClick}><i className="fas fa-cart-arrow-down"></i> Lägg till i varukorgen </button>
                    </div>
                </div>
            </div>
        )}
            