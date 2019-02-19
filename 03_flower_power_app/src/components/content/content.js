import React, {PureComponent} from 'react';
import CardProduct from '../cardProduct/cardProduct';
import { connect } from "react-redux";
import { deleteProduct } from '../../Redux/Actions/products';
import { withStyles } from '@material-ui/core';

const styles = {
    content: {
        paddingTop: '50px',
        textAlign: 'center'
   }
}

class Content extends PureComponent {
    
    // delete product what we pass down with props to card
    deleteProduct = id => {
        this.props._deleteProduct(id);
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
                            {...item}
                            deleteProduct={this.deleteProduct }
                        />
                    )
                })}
            </div>
        )
    }
}

// put redux actions into props
const mapDispatchToProps = (dispatch) => ({
    _deleteProduct: (id) => dispatch(deleteProduct(id))
});
  
  
  export default connect( null, mapDispatchToProps)(withStyles(styles)(Content));
  