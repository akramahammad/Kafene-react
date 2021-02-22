import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from '../MenuItem/MenuItem'
import classes from './Header.module.css'

const Header =(props)=>{
    


    return(
        <header className={classes.Topbar}>
        <div>
        <div className={classes.Logo}>
            <img src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt="Kafene Logo"/>
            <a href="#">Kafene</a>
        </div>
        <nav>
            <MenuItem label="Orders" link="/orders" active={props.location.pathname=="/orders"?true:false}/>
            <MenuItem label="Products" link="/products" active={props.location.pathname=="/products"?true:false}/>
            <MenuItem label="Users" link="/users" active={props.location.pathname=="/users"?true:false}/>
        </nav>
    </div>
        {props.loggedIn?<Link to="/" id="Logoutbtn" onClick={props.handleLogout}>Logout</Link>:null}
    </header>

    )
}
export default Header