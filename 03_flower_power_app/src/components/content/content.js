import React, {PureComponent} from 'react';
import CardProduct from '../cardProduct/cardProduct';
import { connect } from "react-redux";
import { deleteProduct } from '../../Redux/Actions/products';
import { addCartProduct } from '../../Redux/Actions/cart';
import { withStyles } from '@material-ui/core';

const styles = {
    content: {
        paddingTop: '100px',
        textAlign: 'center'
   }
}

class Content extends PureComponent {
    
    // delete product what we pass down with props to card
    deleteProduct = id => {
        this.props._deleteProduct(id);
    }

    // delete product what we pass down with props to card
    addCartProduct = product => {
        this.props._addCartProduct(product);
    }

    render() {
        console.log('render content');

        return(
            <div className={this.props.classes.content}>
                {this.props.products.map(item => {
                    return (
                        <CardProduct
                            history={this.props.history}
                            key={item.id}
                            item={item}
                            addCartProduct={this.addCartProduct}
                            deleteProduct={this.deleteProduct}
                        />
                    )
                })}
            </div>
        )
    }
}

// put redux actions into props
const mapDispatchToProps = (dispatch) => ({
    _deleteProduct: (id) => dispatch(deleteProduct(id)),
    _addCartProduct: (product) => dispatch(addCartProduct(product)),
});
  
  
  export default connect( null, mapDispatchToProps)(withStyles(styles)(Content));
  