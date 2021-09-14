import React from 'react'

const Details =({users}) =>{
    console.log('users',users)
    return(
        <>
      {/* 0765637244 */}
      {
          users.map(data=> 
            <div key={data.id} style={{alignItems:'center',textAlign:'center'}}>
                <br />
                <h1>About The User</h1>
               <br /> <h3>  Name: {" "}  {data.name} </h3>
                  <br /> <h3> Surname:{" "}{data.surname}, </h3>
              <br /> <h3> Age:{" "}{data.age},</h3> 
               <br /> <h3> Location:{ " "}{data.location}  </h3> 
            </div>
            )
      }
        </>
    )
}
export default Details