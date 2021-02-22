import React from 'react'
import classes from './OrderRow.module.css'

const OrderRow =(props)=>{

    const handleClick =()=>{
        props.history.push(`/orderdetails/${props.details.id}`)
    }

    return(
            <tr onClick={handleClick} className={classes.OrderRow}>
                <td className={classes.Grey}>{props.details.id}</td>
                <td>{props.details.customerName}</td>
                <td>{props.details.orderDate}<br/> <span>{props.details.orderTime}</span></td> 
                <td className={classes.Grey}>$ {props.details.amount}</td>
                <td>{props.details.orderStatus}</td> 
            </tr>
    )
}
export default OrderRow