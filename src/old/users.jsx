import React from 'react'
import './stylesheet.css'
import k from './student.jpg'
const Users = () =>{
  const Add = [{
      name:'Maria',
      surname:'Fenyane',
      age:'22'
    },
    {
        name:'Thabiso',
        surname:'Fenyane',
        age:'23'
    },
    {
        name:'Katlego',
        surname:'Fenyane',
        age:'24'
    },{
        name:'Nhlanhla',
        surname:'Khumalo',
        age:'35'
    }
    ]

    return(
        <div className="users-container">
            <div class="section group">
	            <div class="col span_1_of_2">
	
	        </div>
	        <div class="col span_1_of_2">
	
	        </div>
</div>
            <div className="users">
                <h1>User List</h1>
           <ul>
               {Add.map((element)=><li>{element.name}{' '}{element.surname}{' '}{element.age}</li>)}
            </ul> 
            </div>
            <div className="right-side">
                <img src={k} alt="user" />
            </div>
        </div>
    )
}
export default Users