import { format } from 'date-fns'
import React, { Fragment } from 'react'
import { Span } from 'app/components/Typography'
import { Box, styled, useTheme } from '@mui/system'
import {
    Grid,
    Card,
    Icon,
    IconButton,
    Checkbox,
    Fab,
    Avatar,
    Hidden,
} from '@mui/material'

const ProjectName = styled(Span)(({ theme }) => ({
    marginLeft: 24,
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
        marginLeft: 4,
    },
}))

const StarOutline = styled(Fab)(() => ({
    marginLeft: 0,
    boxShadow: 'none',
    background: '#08ad6c !important',
    backgroundColor: 'rgba(9, 182, 109, 1) !important',
}))

const DateRange = styled(Fab)(({ theme }) => ({
    marginLeft: 0,
    boxShadow: 'none',
    color: 'white !important',
    background: `${theme.palette.error.main} !important`,
}))

const StyledAvatar = styled(Avatar)(() => ({
    width: '32px !important',
    height: '32px !important',
}))


const RowCards = () => {
    const { palette } = useTheme()
    const textMuted = palette.text.secondary

    return [1, 2, 3, 4].map((id) => (
        <Fragment key={id}>
            
            <Box py={1} />
        </Fragment>
    ))
}

export default RowCards
