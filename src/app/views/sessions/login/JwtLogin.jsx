import {
    Card,
    Grid,
    Button,
    Checkbox,
    CircularProgress,
    FormControlLabel,
} from '@mui/material'
import React, { useState } from 'react'
import useAuth from 'app/hooks/useAuth'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, styled, useTheme } from '@mui/system'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Paragraph, Span } from 'app/components/Typography'
import axios from 'axios'
import { useEffect } from 'react'
import Swal from 'sweetalert2'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
    justifyContent: 'center',
}))

const ContentBox = styled(Box)(() => ({
    height: '100%',
    padding: '32px',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.01)',
}))

const IMG = styled('img')(() => ({
    width: '100%',
}))

const JWTRoot = styled(JustifyBox)(() => ({
    background: '#1A2038',
    minHeight: '100% !important',
    '& .card': {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
}))

const StyledProgress = styled(CircularProgress)(() => ({
    position: 'absolute',
    top: '6px',
    left: '25px',
}))

const JwtLogin = () => {

    const [usuarios, setUsuarios] = useState([])
    
 
    const urlLogin = `https://gorest.co.in/public/v2/users`


    const [curre, setCurre] = useState({

     
        email: ''
        
    })
    

    const handleChange = (e) => {

        setCurre({
            ...curre, 
            [e.target.name]: e.target.value
        })
        
        console.log(curre)
    }

   

     const obtenerDatos = async () => {
         const data = await fetch(urlLogin)
         const users = await data.json()
         setUsuarios(users)
         
     }

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    console.log(userInfo)
    const [message, setMessage] = useState('')
    const { login } = useAuth()

 

    const { palette } = useTheme()
    const textError = palette.error.main
    const textPrimary = palette.primary.main



    const handleFormSubmit = async () => {
    
       
        usuarios.find(U => {
            
            if(curre.email === U.email){
                
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Welcome',
                    showConfirmButton: false,
                    timer: 2500
                  })

                    navigate('/tableUsuarios')
            }else{
               console.log('No existe')
            }
          
        } )
      
    }

    useEffect(() => {
        obtenerDatos()
     
    },[])


    return (
        <JWTRoot>
            <Card className="card">
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <JustifyBox p={4} height="100%">
                            <IMG
                                src="/assets/images/illustrations/dreamer.svg"
                                alt=""
                            />
                        </JustifyBox>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <ContentBox>
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    sx={{ mb: 3, width: '100%' }}
                                    variant="outlined"
                                    size="small"
                                    label="email"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    // value={userInfo.email}
                                   
                                />
                        
                                

                                {message && (
                                    <Paragraph sx={{ color: textError }}>
                                        {message}
                                    </Paragraph>
                                )}

                                <FlexBox mb={2} flexWrap="wrap">
                                    <Box position="relative">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={loading}
                                            type="submit"
                                        >
                                            Sign in
                                        </Button>
                                        {loading && (
                                            <StyledProgress
                                                size={24}
                                                className="buttonProgress"
                                            />
                                        )}
                                    </Box>
                                    <Span sx={{ mr: 1, ml: '20px' }}>or</Span>
                                    <Button
                                        sx={{ textTransform: 'capitalize' }}
                                        onClick={() =>
                                            navigate('/register')
                                        }
                                    >
                                        Sign up
                                    </Button>
                                </FlexBox>
                              
                            </ValidatorForm>
                        </ContentBox>
                    </Grid>
                </Grid>
            </Card>
        </JWTRoot>
    )
}

export default JwtLogin
