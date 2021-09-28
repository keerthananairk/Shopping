import React from 'react'
import {AppBar, Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core'
import {ShoppingCart} from "@material-ui/icons"
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import useStyles from './Navbarstyle'
import { useStateValue } from './StateProvider'

const Navbar = () => {

    const[{basket},dispatch]=useStateValue();


    const classes=useStyles();
    return (
        <div>
           <AppBar positon="fixed" className={classes.appBar} color="inherit">
               <Toolbar>
                   <Typography variant="h6" className={classes.title} color='inherit'>
                    Dress Store
                   </Typography>

                   <Link to="/login"> <IconButton aria-label="Login page" color="inherit">
                      

                   <AccountCircleIcon/>
                      
                   </IconButton></Link>
                  
                   <Link to="/checkout"> <IconButton aria-label="Show cart items" color="inherit">
                       <Badge badgeContent={basket?.length} color="secondary">
                           <ShoppingCart/>
                       </Badge>
                   </IconButton></Link>
               </Toolbar>
               </AppBar> 

        </div>
    )
}

export default Navbar