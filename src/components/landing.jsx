import React,{Fragment, useState} from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Form from './form'
import Details from './formdetails'
import Formed from './formed'
import Map from './map'


const Landing = () =>{
    const [users, setUsers]= useState([])
    // const [contact,setContact] = useState(Map)
    const AddUser =(name,surname,age,location) => {
        setUsers([...users,{
            id:users.length,
            name:name,
            surname:surname,
            age:age,
            location:location
        }])
    }
    console.log('user created',users)
    return(
        <>
        <Router>
           
            <Switch>
             
                <Route path={'/formdetails'}>
                    <Details users={users} />
                   
                </Route>
                <Route path={'/map'}>
                    <Map users={users} />
                </Route>
              
                <Route path={'/'}>
                    <Formed  users={users} AddUser={AddUser}/>
                </Route>
            </Switch>
       
        </Router>
       
        </>
    )
}
export default Landing