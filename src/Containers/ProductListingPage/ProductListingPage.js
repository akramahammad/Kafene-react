import React from 'react'
import axios from 'axios'
import classes from './ProductListingPage.module.css'
import ProductRow from '../../Components/ProductRow/ProductRow'

class ProductListingPage extends React.Component{

    state={
        products:[],
        activeProducts:[],
        count:100,
        expired:true,
        low:true

    }
    componentDidMount=()=>{
        axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
        .then(resp =>{
            this.setState({products:[...resp.data],activeProducts:[...resp.data]})
        })
        .catch(err =>{
            console.log("products call failed")
        })
    }
    
    handleChange =(e)=>{
        console.log(e.target.name)
        console.log(e.target.checked)
        let low;
        let expired;
        if(e.target.name=="expired"){
            low=this.state.low
            expired=e.target.checked
        }
        else{
            low=e.target.checked
            expired=this.state.expired
        }

        if(!(low || expired)){
            const updated=this.state.products.filter(product => {
                return product.stock>=100 && new Date(product.expiryDate)>new Date()
            })
            this.setState({...this.state,count:updated.length,activeProducts:[...updated],[e.target.name]:e.target.checked})
        }
        else if(low && expired){
            this.setState({...this.state,count:100,activeProducts:[...this.state.products],[e.target.name]:e.target.checked})
        }
        else if(low || expired){
            if(low){
                const updated=this.state.products.filter(product => {
                    return new Date(product.expiryDate)>new Date()
                })
                this.setState({...this.state,count:updated.length,activeProducts:[...updated],[e.target.name]:e.target.checked})
            }
            else{
                const updated=this.state.products.filter(product => {
                    return product.stock>=100 
                })
                this.setState({...this.state,count:updated.length,activeProducts:[...updated],[e.target.name]:e.target.checked})
            }
        }

        
    }

    render(){
        return(
            <main>
            <h1>Products</h1>
            <section className={classes.UsersContainer}>
            <section className={classes.FilterSection}>
                <h3>Filters</h3>
                <p>Count: <span className={classes.ProductCount}>{this.state.count}</span></p>
                <input type="checkbox" name="expired"  className={classes.NewCheckbox} checked={this.state.expired} onChange={this.handleChange}/><span>Expired</span><br/>
                <input type="checkbox" name="low" className={classes.PackedCheckbox} checked={this.state.low} onChange={this.handleChange} /><span>LowStock</span><br/>
            </section>
            <section className={classes.UserTableSection}>
                <table >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Product Brand</th>
                            <th>Expiry Date</th>
                            <th>Unit Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.activeProducts.map(product =>{
                                return <ProductRow details={product} {...this.props}/>
                            })
                        }
                    </tbody>
                </table>
            </section>
            </section>
        </main>
        )
    }
}
export default ProductListingPage