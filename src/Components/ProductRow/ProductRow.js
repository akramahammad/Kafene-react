import React from 'react'
import classes from './ProductRow.module.css'

const ProductRow =(props)=>{

    const handleClick =()=>{
        props.history.push(`/productdetails/${props.details.id}`)
    }

    return(
            <tr onClick={handleClick} className={classes.ProductRow}>
                <td className={classes.Grey}>{props.details.id}</td>
                <td>{props.details.medicineName}</td>
                <td className={classes.Grey}>{props.details.medicineBrand}</td> 
                <td>{props.details.expiryDate}</td>
                <td className={classes.Grey}>$ {props.details.unitPrice}</td>
                <td className={classes.Grey}>{props.details.stock}</td> 
            </tr>
    )
}
export default ProductRow