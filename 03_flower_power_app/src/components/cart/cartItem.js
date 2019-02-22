
import React, {Component} from 'react';

import {
    TableCell,
    TableRow,
    Fab,
    Button
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const styles = {
    fab: {
        height: '20px',
        width: '20px',
        minHeight: '20px',
        margin: '0 10px'
    }
}

class cartItem extends Component {

    render() {
        console.log('render cartItem')
        const { item, classes } = this.props;
        return (
            <TableRow key={item.id}>
                <TableCell>
                    <img src={item.photoUrl} width="64" height="64" alt={item.description} />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                    <Fab 
                        color="default"
                        className={classes.fab} 
                        onClick={this.props.modifyCartProduct.bind(null, item.id, item.quantity-1)}
                    > - </Fab>
                    { item.quantity }
                    <Fab 
                        color="default"
                        className={classes.fab} 
                        onClick={this.props.modifyCartProduct.bind(null, item.id, item.quantity+1)}
                    > + </Fab>
                </TableCell>
                <TableCell>{item.quantity * +item.unitPrice}</TableCell>
                <TableCell>
                    <Button 
                        size="small" 
                        variant="contained" 
                        color="secondary"
                        onClick={this.props.removeCartProduct.bind(null, item.id)}
                    >Remove</Button>                     
                </TableCell>
            </TableRow>
        );
    }
}

export default withStyles(styles)(cartItem);