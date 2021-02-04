import React from 'react';
import './AdminPage.css';
import {IAdmin} from '../../models/IAdmin'

interface IAdminPageProps{
    order:IAdmin[];
}

export default function AdminPageProduct(props:IAdminPageProps){
    let ordersHTML = props.order.map((order: IAdmin) =>{
        return(
            <div className="boxOrders" key={order.id}>
                <p><b> Skapad av kund Id:</b> {order.customerId}</p>
                <br/>
                <p> <b>Beställda Ordrar: </b> {JSON.stringify(order.orderRows)}</p>
                <br/>
                <p> <b>Totalt: </b> {order.totalPrice}kr</p>
            </div> )
    })
    return(
    <div>{ordersHTML}</div>
    )
}