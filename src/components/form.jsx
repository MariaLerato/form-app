import { Formik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styling.css'
import * as Yup from 'yup'
const Form = ({ AddUser, users }) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState(' ')
    const [location, setLocation] = useState('')

    const Validate = Yup.object({
        name:Yup.string().required("Enter Your Name"),
        surname:Yup.string().required("Enter Your Surname"),
        age:Yup.string().max(3,"Only 2 characters").required("Enter your age"),
        location:Yup.string().required("Enter location")
    })
    
    const Adduser = (e) => {
        e.preventDefault()
        AddUser(name, surname, age, location)
    }
    const DeleteUser = (e) =>{
        e.preventDefault()
        AddUser(name,surname)
    }
    return (
        <>
      
        <div className="containe">
            <div className="bod">
            <div className="For">
                
            <Formik 
            initialValues={{
                name:'',
                surname:'',
                age:'',
                location:''
            }}
            validateOnMount={true}
            validationSchema={Validate}
            onSubmit={(values)=>AddUser(values.name,values.surname,values.age,values.location)}

            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isValid

                })=>(
                    <div className="form-group row">
                        <h1 style={{fontFamily:'cursive',fontWeight:'bold',fontSize:25}}>Registration Form</h1>
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" >Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-sm"  onChange={handleChange("name")} value={values.name} id="colFormLabelSm" onBlur={handleBlur("name")} placeholder="Enter Name" />
                            {errors.name && touched.name &&(
                                <h6 style={{color:'red',textAlign:'center'}}>{errors.name}</h6>
                            )}
                        </div>
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" >Surname</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-sm" value={values.surname} onBlur={handleBlur("surname")} onChange={handleChange("surname")} id="colFormLabelSm" placeholder="Enter Surname" />
                            {errors.surname && touched.surname &&(
                                <h6 style={{color:'red',textAlign:'center'}}>{errors.surname}</h6>
                            )}
                        </div>
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" >Age</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control form-control-sm" value={values.age} onBlur={handleBlur("age")} onChange={handleChange("age")} id="colFormLabelSm" placeholder="Enter Age" />
                            {errors.age && touched.age &&(
                                <h6 style={{color:'red',textAlign:'center'}}>{errors.age}</h6>
                            )}
                        </div>
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" >Location</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-sm" value={values.location} onBlur={handleBlur("location")} onChange={handleChange("location")} id="colFormLabelSm" placeholder="Enter Location" />
                            {errors.location && touched.location &&(
                                <h6 style={{color:'red',textAlign:'center'}}>{errors.name}</h6>
                            )}
                        </div>
                        <button type="submit" style={{backgroundColor:'red',color:'white',width:205,height: 50, marginTop:5}} className="btn btn-primary" onClick={handleSubmit}>Add User</button>
                    </div>
                )}
            </Formik>
            </div>    
            <div className="output">
                <h2>Users</h2>
                    <ul>
                        {
                        users.map((action) => <li key={action.id + 1}> <Link to="/formdetails">{action.name}{' '}{action.surname}</Link></li>
                        
                        
                        )
                      
                        }
                        <button type="reset" onClick={DeleteUser} >x </button>
                    </ul>
            </div>
        </div> 
        </div>
       </>     
    )
}
export default Form