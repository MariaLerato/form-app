import React,{useState} from "react"
import { Link,useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './check.css'
import 'font-awesome/css/font-awesome.min.css'

const Map =({users}) =>{
    const {id:id} = useParams()

    const deleteUser=()=>{
            return users.filter(action=>{
                return action.id === id
            })
        console.log('user deleted')
    } 
    console.log('users',users)
    return(
        
        <div className={'ListContainer'}>
        {users.map(action=>
            <ol className="list-group " key={action.id}>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{action.name}{' '}{action.surname}</div>
                <Link to={'/formdetails/'+ id}>Click here To View User</Link>
              </div>
              <i className="fa fa-2x fa-trash" onClick={deleteUser}  style={{color:'red',marginTop:2}}></i>
            </li>
          </ol>
            )}
   
        </div>
    )
}
export default Map