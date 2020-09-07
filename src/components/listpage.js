import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header/header'
import Title from './Title/title'
import Banner from './Banner/banner'
import List from './List/list'
import Footer from './Footer/footer'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
        'width': '100%', 
        'height': '100%', 

    }
}))

const ListPage = (props) => {
    const classes = useStyles() 

    return (
        <div> 
            <Header> </Header>
            <Title> </Title>
            <Banner> </Banner>
            <List> </List>
            <Footer> </Footer>
        </div>
    )
}

export default ListPage