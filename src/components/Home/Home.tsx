import React, {useState, useEffect} from 'react'
import { IProduct } from '../../models/IProduct';
import Product from '../Products/Product';
import "./Home.css";
import axios from 'axios';

function Home(){
    const defaultValue: IProduct[] = [] 

    const [products, setProducts] = useState(defaultValue)

    useEffect(() => {
        axios.get('https://localhost:5001/Product')
        .then(res => {
            console.log(res)
            setProducts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return(
        <div className="home">
            <img className="homeImg" src="https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="tree"/>
            <div className="products">
                <Product product={products}></Product> 
            </div>
        </div> 
    )
}

export default Home
