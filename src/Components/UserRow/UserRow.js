import React from 'react'
import classes from './UserRow.module.css'

const UserRow =(props)=>{
    return(
            <tr>
                <td className={classes.Grey}>{props.details.id}</td>
                <td><img src={props.details.profilePic} /></td>
                <td className={classes.Grey}>{props.details.fullName}</td> 
                <td>{props.details.dob}</td>
                <td className={classes.Grey}>{props.details.gender}</td>
                <td className={classes.Grey}>{`${props.details.currentCity}, ${props.details.currentCountry}`}</td> 
            </tr>
    )
}
export default UserRow