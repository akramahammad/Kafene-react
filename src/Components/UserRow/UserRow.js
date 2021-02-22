import React from 'react'
import classes from './UserRow.module.css'

const UserRow =(props)=>{
    return(
            <tr>
                <td>{props.details.id}</td>
                <td><img src={props.details.profilePic} /></td>
                <td>{props.details.fullName}</td> 
                <td>{props.details.dob}</td>
                <td>{props.details.gender}</td>
                <td>{`${props.details.currentCity}, ${props.details.currentCountry}`}</td> 
            </tr>
    )
}
export default UserRow