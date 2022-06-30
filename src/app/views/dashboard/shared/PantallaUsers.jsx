
import React from "react";
import TopSellingTable from './TopSellingTable'
import {useEffect, useState} from 'react'
import Adduser from "./Adduser";
import EditUser from "./EditUser";
import './Style.css'

const PantallaUsers = () => {

    const [datos, setDatos] = useState([])

    const [currentUser, setCurrentUser] = useState({
        id: null,
        name:'',
        email:'',
        status:'',
        gender:''
        
    })

    const [editing, setEditing] = useState(false)

    const editRow = (datos) => {
        setEditing(true);
        setCurrentUser({
            id: datos.id,
            name: datos.name,
            email: datos.email,
            status: datos.status,
            gender: datos.gender
        })
       
    }
    

    return(

        <div className="SeccionCompleta">
            <div className="SeccionTable">
                
                
                <TopSellingTable datos={datos} editRow={editRow}/>

                
            </div>

            {
                            editing ?(
                                <div>
                                    <EditUser currentUser={currentUser}/>
                                </div>
                            ):(
                                <div>
                                     <Adduser />
                                </div>
                            )

                }
           

        </div>
            
    )
}

export default PantallaUsers