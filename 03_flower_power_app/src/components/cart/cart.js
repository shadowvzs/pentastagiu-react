import React, {PureComponent} from 'react';
import { connect } from "react-redux";

import { 
    removeCartProduct, 
    modifyCartProduct
} from '../../Redux/Actions/cart';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Button
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import CartItem from './cartItem';

const styles = {
    content: {
        paddingTop: '100px',
        textAlign: 'center'
   },
    root: {
        position: 'relative',
        marginTop:  '3px',
        overflowX: 'auto',
        display: 'inline-block'
    },
    table: {
        minWidth: '300',
        '& th': {
            textAlign: 'center'
        }
    },
    totalTd: {
        padding: '40px 0 20px 0',
        fontSize: '18px',
        color: '#333',
        '& b': {
            marginRight: '10px',
            color: '#777',
        }
    }
}

class Cart extends PureComponent {
    
    // delete product what we pass down with props to card
    deleteProduct = id => {
        this.props._deleteProduct(id);
    }

    render() {
        console.log('render cart');
        const { classes, cart } = this.props;

        return(
            <div className={classes.content}>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Photo</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Qty.</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        { cart.length 
                            ? <>
                                { cart.map(item => (
                                    <CartItem 
                                        key={item.id}
                                        item={item}
                                        modifyCartProduct={this.props._modifyCartProduct}
                                        removeCartProduct={this.props._removeCartProduct} 
                                    />
                                ) ) }
                                <TableRow>
                                    <TableCell align="right" colSpan="5" className={classes.totalTd}> 
                                        <b>Total:</b> ${ cart.reduce((total, item)=> total+(item.quantity*+item.unitPrice), 0) } 
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right" colSpan="5"> 
                                        <Button 
                                            size="small" 
                                            variant="contained" 
                                            color="primary"
                                            onClick={() => alert('Still not work')}
                                        >Order All Product</Button>                                    
                                    </TableCell>
                                </TableRow>  
                            </>
                        :   (
                                <TableRow>
                                    <TableCell align="center" colSpan="5"> 
                                            .... empty ..... 
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                    </Table>
                </Paper>                 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
});
  
  
const mapDispatchToProps = (dispatch) => ({
    _modifyCartProduct: (id, quantity) => dispatch(modifyCartProduct(id, quantity)),
    _removeCartProduct: (id) => dispatch(removeCartProduct(id)),
});
  
const StyledCart = withStyles(styles)(Cart);
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StyledCart);
  