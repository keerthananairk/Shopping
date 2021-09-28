import React,{useState} from 'react'

import {Card,CardMedia, CardActions, Typography, CardContent} from '@material-ui/core'
import{AddShoppingCart} from '@material-ui/icons'
import  useStyles from './style'
import { useStateValue } from '../../../StateProvider'


const Product=({product},)=>{

    const[{basket},dispatch]=useStateValue()
    console.log('this is basket>>',basket)
    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:product.id,
                title:product.title,
                image:product.image,
                price:product.price
            }
        })
    }




    const classes=useStyles()
    return (
       <Card className={classes.root}>
           <CardMedia className={classes.media} image={product.image}  title={product.title}/>
           <CardContent>
               <div className={classes.CardContent}>
                   <Typography variant="h5" gutterBottom>
                       {product.title}
                   </Typography>
                   <Typography variant="h5">
                       {product.price}
                   </Typography>
               </div>
               
           </CardContent>
           <CardActions disableSpacing className={classes.cardAction}>
           
               <button onClick={addToBasket}><AddShoppingCart/></button>
         
           </CardActions>
       </Card>
    )
}

export default Product