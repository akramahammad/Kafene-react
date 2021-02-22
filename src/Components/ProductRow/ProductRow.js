import React from 'react'
import classes from './ProductRow.module.css'

const ProductRow =(props)=>{
    return(
            <tr>
                <td>{props.details.id}</td>
                <td>{props.details.medicineName}</td>
                <td>{props.details.medicineBrand}</td> 
                <td>{props.details.expiryDate}</td>
                <td>{props.details.unitPrice}</td>
                <td>{props.details.stock}</td> 
            </tr>
    )
}
export default ProductRow