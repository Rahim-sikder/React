import { useEffect, useState } from 'react'
import './Friends.css'
export default function Friends(){
    const [friends,setFriends] =useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return(
       <div className='box'>
       <h3>Friends:{friends.length}</h3>
       {
        Friends.map(friend => <Friend></Friend>)
       }
       </div>
    )
}