import React from 'react'
import axios from 'axios'
import classes from './ProductDetailsPage.module.css'

const ProductDetailsPage =(props)=>{
    const [details,setDetails]=React.useState({
        id:null,
        medicineName:null,
        medicineBrand:null,
        expiryDate:null,
        unitPrice:null,
        prescriptionRequired:null,
        stock:null
    })

    React.useEffect(()=>{
        axios.get(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products/${props.match.params.id}`)
        .then(resp =>{
            setDetails({...resp.data})
            console.log(resp.data)
        })
        .catch(err => console.log("Product details call failed"))
    },[])
    
    return(
            <main>
                <h1>Product Details</h1>
                <div className={classes.ProductDetails}>
                    <p><span>Product Id :</span><span>{details.id}</span></p>
                    <p><span>Medicine :</span><span>{details.medicineName}</span></p>
                    <p><span>Brand :</span><span>{details.medicineBrand}</span></p>
                    <p><span>Expiry :</span><span>{details.expiryDate}</span></p>
                    <p><span>Price :</span><span>$ {details.unitPrice}</span></p>
                    <p><span>Prescription Required :</span><span>{details.prescriptionRequired?"Yes":"No"}</span></p>
                    <p><span>Stock :</span><span>{details.stock}</span></p>
                </div>
            </main>
    )
}
export default ProductDetailsPage