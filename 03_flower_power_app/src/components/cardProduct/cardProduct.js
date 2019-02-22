import React, {PureComponent} from 'react';

import {
    Button, Card, CardActions, CardHeader, CardMedia, CardContent, withStyles
} from '@material-ui/core';

const styles = {
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
    },
    contentCard: {
        width: 300,
        display: 'inline-block',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,.15)',
        margin: 20,
        position: 'relative',
        marginBottom: 50,
        transition: 'all .2s ease-in-out',
        '&:hover': {
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
        }
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '15px'
    }
}

class CardProduct extends PureComponent {
    render() {
        const props = this.props;
        console.log('render Card');
        const item = props.item;
        const id = item.id;
        return (
            <Card className={props.classes.contentCard}>
                <CardHeader
                    title={item.description}
                    subheader="September 14, 2016"
                />                
                <CardMedia
                    className={props.classes.media}
                    image={item.photoUrl}
                    title={item.name}
                />
            

                <CardContent>
                    <h5>Price {item.unitPrice} EUR</h5>
                </CardContent>
                <CardActions className={props.classes.cardAction}>
                    <Button 
                        size="small" 
                        variant="contained" 
                        color="primary"
                        onClick={props.addCartProduct.bind(null, item)}     // since arrow function, i can't change context but i can add value :)
                    >Add to cart</Button>

                    <Button 
                        size="small" 
                        variant="contained" 
                        color="primary" 
                        onClick={() =>  this.props.history.push('/product/'+id)}
                    >Edit</Button>
                    
                    <Button 
                        size="small" 
                        variant="contained" 
                        color="secondary" 
                        onClick={props.deleteProduct.bind(null, id)}
                    >Delete</Button>                    
                </CardActions>
            </Card>
          )
    }
}

export default withStyles(styles)(CardProduct);
