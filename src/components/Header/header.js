import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        'width': '100%', 
        'height': '3em', 
        'backgroundColor': '#E65E13',
    },
    button: {
        'color': '#FFFFFF',
        'margin-top': '1em'
    }
}))

const Header = (props) => {
    const classes = useStyles() 

    return (
        <div className={classes.root}>
            <Grid container spacing={0} >
                <Grid item xs={10}></Grid>
                <Grid item xs={1}> 
                    <Typography variant='body2' className={classes.button}> Join </Typography>
                </Grid>
                <Grid item xs={1}> 
                    <Typography variant='body2' className={classes.button}> Login </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header