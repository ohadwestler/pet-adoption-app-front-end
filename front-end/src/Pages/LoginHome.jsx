import React, { Component } from 'react';
import Navbar from '../Components/NavBar';
import Settings from './Settings'
export default function HomeLogin({dataOfUser, setDataOfUser}){
    
    return(
        <>
        <div>
            <h1>{`Welcome to pets adoption ${dataOfUser.firstname} ${dataOfUser.lastName}`}</h1> <br></br>
            <h3> Start adipting now! </h3>
        </div>
        </>
    )
}