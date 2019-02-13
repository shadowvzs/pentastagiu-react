import React from 'react';
import PropTypes from 'prop-types';

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
        justifyContent: 'center'
    }
}

class CardProduct extends React.PureComponent {
    render() {
        const props = this.props;
        console.log('render Card', props);
        const id = this.props.id;
        return (
            <Card className={props.classes.contentCard}>
                <CardHeader
                    title={props.description}
                    subheader="September 14, 2016"
                />                
                <CardMedia
                    className={props.classes.media}
                    image={props.photoUrl}
                    title={props.name}
                />
            

                <CardContent>
                    <h5>Price {props.unitPrice} EUR</h5>
                </CardContent>
                <CardActions className={props.classes.cardAction}>
                    <Button 
                        size="small" 
                        variant="contained" 
                        color="primary"
                    >Add to cart</Button>

                    <Button 
                        size="small" 
                        variant="contained" 
                        color="primary" 
                        onClick={() => props.handleClick(id)}
                    >Edit</Button>
                    
                    <Button 
                        size="small" 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => props.deleteProduct(id)}
                    >Delete</Button>                    
                </CardActions>
            </Card>
          )
    }
}
CardProduct.propTypes = {
    name: PropTypes.string,
    photoUrl: PropTypes.string,
    description: PropTypes.string,
    //unitPrice: PropTypes.number,
    handleClick: PropTypes.func,
    deleteProduct: PropTypes.func,
}
export default withStyles(styles)(CardProduct);
