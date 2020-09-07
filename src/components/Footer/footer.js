import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Menu, Grid, Typography } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
        'width': '100%', 
        'height': '6em', 
        'background-color': '#5C6973', 
        'margin-top': '-2em', 
        'padding-bottom': '0.5em'
    }, 
    logo: {
        'margin': '2em', 
        'width': '35px', 
        'height': '35px', 
    },
    title: {
        'margin-top': '1.5em', 
        color: '#FFFFFF'
    }
}))

const Footer = (props) => {
    const classes = useStyles() 

    return (
        <div className={classes.root}>
            <Grid container spacing={0} >
                <Grid item xs={1}> 
                    <img
                        src={require('../../assets/jisclogo.png')}
                        alt=""
                        className={classes.logo}
                    />
                </Grid>
                <Grid item xs={5}> 
                    <Typography variant='h1' className={classes.title}> Software Reviews </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer