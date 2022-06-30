import React from 'react'
import { useEffect, useState } from 'react'
import { Paragraph } from 'app/components/Typography'
import { Box, styled, useTheme } from '@mui/system'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    MenuItem,
    Select,
} from '@mui/material'
import axios from 'axios'

import Style from '../shared/Style.css'
import {Link} from 'react-router-dom'
import Adduser from './Adduser'
import EditUser from './EditUser'

const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
    fontSize: '2rem',
    fontWeight: '700',
    color: 'green',
    textTransform: 'capitalize',
}))

const ProductTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: 'pre',
    '& small': {
        height: 15,
        width: 50,
        borderRadius: 500,
        boxShadow:
            '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': {
        borderBottom: 'none',
    },
    '& td:first-of-type': {
        paddingLeft: '16px !important',
    },
}))

const Small = styled('small')(({ bgcolor }) => ({
    height: 15,
    width: 50,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}))

const TopSellingTable = ( {editRow} ) => {
    const { palette } = useTheme()
    const bgError = palette.error.main
    const bgPrimary = palette.primary.main
    const bgSecondary = palette.secondary.main


    const handleDelete = async (id) => {
    
        const token = 'b0c73eb1b60fda3449f2450d0f4e665b32299781c4bb05dbdf4109d554bbfd4d';
    
        const url = `https://gorest.co.in/public/v2/users/${id}`;
        await axios.delete(url, {
            headers: {
              'Authorization': `Bearer ${token}` 
                     }})
        .then (alert('Usuario Eliminado'));
     
       
        window.location.replace('TableUsuarios');
        
    }


    //    ------------------------------------ APIUsuarios----------------------------------------
    const [usuarios, setUsuarios] = useState([])
   console.log(usuarios)

    const obtenerDatos = async () => {
        const data = await fetch(`https://gorest.co.in/public/v2/users`)
        const users = await data.json()
        setUsuarios(users)
        
    }

//    --------------------------------API Post---------------------------------------------------

    useEffect(() => {
        obtenerDatos()
     
    },[])


    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
            
            <Link to="/dashboard" className='botonDis'>Disboard</Link>
                <Title>Usuarios Activos</Title>
                {/* <input className='inputDelete' type="email" placeholder='Email to delete'/>   
                <IconButton>        
                
                <Icon color="more">delete</Icon>
                </IconButton> */}
                
            </CardHeader>
            <Box overflow="auto">
                <ProductTable>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ px: 3 }} colSpan={4}>
                                Name
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                ID
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Email
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={1}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usuarios.map((product, index) => (
                            <TableRow key={index} hover>
                                <TableCell
                                    colSpan={4}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    <Box display="flex" alignItems="center">
                        
                                        <Paragraph sx={{ m: 0, ml: 4 }}>
                                            {product.name}
                                        </Paragraph>
                                    </Box>
                                </TableCell>
                                <TableCell
                                    align="left"
                                    colSpan={2}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    ID
                                    { product.id}
                                </TableCell>

                                <TableCell
                                    sx={{ px: 0 }}
                                    align="left"
                                    colSpan={2}
                                >
                                    {product.email }
                                </TableCell>
                                <TableCell sx={{ px: 0 }} colSpan={1}>
                                    <IconButton>
                                        <Icon onClick={() => {editRow(product)}} color="primary">edit</Icon>
                                        
                                    </IconButton>
                                    <IconButton>        
                
                                          <Icon onClick={() => {handleDelete(product.id)}}  color="more">delete</Icon>
                                    </IconButton>
                                    
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                   
                                  
                                    
                </ProductTable>
                
            </Box>
            <CardHeader>
            

            </CardHeader>
            
        </Card>

    )
}


export default TopSellingTable
