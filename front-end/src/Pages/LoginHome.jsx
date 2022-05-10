import React from 'react';


export default function HomeLogin({dataOfUser}){
    
    return(
        <>
        <div className='text-center'>
            <h1>{`Welcome to pets adoption ${dataOfUser.firstname} ${dataOfUser.lastName}`}</h1> <br></br>
            <h3> Start adopting now! </h3>
         
        </div>
        </>
    )
}