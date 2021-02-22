import React from 'react'
import axios from 'axios'
import './UserListingPage.css'
import UserRow from '../../Components/UserRow/UserRow'

const UserListingPage =()=>{
    
    const [users,setUser]=React.useState([])
    const [activeUsers,setActive]=React.useState([])
    const [input,setInput]=React.useState("")

    React.useEffect(()=>{
        axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
        .then(resp =>{
            setUser([...resp.data])
            setActive([...resp.data])
        })
        .catch(err =>{
            console.log("User call failed")
        })
    },[])

    const handleSearch =(e)=>{
        console.log("keypress")
        if(e.which==13){
            if(input.length>=2){
                const updated=users.filter(user =>{
                    return user.fullName.toLowerCase().indexOf(input.toLowerCase())>-1
                })
                setActive([...updated])
            }
            else{
                alert("Please enter atleast 2 characters")
            }
        }
    }

    const handleReset =()=>{
        setActive([...users])
        setInput("")
    }

    return(
        <main>
        <h1>Users</h1>
        <div className="SearchDiv" >
        <input type="text" className="UserSearch" name="UserSearch" placeholder="Search by Name" value={input} onKeyUp={handleSearch} onInput={(e)=> setInput(e.target.value)} />
        <i className="fas fa-times" onClick={()=> setInput("")}></i>
        </div> 
        <button className="Resetbtn" onClick={handleReset}>Reset</button>
        <section className="UserTableSection">
                <table >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Avatar</th>
                            <th>Full Name</th>
                            <th>DoB</th>
                            <th>Gender</th>
                            <th>Current Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            activeUsers.map(user =>{
                                return <UserRow details={user}/>
                            })
                        }
                    </tbody>
                </table>
        </section>
    </main>
    )
}

export default UserListingPage