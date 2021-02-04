import React, {useEffect, useState}from 'react';
import axios from 'axios';
import AdminPageProduct from './AdminPageProduct';
import {IAdmin} from '../../models/IAdmin';
import './AdminPage.css';

 function AdminPage(){
     const defaultValue: IAdmin[] =[]
     const [orders, setOrders] = useState(defaultValue);

    useEffect(() => {
        axios.get(`https://localhost:5001/Order`)
        .then(res => {
            console.log(res)
            setOrders(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[]) 

    return(
    <div className="adminPage">
        <h1 className="headinAdmin">ADMIN- ORDRAR</h1>
        <AdminPageProduct order={orders}></AdminPageProduct>
    </div>
    )
}

export default AdminPage