import React from 'react'
import classes from './LoginPage.module.css'

const LoginPage =({handleLoggedInStatus})=>{
    const [userName,setUserName]=React.useState("")
    const [password,setPassword]=React.useState("")

    const handleLogin =(e)=>{
        e.preventDefault()
        if(userName===password) {
            handleLoggedInStatus()
            alert("Login Successful")
        }
        else alert("Please enter valid credentials")
    }

    return(
        <main>
            <form className={classes.Loginform} onSubmit={handleLogin}>
                <h1>Sign In</h1>
                <input type="text" name="Username" className={classes.Username} required placeholder="Enter Username  (Username and password must be same)" onInput={(e)=>{setUserName(e.target.value)}}/>
                <input type="password" name="Password" className ={classes.Password} required placeholder="Enter Password" onInput={(e)=>{setPassword(e.target.value)}}/>
                <input type="submit" className={classes.Submitbtn} value="Login" />
            </form>
        </main>
    )
}
export default LoginPage