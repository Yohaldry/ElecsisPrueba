import React from "react";
import {Fragment, useEffect, useState} from 'react'

const Users = ()  => {

    const [usuarios, setUsuarios] = useState([])
    console.log(usuarios)
    
    

    const obtenerDatos = async () => {
        const data = await fetch(`https://gorest.co.in/public/v2/users`)
        const users = await data.json()
        setUsuarios(users)
        
    }
    useEffect(() => {
        obtenerDatos()
    },[])

    return(

        <Fragment>
                {
                    usuarios.map(usu => (
                        <h2>{usu.name}</h2>
                    ))
                }
        </Fragment>
    )
}

export default Users