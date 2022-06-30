import React from "react";
import Style from './Style.css'
import { useState } from "react";
import axios from "axios";



const Adduser = (props) => {

    const token = 'b0c73eb1b60fda3449f2450d0f4e665b32299781c4bb05dbdf4109d554bbfd4d';
   

    const [usuarios, setUsuarios] = useState([])
   
    

    const obtenerDatos = async () => {
        const data = await fetch(`https://gorest.co.in/public/v2/users`)
        const users = await data.json()
        setUsuarios(users)
        
    }
       
    const [datos, setDatos] = useState({
        name: '',
        email: '',
        status: '',
        gender:''
    })
    console.log(datos)

    const handleInputChange = (event) => {

        
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = async (e) => {
        e.preventDefault()

        const urlData = 'https://gorest.co.in/public/v2/users'
       
        try {
            const resultado = await axios.post(urlData, datos, {
                headers: {
                  'Authorization': `Bearer ${token}` 
                         }})
            
            console.log(resultado)
            alert('Guardado')
            window.location.replace('TableUsuarios')
        } catch (error) {
            console.log(error);
        }
    }

    

    return(
        <form onSubmit={enviarDatos}>
        <div className="GuardarUser">
                    <h2>Nuevo usuario</h2>

                   
                    <input onChange={handleInputChange}  name="name" type="text" placeholder='Name' className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  
                    <select
                        name="status"
                        className="form-control text-success  bg-dark mt-2"
                        autoComplete="off"
                        placeholder="status"
                      
                        onChange={handleInputChange}
                    >
                        <option value="elegir">Status</option>
                         <option value="active">active</option>
                         <option value="desactive">desactive</option>
                    </select>
                   
                    <input onChange={handleInputChange} name="email" type="email" placeholder='Email' className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   
                    <select
                    
                    name="gender"
                    className="form-control text-success  bg-dark mt-2"
                    autoComplete="off"
                    placeholder="Genero"
                    
                    onChange={handleInputChange}
                >
                    <option value="elegir">Sexo</option>
                     <option value="male">male</option>
                     <option value="femenine">female</option>
                </select>

                    <button type="submit" className="btn btn-success mt-2">Guardar</button>
            </div>
            </form>
    )
}

export default Adduser