import React from "react";
import {useEffect, useState} from 'react'
import axios from "axios";

const EditUser = ({currentUser}) => {

    const [curre, setCurre] = useState({

        
        name: '',
        email: '',
        status:'',
        gender: ''
        
    })
    console.log(curre)

    const handleChange = (e) => {

        setCurre({
            ...curre, 
            [e.target.name]: e.target.value
        })
        
    }

    const guardarCambios = (e) => {
        const token = 'b0c73eb1b60fda3449f2450d0f4e665b32299781c4bb05dbdf4109d554bbfd4d';
        const urledit = `https://gorest.co.in/public/v2/users/${curre.id}`
        axios.put(urledit,curre, {
            headers: {
              'Authorization': `Bearer ${token}` 
                     }})
        
        .then (alert('Actualizado'))
        window.location.replace('TableUsuarios')
    }

    useEffect(() => {
        setCurre(currentUser)
    }, [])

    return(

        <div className="mb-3 AddEditar">
        <h2 className="text-warning">Editar Usuario</h2>

        <input
         type="text"
          placeholder='Name'
           className="form-control mt-2"
            id="exampleInputEmail1"
             aria-describedby="emailHelp"
             value={curre.name}
             name="name"
             onChange={handleChange}/>

        <input type="text"
         placeholder='status'
          className="form-control mt-2"
           id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={curre.status}
            name="status"
            onChange={handleChange}/>

        <input type="email"
         placeholder='Email'
          className="form-control mt-2"
           id="exampleInputEmail1" 
           aria-describedby="emailHelp"
           value={curre.email}
           name="email"
            onChange={handleChange}/>

        <input type="text"
         placeholder='Genero'
          className="form-control mt-2" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp"
          value={curre.gender}
          name="gender"
            onChange={handleChange}
          />
        <button onClick={() => {guardarCambios(curre.id)}} type="button" className="btn btn-warning mt-2">Guardar</button>
</div>
    )
}

export default EditUser