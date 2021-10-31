import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './styling.css'
import {useParams} from 'react-router-dom'

const Details = ({ users }) => {
    const { id: id } = useParams();
    console.log('users', users)
    const [name,setName] = useState('')
    const [surname,setSurName] = useState('')
    const [age,setAge] = useState('')
    const [location,setLocation] = useState('')
    
    const updateUser = (e)=>{
        e.preventDefault()
        let uid = e.target.id
        users.push({
            id:uid,
            name:name,
            surname:surname,
            age:age,
            location:location,
        })
        console.log('user updated')
    }

    return (
        <div className={'AboutContainer'}>
            <h2>About User</h2>
          
            {
                users.map(data =>
                    <div key={data.id} >
                        <br />
                        {/* <h1>About The User</h1> */}
                        <div className={'formContainer'}  >                       
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputPassword" defaultValue={data.name}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Surname</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputPassword" defaultValue={data.surname}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Age</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputPassword" defaultValue={data.age}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Location</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputPassword" defaultValue={data.location}/>
                            </div>
                        </div>
                        <button type={'submit'} onClick={updateUser} name={'submit'}>Update User</button>
                        </div> 

                        {/* <br /> <h3>  Name: {" "}   </h3>
                  <br /> <h3> Surname:{" "}{data.surname}, </h3>
              <br /> <h3> Age:{" "}{data.age},</h3> 
               <br /> <h3> Location:{ " "}{data.location}  </h3>  */}
                    </div>
                )
            }
        </div>
    )
}
export default Details