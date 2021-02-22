import React from 'react'
import axios from 'axios'
import classes from './OrderDetailsPage.module.css'

const OrderDetailsPage =(props)=>{
    const [details,setDetails]=React.useState({
        id:null,
        customerName:null,
        orderDate:null,
        orderTime:null,
        amount:null,
        orderStatus:null
    })
    React.useEffect(()=>{
        axios.get(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders/${props.match.params.id}`)
        .then(resp =>{
            setDetails({...resp.data})
        })
        .catch(err => console.log("Order details call failed"))
    },[])
    
    return(
            <main>
                <h1>Order Details</h1>
                <div className={classes.OrderDetails}>
                    <p><span>Order Id :</span><span>{details.id}</span></p>
                    <p><span>Name :</span><span>{details.customerName}</span></p>
                    <p><span>Date :</span><span>{details.orderDate}</span></p>
                    <p><span>Time :</span><span>{details.orderTime}</span></p>
                    <p><span>Amount :</span><span>$ {details.amount}</span></p>
                    <p><span>Status :</span><span>{details.orderStatus}</span></p>
                </div>
            </main>
    )
}
export default OrderDetailsPage