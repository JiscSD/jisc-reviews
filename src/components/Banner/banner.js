import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
        'width': '100%', 
    }, 
    container: {
        'width': '100%',
        'height': '250px', 
        background: 'linear-gradient(45deg, #4E53A7 30%, #36A5C0 90%)',
        'display': 'table'
    }, 
    textcontainer: {
        'width': '100%', 
        'display': 'table-cell', 
    },
    title: {
        color: '#FFFFFF',
        'margin-top': '50px',
    },
    description: {
        color: '#FFFFFF', 
        'margin-top': '20px',
        'margin-bottom': '50px', 
        'font-size': '12px'
    },
    imagecontainer: {
        'text-align': 'center', 
        'vertical-align': 'middle', 
        'display': 'table-cell'
    },
    image: {
        'margin-top': '60px', 
        'max-width': '300px',
        'max-height': '250px'
    },
    shadow: {
        'margin-top': '-80px', 
        'max-width': '300px'    }
}))

const Banner = (props) => {
    const classes = useStyles() 

    return (
        <div className={classes.root}>
            <Grid container spacing={0} className={classes.container}> 
                <Grid item xs={6} className={classes.textcontainer}> 
                    <Grid container spacing={0}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={10}> 
                            <Typography variant='h2' className={classes.title}> Colaborative Whiteboards </Typography>
                            <div className={classes.description}> 
                                <Typography variant='body2'> Collaborative whiteboards provide a shared design space commonly referred to as a board or canvas. Multiple users can view and edit this space from any device with internet access. 
Collaborative whiteboard applications vary in appearance, features and capabilities. Simpler applications offer digital versions of a physical whiteboard with only a few added features. At the other end of the scale there are applications that are closer to collaboration platforms, offering a variety of features and templates suited to teams across a range of disciplines. 
<br/><br/> Choosing a collaborative whiteboard depends on why and how you intend to use it. Is the full range of collaboration features a requirement, will you make use of the templates, and are you prepared to pay? These are only some of the factors that should be considered.  </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} className={classes.imagecontainer}>
                    <Grid container spacing={0}> 
                        <Grid item xs={4}></Grid>
                        <Grid item xs={6}>
                            <img
                                src={require('../../assets/laptop.png')}
                                alt=""
                                className={classes.image}
                            />
                            <img 
                                src={require('../../assets/laptopshadow.png')}
                                alt=""
                                className={classes.shadow}
                            ></img>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Banner