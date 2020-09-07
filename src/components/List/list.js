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
    subcategory: {
        'margin-top': '6em'
    }, 
    subcategorytitle: {
        color: theme.palette.text.dark
    },
    listitem: {
    }
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