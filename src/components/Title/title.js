import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Menu, Grid, Typography } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
        'width': '100%', 
        'height': '4em', 
    }, 
    logo: {
        'margin-top': '1em',
        'margin-left': '1em', 
        'width': '35px', 
        'height': '35px', 
    },
    title: {
        'margin-top': '1.2em', 
    },
    menu: {
        'margin-top': '1.7em', 
        'color': '#000000',
    },
    dropmenu: {
        'display': 'flex', 
        'flex-direction': 'row', 
        'font-size': '1em', 
        'font-weight': '350',
        'margin-top': '1.7em'
    },
    dropmenutitle: {
        'font-size': '1em', 
        'font-weight': '350',
        'margin-top': '-.em'
    },
    arrow: {
        color: '#000000', 
    }
}))

const Title = (props) => {
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
                <Grid item xs={2} className={classes.dropmenu}> 
                    <Typography variant='h6' className={classes.dropmenutitle}> Categories </Typography> <ArrowDropDownIcon className={classes.arrow}/>
                </Grid>
                <Grid item xs={2}>  
                    <Typography variant='h6' className={classes.menu}> Most purchased </Typography>
                </Grid>
                <Grid item xs={2}> 
                    <Typography variant='h6' className={classes.menu}> Top Reviews </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Title