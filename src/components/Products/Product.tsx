import React from 'react'
import './Product.css'
import { IProduct } from '../../models/IProduct';
import { Link } from 'react-router-dom';


interface IProductProps{
    product:IProduct[];
}
export default function Product(props:IProductProps){
    let productsHTML = props.product.map((product: IProduct) =>{
        return(
            <div className="productContainer" key={product.id}>
                <div className="product"> 
                    <div className="productBox"> 
                        <h2 className="productName">{product.title}</h2>
                        <p className="productPrice">{product.price} kr</p>
                    </div>
                    <img className="productImage" src={product.image} alt={`${product.title}`}/>
                    <Link to={'/products/'+product.id} className="productButton">Mer info</Link>
                </div>
            </div>)
    })

    return(
    <div>{productsHTML}</div>
)
}