import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@mui/material'
import { Box, styled } from '@mui/system'
import { H1, Small } from 'app/components/Typography'
import {Fragment, useEffect, useState } from 'react'


const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
        padding: '16px !important',
    },
}))



const ContentBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': {
        color: theme.palette.text.secondary,
    },
    '& .icon': {
        opacity: 0.6,
        fontSize: '44px',
        color: theme.palette.primary.main,
    },
}))

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontWeight: '500',
    fontSize: '24px',
    color: theme.palette.primary.main,
}))

const StatCards = () => {

//    ------------------------------------ APIUsuarios----------------------------------------
    const [usuarios, setUsuarios] = useState([])
   

    const obtenerDatos = async () => {
        const data = await fetch(`https://gorest.co.in/public/v2/users`)
        const users = await data.json()
        setUsuarios(users)
        
    }

//    --------------------------------API Post---------------------------------------------------

    const [post, setPost] = useState([])
      

        const obtenerPost = async () => {
            const dataPost = await fetch(`https://gorest.co.in/public/v2/posts`)
            const post = await dataPost.json()
            setPost(post)
            
        }

    useEffect(() => {
        obtenerDatos()
        obtenerPost()
     
    },[])

    return (
       
   
         
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            <Grid item xs={12} md={6}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        
                        <Box ml="12px">
                        <Icon className="icon">group</Icon>
                        <h2 className='text-primary'>Usuarios </h2>
                          
                        {
                            usuarios.map(usu => (
                                
                                <div>
                                        
                                
                                <h3>ID {usu.id}</h3> <Small>{usu.name}</Small>
                                </div>
                    
                                 ))
                        }
                            
                        </Box>
                    </ContentBox>
                    <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </StyledCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        <Icon className="icon">article</Icon>
                        <Box ml="12px">
                           
                        <h2 className='text-primary'>Post </h2>

                            {
                            post.map(postT => (
                                
                                <div>
                                        
                                
                                <h3>ID {postT.user_id}</h3> <Small>{postT.body}</Small>
                                </div>
                    
                                 ))
                        }
                        </Box>
                    </ContentBox>
                    <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </StyledCard>
            </Grid>
            <Grid item xs={12} md={6}>
               
            </Grid>
           
        </Grid>


    )
}

export default StatCards
