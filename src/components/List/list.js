import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import ListItem from '../ListItem/listitem'
import collaborativeData from '../../data/collaborative.js'
import physicalData from '../../data/physical.js'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
        'width': '100%', 
    }, 
    intro: {
        'margin-top': '3em', 
    },
    introtext: {
        color: theme.palette.text.dark, 
        'font-weight': '450', 
        'font-size': '1.2em'
    },
    introlistitem: {
        'list-style-type': 'circle'
    },
    subcategory: {
        'margin-top': '3em'
    }, 
    subcategorytitle: {
        color: theme.palette.text.dark
    },
}))

const PhysicalList = ({classes, data}) => {

    return data.map(product => {
        return (
            <ListItem data={product}></ListItem>
        )
    })
}

const CollaborativeList = ({classes, data}) => {

    return data.map(product => {
        return (
            <ListItem data={product}></ListItem>
        )
    })

}

const List = (props) => {
    const classes = useStyles() 

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} className={classes.intro}>
                    <Typography variant='h6' className={classes.introtext}> Here we are reviewing 5 Collaborative Whiteboards, Microsoft Whiteboard, Google Jamboard, Limnu, Miro and Mural. </Typography>
                    <ul> 
                        {/* <li className={classes.introlistitem}> <Typography variant='h6' className={classes.introtext}> Microsoft Whiteboard </Typography> </li>
                        <li className={classes.introlistitem}> <Typography variant='h6' className={classes.introtext}> Google Jamboard </Typography> </li>
                        <li className={classes.introlistitem}> <Typography variant='h6' className={classes.introtext}> Limnu </Typography> </li>
                        <li className={classes.introlistitem}> <Typography variant='h6' className={classes.introtext}> Miro </Typography> </li>
                        <li className={classes.introlistitem}> <Typography variant='h6' className={classes.introtext}> Mural </Typography> </li> */}
                        {/* <li className={classes.nodecolist}> <Typography variant='h6' className={classes.introtext}>  </Typography></li> */}
                    </ul>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} className={classes.subcategory}> 
                    <Typography variant='h3' className={classes.subcategorytitle}> Physical Whiteboard Replacements</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={12} className={classes.listitem}> 
                    <PhysicalList classes={classes} data={physicalData}></PhysicalList>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} className={classes.subcategory}> 
                    <Typography variant='h3' className={classes.subcategorytitle}> Collaborative Workspaces</Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={12} className={classes.listitem}> 
                    <CollaborativeList classes={classes} data={collaborativeData}></CollaborativeList>
                </Grid>
            </Grid>
        </div>
    )
}

export default List