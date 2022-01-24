import React, { useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button,CardActionArea} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './styles';


const Product = ({product, onAddToCart}) => {

  const initValue = {
    bookName:'',
    author:'',
    quantity:1,
    image:'',
    price:''
  }
const [cart,setCart] = useState(initValue) 
  const addInCart = (product) => {
    setCart({
      ...cart,
      author:product.author,
      quantity:1,
      image:product.image,
      price:product.price
    })
  }

  const check =(product) =>{
addInCart(product)
console.log(cart)
  }
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <Link to={`product-view/${product.id}`} >
        <CardActionArea>
        <CardMedia className={classes.media} image={product.image} title={product.bookName}  />
        </CardActionArea>
        </Link>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography  variant="h6">
            {product.bookName}
            </Typography>
            <Typography variant="h6" color="secondary">
              ₹<b>{product.price}</b> 
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <Button variant="contained" className={classes.button} endIcon={<AddShoppingCart />} onClick={() => onAddToCart(cart)} >
            <b>ADD TO CART</b>
          </Button>
        </CardActions>
        </Card>
    )
}

export default Product;