import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item , onRemoveFromCart}) => {
  const classes = useStyles();

  // const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  // const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);
const handleRemoveFromCart = (lineItemId) => {
  console.log(lineItemId)
}
  return (
    <Card className="cart-item">
      <CardMedia image={item.image} alt={item.bookName} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.author}</Typography>
        <Typography variant="h6" color='secondary' >{item.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small">-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" >+</Button>
        </div>
        <Button className={classes.button} variant="contained" type="button" color='secondary' onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
