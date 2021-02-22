import React from 'react'
import classes from './OrderRow.module.css'

const OrderRow =(props)=>{
    return(
            <tr>
                <td>{props.details.id}</td>
                <td>{props.details.customerName}</td>
                <td>{`${props.details.orderDate} ${props.details.orderTime}`}</td> 
                <td>{props.details.amount}</td>
                <td>{props.details.orderStatus}</td> 
            </tr>
    )
}
export default OrderRow