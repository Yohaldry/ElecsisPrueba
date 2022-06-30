import React, { Fragment, useEffect, useState } from 'react'
import RowCards from './shared/RowCards'
import StatCards from './shared/StatCards'
import Campaigns from './shared/Campaigns'
import { Grid, Card, Icon } from '@mui/material'
import StatCards2 from './shared/StatCards2'
import DoughnutChart from './shared/Doughnut'
import UpgradeCard from './shared/UpgradeCard'
import { styled, useTheme } from '@mui/system'
import TopSellingTable from './shared/TopSellingTable'
import { MatxMenu } from 'app/components'
import './shared/Style.css'

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))
const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontWeight: '500',
    fontSize: '24px',
    color: theme.palette.primary.main,
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}))

const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
}))

const Analytics = () => {
    const { palette } = useTheme()


    const [comentarios, setComentarios] = useState([])
    console.log(comentarios)

    const obtenerComentarios = async () => {
        const dataComentarios = await fetch(`https://gorest.co.in/public/v2/comments`)
        const comentarios = await dataComentarios.json()
        setComentarios(comentarios)
        
    }


    useEffect(() => {
        
        obtenerComentarios()
    },[])

    return (
        <Fragment>
            <ContentBox className="analytics">
                
           
                <Grid container spacing={3}>
                   
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <StatCards />
                        <StatCards2 />
                        <H4>Ongoing Projects</H4>
                        <RowCards />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card sx={{ px: 3, py: 2, mb: 3 }}>

                        <Icon className="icon">contacts</Icon>
                        <h2 className='text-primary'>Comentarios</h2>
                        <Heading>Comentarios</Heading>
                           

                           {
                           comentarios.map(coment => (
                               
                               <div>
                                       
                               
                               <h3>{coment.name}</h3> <H4>{coment.body}</H4>
                               </div>
                   
                                ))
                       }


                           
                        </Card>
                       
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    )
}

export default Analytics
