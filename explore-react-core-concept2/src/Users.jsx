import { useEffect, useState } from "react"

export default function Users(){
      const [users, setUsers] = useState([])
      useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then( data=> setUsers(data))
      },[])
 
      
     return(
          <div >
          <h3>Users:{users.length}</h3>
          <div className="">
               {
                    users.map((user, index)=><div key={index}>
                         <p>name: {user.name}</p>
                    </div>)
               }
          </div>
          </div>
     )
}