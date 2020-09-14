import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
        'width': '100%', 
    }, 
    productcontainer: {
        'margin-bottom': '30px', 
    }, 
    productname: {
        'margin-top': '40px',
        'padding-bottom': '30px',
        color: theme.palette.text.main
    }, 
    logocontainer: {
        'margin-top': '30px',
    },
    logo: {
        'width': '80%', 
        'margin-left': '20%',        
        'vertical-align': 'middle'
    },
    productdescription: {
    }, 
    overview: {
        color: theme.palette.text.dark
    }, 
    heading: {
        'margin-top': '30px',
        color: theme.palette.text.dark
    }, 
    body: {
        'margin-top': '15px', 
        color: theme.palette.text.dark
    },
    productdetails: {
    }, 
    screenshotcontainer: {
        'width': '90%',
        'margin-left': '10%', 
    }, 
    screenshotmain: {
        'box-shadow': '0px 1px 3px #EFEFEF', 
        // 'height': '20em', 
        'overflow': 'hidden', 
        'margin': 'auto' 
    }, 
    screenshot: {
        'width': '100%', 
        'height': '100%'
    },
    buttoncontainer: {
        'display': 'flex', 
        'flex-direction': 'row',
        'width': '100%'
    },
    screenshotbutton: {
        'width': '60px',
        'height': '40px', 
        'margin': '5px'
    },
    activescreenshotbutton: {
        'width': '60px',
        'height': '40px', 
        'margin': '5px', 
        'border-style': 'solid', 
        'border-width': '2px', 
        'border-color': theme.palette.primary.main
    }, 
    urlcontainer: {
        'width': '80%', 
        'margin-top': '10px',
        'margin-bottom': '10px',
        'margin-left': '20%',
        'text-align': 'right'
    },
    url: {
        color: theme.palette.text.dark, 
        'font-weight': '600', 
    },
    pricingcontainer: {
        'width': '80%', 
        'margin-left': '20%',
        'margin-top': '20px',         
        'display': 'flex', 
        'flex-direction': 'row', 
        'text-align': 'center',
    },
    pricingcard: {
        'border-style': 'solid', 
        'border-width': '1px', 
        'border-color': theme.palette.outline.main,
        'box-shadow': '0px 1px 3px #EFEFEF',
        'width': '100%', 
        'height': '150px',
        'border-radius': '4px'
    },
    pricingname: {
        'color': '#FFFFFF', 
        'height': '30px', 
        'padding-top': '10px', 
        'font-size': '12px', 
        'font-weight': '550', 
    }, 
    pricingprice: {
        'padding-top': '10px',
        'font-size': '18px', 
        'font-weight': '550', 
        color: theme.palette.text.dark
    }, 
    pricingunit: {
        'padding-top': '7px', 
        'font-size': '12px', 
        'font-weight': '550',
        color: '#9BA7B0'
    }, 
    pricingusers: {
        'padding-top': '7px',
        'padding-bottom': '7px',
        'font-size': '10px', 
        color: theme.palette.text.dark
    }, 
    deploymentscontainer: {
        'display': 'flex', 
        'flex-direction': 'row', 
        'width': '100%', 
        'margin-top': '5%'
    }, 
    deploymenticon: {
        'margin-right': '10%', 
        'text-align': 'center', 
    },
    deploymentlogo: {
        'height' : '50px',        
    }, 
    deploymentname: {
        'text-align': 'center', 
        color: theme.palette.text.dark, 
        'font-weight': '600', 
        'margin-top': '5px'
    },
    verdictcontainer: {
        'margin-top': '2.5em'
    }, 
    verdicttitle: {
        'background-color': theme.palette.backgrounds.main,
        'padding-top': '.7em',
        'padding-bottom': '.7em', 
        'padding-left': '1.5em', 
        'color': '#FFFFFF'
    }, 
    verdicttext: {
        'background-color': theme.palette.backgrounds.light, 
        'padding': '2em'
    },
    strike: {
        'border-style': 'solid', 
        'border-width': '1px',
        'border-color': theme.palette.outline.main,
        'margin-top': '5em'
    }
}))

const ScreenshotPicker = ({screenshots, activeScreenshot, setActiveScreenshot, classes}) =>{
    return screenshots.map(screenshot => {
        if(screenshot === activeScreenshot) {
            return (
                <div onClick={() => setActiveScreenshot(screenshot)} className={classes.activescreenshotbutton}>
                    <img
                        src={require(`../../assets/${screenshot}`)}
                        alt=""
                        className={classes.screenshot}
                    />
                </div>
            )
        }
        else {
            return (
                <div onClick={() => setActiveScreenshot(screenshot)} className={classes.screenshotbutton}>
                    <img
                        src={require(`../../assets/${screenshot}`)}
                        alt=""
                        className={classes.screenshot}
                    />
                </div>
            )
        }
    })
}

const ScreenshotViewer = ({screenshots, classes}) => {
    const [activeScreenshot, setActiveScreenshot] = useState(screenshots[0])

    return (
        <div className={classes.screenshotcontainer}> 
            <div className={classes.screenshotmain}> 
                <img
                    src={require(`../../assets/${activeScreenshot}`)}
                    alt=""
                    className={classes.screenshot}
                /> 
            </div> 
            <div className={classes.buttoncontainer}> 
                <ScreenshotPicker screenshots={screenshots} activeScreenshot={activeScreenshot} setActiveScreenshot={setActiveScreenshot} classes={classes}/>
            </div>
        </div>
    )
}

const PricingList = ({pricings, classes}) => {
    return pricings.map(pricing => {
        return (
            <Grid item xs={4} className={classes.pricingcard}>
                <Typography variant='body2' style={{background: pricing.color}} className={classes.pricingname}> {pricing.name} </Typography>
                <Typography variant='body1' className={classes.pricingprice}> {pricing.price} </Typography>
                <Typography variant='body1' className={classes.pricingunit}> {pricing.unit} </Typography>
                <Typography variant='body1' className={classes.pricingusers}> {pricing.additional} </Typography>
            </Grid>
        )
    })
}

const DeploymentIcons = ({classes, deployments}) => {
    return deployments.map(deployment => {
        return (
            <div className={classes.deploymenticon}>
                <img
                    src={require(`../../assets/${deployment.image}`)}
                    alt=""
                    className={classes.deploymentlogo}
                />
                <Typography variant='body1' className={classes.deploymentname}> {deployment.name} </Typography>
            </div>
        )
    })
}

const ListItem = ({data}) => {
    const classes = useStyles() 

    return (
        <div className={classes.root}>
            <Grid container spacing={0} className={classes.productcontainer}>
                <Grid item xs={1}></Grid>
                <Grid item xs={9} className={classes.productname}> 
                    <Typography variant='h4'> {data.name} </Typography>
                </Grid>
                <Grid item xs={1} className={classes.logocontainer}> 
                    <img 
                        src={require(`../../assets/${data.logo}`)}
                        alt=""
                        className={classes.logo}
                    ></img>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={5} className={classes.productdescription}> 
                    <Typography variant='body1' className={classes.overview}> {data.overview}</Typography>
                    <Typography variant='h5' className={classes.heading}> Functionality </Typography>
                    <Typography variant='body1' className={classes.body}> {data.functionality}</Typography>
                    <Typography variant='h5' className={classes.heading}> Features </Typography>
                    <Typography variant='body1' className={classes.body}> {data.features}</Typography>
                    <Typography variant='h5' className={classes.heading}> Integrations </Typography>
                    <Typography variant='body1' className={classes.body}> {data.integrations}</Typography>
                    <Typography variant='h5' className={classes.heading}> Deployments </Typography>
                    <div className={classes.deploymentscontainer}>
                        <DeploymentIcons classes={classes} deployments={data.deployments}/>
                    </div>
                </Grid>
                <Grid item xs={5} className={classes.productdetails}>
                    <div className={classes.screenshotcontainer}> 
                        <ScreenshotViewer screenshots={data.screenshots} classes={classes}/> 
                    </div>
                    <div className={classes.urlcontainer}>
                        <Typography variant='body1' component={Link} className={classes.url}> {data.website} </Typography> 
                    </div>
                    <Grid container spacing={0} className={classes.pricingcontainer}> 
                        <PricingList pricings={data.pricing} classes={classes}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} className={classes.verdictcontainer}> 
                    <Typography variant='h5' className={classes.verdicttitle}> 
                        VERDICT
                    </Typography>
                    <Typography variant='body1' className={classes.verdicttext}> 
                        {data.verdict}
                    </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={12} className={classes.strike}></Grid>
            </Grid>
        </div>
    )
}

export default ListItem