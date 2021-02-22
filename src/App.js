import React from 'react'
import './App.css';
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'
import Header from './Components/Header/Header';
import LoginPage from './Containers/LoginPage/LoginPage';
import OrderListingPage from './Containers/OrderListingPage/OrderListingPage';
import ProductListingPage from './Containers/ProductListingPage/ProductListingPage';
import UserListingPage from './Containers/UserListingPage/UserListingPage';
import OrderDetailsPage from './Containers/OrderDetailsPage/OrderDetailsPage';
import ProductDetailsPage from './Containers/ProductDetailsPage/ProductDetailsPage';

function App() {
  const [loggedIn,setLogin]=React.useState(localStorage.getItem("loggedInStatus")!==undefined?localStorage.getItem("loggedInStatus")=="true":false)
  const handleLoggedInStatus=()=>{
    setLogin(true)
    localStorage.setItem("loggedInStatus",true)
  }
  const handleLogout =()=>{
    setLogin(false)
    localStorage.setItem("loggedInStatus",false)
  }

  return (
    <div>
      <BrowserRouter>
      <Route render={(props)=> <Header handleLogout={handleLogout} loggedIn={loggedIn} {...props}/>}/>
      <Switch>
        <Route exact path="/orders" render={(props)=> loggedIn?<OrderListingPage {...props}/>:<Redirect to="/"/>}/>
        <Route exact path="/" render={()=> loggedIn?<Redirect to="/orders"/>:<LoginPage handleLoggedInStatus={handleLoggedInStatus}/>} />
        <Route exact path="/products" render={(props)=> loggedIn?<ProductListingPage {...props}/>:<Redirect to="/"/>}/>
        <Route exact path="/users" render={(props)=> loggedIn?<UserListingPage {...props}/>:<Redirect to="/"/>}/>
        <Route exact path="/orderdetails/:id" render={(props)=> loggedIn?<OrderDetailsPage {...props}/>:<Redirect to="/"/>}/>
        <Route exact path="/productdetails/:id" render={(props)=> loggedIn?<ProductDetailsPage {...props}/>:<Redirect to="/"/>}/>
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
