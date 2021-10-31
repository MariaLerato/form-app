import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup'
import './check.css'

const Formed = ({ AddUser, users }) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState(' ')
    const [location, setLocation] = useState('')

    const Validate = Yup.object({
        name: Yup.string().required(" *Missing*"),
        surname: Yup.string().required("*Missing*"),
        age: Yup.string().max(3, "Only 2 characters").required("*Missing*"),
        location: Yup.string().required("*Missing*")
    })
    
    return (
        <>
            <div className={'HOLDER'}>
                <div className={'left'}>

                </div>
                <div className={'right'}>
                    <h1>Registration Form</h1>
                    <Formik
                        initialValues={{
                            name: '',
                            surname: '',
                            age: '',
                            location: ''
                        }}
                        validateOnMount={true}
                        validationSchema={Validate}
                        onSubmit={(values) => AddUser(values.name, values.surname, values.age, values.location)}

                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                            isValid

                        }) => (
                            <div className="form-group-row">

                                <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" >Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-sm" onChange={handleChange("name")} value={values.name} id="colFormLabelSm" onBlur={handleBlur("name")} placeholder="Enter Name" />
                                    {errors.name && touched.name && (
                                        <p className={'error'}>{errors.name}</p>
                                    )}
                                </div>
                                <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" >Surname</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-sm" value={values.surname} onBlur={handleBlur("surname")} onChange={handleChange("surname")} id="colFormLabelSm" placeholder="Enter Surname" />
                                    {errors.surname && touched.surname && (
                                        <p className={'error'}>{errors.surname}</p>
                                    )}
                                </div>
                                <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" >Age</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control form-control-sm" value={values.age} onBlur={handleBlur("age")} onChange={handleChange("age")} id="colFormLabelSm" placeholder="Enter Age" />
                                    {errors.age && touched.age && (
                                        <p className={'error'}>{errors.age}</p>
                                    )}
                                </div>
                                <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" >Location</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-sm" value={values.location} onBlur={handleBlur("location")} onChange={handleChange("location")} id="colFormLabelSm" placeholder="Enter Location" />
                                    {errors.location && touched.location && (
                                        <p className={'error'}>{errors.location}</p>
                                    )}
                                </div>
                            <Link to={'/map'} ><button type="submit" className="button" onClick={handleSubmit}>Add User</button></Link>
                            <Link to={'/map'}><p >View Users</p></Link>
                            </div>

                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}
export default Formed