import { Formik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styling.css'

const Form = ({ AddUser, users }) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState(' ')
    const [location, setLocation] = useState('')

    const Validate = values=>{
        const errors ={};
        if(!values.name){
            errors.name='Required'
        }else if(values.name.length < 3){
            errors.name = 'Name must have more than 3 characters'
        }
        if(!values.surname){
            errors.surname='Required'
        }else if(!values.age){
            errors.age='Required'
        }else if(!values.location){
            errors.location='Required'
        }
        return errors;
    }
    
    const Submit = (e) => {
        e.preventDefault()
        AddUser(name, surname, age, location)
    }
    return (
        <>
      
        <div className="container">
          
            <div className="body">
            <div className="Form">
    
                <form onSubmit={Submit, Validate} >
                    <h2>Register Form</h2>
                    <div class="form-group row">
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" >Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-sm"  onChange={((e) => setName(e.target.value))} id="colFormLabelSm" placeholder="Enter Name" />
                        </div>
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" >Surname</label>
                        <div class="col-sm-10">
                            <input type="text" className="form-control form-control-sm"  onChange={((e) => setSurname(e.target.value))} id="colFormLabelSm" placeholder="Enter Surname" />
                        </div>
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" >Age</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control form-control-sm"  onChange={((e) => setAge(e.target.value))} id="colFormLabelSm" placeholder="Enter Age" />
                        </div>
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" >Location</label>
                        <div class="col-sm-10">
                            <input type="text" className="form-control form-control-sm"  onChange={((e) => setLocation(e.target.value))} id="colFormLabelSm" placeholder="Enter Location" />
                        </div>
                        <button type="submit" className="btn btn-primary">Add User</button>
                    </div>
                    
                </form>

            </div>    
                 
                    
            <div className="output">
                <h2>Users</h2>
                    <ul>
                        <Link to="/formdetails">{users.map((action) => <li key={action.id + 1}>{action.name}{' '}{action.surname}</li>)}</Link>
                    </ul>
            </div>
        </div> 
        </div>
       </>     
    )
}
export default Form