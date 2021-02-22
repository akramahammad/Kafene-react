import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MenuItem.module.css'

const MenuItem =({label,link,active})=>{

    return(
            <div className={active?`${classes.Active} ${classes.MenuItems}`:classes.MenuItems}>
                <Link to={link}>{label}</Link>
            </div >
    )
}
export default MenuItem