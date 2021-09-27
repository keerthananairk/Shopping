import React from "react";

import { Grid } from '@material-ui/core'

import useStyles from './components/Products/style';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'


const Checkout = ({products}) => {
    const [{basket}, dispatch]=useStateValue();
   


    const classes=useStyles();
    return (
        <main className={classes.content}>
        <div className={classes.toolbar}/>
            <Grid container justify='center' spacing={4}>
                {basket.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                       <CheckoutProduct
                      id={product.id}
                      title={product.title}
                      image={product.image}
                      price={product.price}
                       />
                       
                    </Grid>
                ))}
               
            </Grid>
            <Subtotal/>
        </main>
    )
}


export default Checkout