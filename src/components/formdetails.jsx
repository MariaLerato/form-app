import React from 'react'

const Details =({props}) =>{
    console.log('users',props)
    return(
        <>
        <h1>Hello, {props.name} {props.surname}</h1>
        <p>Welcome to our programme thank you for registering and staying commited to us</p>
        </>
    )
}
export default Details