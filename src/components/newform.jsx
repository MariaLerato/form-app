import React, {useState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const NewForm = () =>{
    const [data,setData] = useState([]) 
    const [name,setName] = useState('')
    const [ surname,setSurname] = useState(' ')
    const [identity,setIdentity] = useState('')

    const DataArray = (name,surname,identity) =>{
        setData([...data,{
            name:name,
            surname:surname,
            identity:identity
        }])
    }
    const SubmitForm =(e) =>{
        e.preventDefault()
        DataArray(name,surname,identity)
    }
    const ValidateForm = Yup.object({
        name:Yup.string().required('Required'),
        surname:Yup.string().required('Surname please'),
        identity:Yup.string().max(13,'Only 13 characters').required('Id please')
    })

       return(
        <div className="container">
            <Formik
            initialValues={{
                name:'',
                surname:'',
                identity:'',
            }}
            validationSchema ={ValidateForm}
            onSubmit={SubmitForm}
            >
                {({errors, touched}) =>(
                     <Form onSubmit={SubmitForm}>
                     <label>Name</label>
                     <input type="text" onChange={((e)=>setName(e.target.value))} placeholder="enter name" {...errors.name && touched.name ?(
                      <div>{errors.name}</div>   
                     ):null}/>
                   
                     <label>Surname</label>
                     <input type="text" onChange={((e)=>setSurname(e.target.value))} placeholder="enter name" />
                     {errors.surname && touched.surname ?(
                      <div>{errors.surname}</div>   
                     ):null}
                     <label>Identity</label>
                     <input type="text" onChange={((e)=>setIdentity(e.target.value))} placeholder="enter name" />
                     {errors.identity && touched.identity ?(
                      <div>{errors.identity}</div>   
                     ):null}
                     <button type="submit" className="btn btn-primary">Submit</button>
                 </Form>
                )}
               
            </Formik>

            <div className="output">
                {data.map((action)=><li>{action.name}{' '}{action.surname}</li>)}
            </div>
        </div>
    )
}
export default NewForm