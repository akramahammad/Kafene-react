import React from 'react'
import axios from 'axios'
import classes from './OrderListingPage.module.css'
import OrderRow from '../../Components/OrderRow/OrderRow'

const OrderListingPage =(props)=>{
    let [count,setCount]=React.useState(100)
    const [orders,setOrders]=React.useState([])
    const [activeOrders,setActive]=React.useState([])

    React.useEffect(()=>{
        console.log("rendering")
        axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
        .then(resp =>{
            setOrders([...resp.data])
            setActive([...resp.data])

        })
        .catch(err =>{
            console.log("Orders call failed")
        })
    },[])

    const handleChange =(e)=>{
        console.log(e.target.name)
        console.log(e.target.checked)
        if(e.target.checked){
            const updated=orders.filter(order =>{
                return order.orderStatus==e.target.name
            })
            setCount(count+=updated.length)
            setActive([...updated,...activeOrders])
        }
        else{
            const updated=activeOrders.filter(order =>{
                return order.orderStatus!=e.target.name
            })
            setCount(updated.length)
            setActive([...updated])
        }
    }

    return(
            <main>
                <h1>Orders</h1>
                <section className={classes.OrdersContainer}>
                <section className={classes.FilterSection}>
                    <h3>Filters</h3>
                    <p>Count: <span id="OrderCount">{count}</span></p>
                    <input type="checkbox" name="New"  id="NewCheckbox"  onChange={handleChange} defaultChecked={true}/><span>New</span><br/>
                    <input type="checkbox" name="Packed" id="PackedCheckbox" onChange={handleChange} defaultChecked={true}/><span>Packed</span><br/>
                    <input type="checkbox" name="InTransit" id="TransitCheckbox" onChange={handleChange} defaultChecked={true}/><span>InTransit</span><br/>
                    <input type="checkbox" name="Delivered" id="DeliveredCheckbox" onChange={handleChange} defaultChecked={true}/><span>Delivered</span><br/>
                </section>
                <section className={classes.OrderTableSection}>
                    <table >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                activeOrders.map(order =>{
                                    return <OrderRow key={order.id} details={order} {...props}/>
                                })

                            }
                        </tbody>
                    </table>
                </section>
            </section>
            </main>
    )
}
export default OrderListingPage