import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../cardProduct/cardProduct';
import { withStyles } from '@material-ui/core';

const styles = {
    content: {
        paddingTop: '50px',
        textAlign: 'center'
   }
}

class Content extends Component {

    render() {
        return(
            <div className={this.props.classes.content}>
                {this.props.products.map(function(item){
                    return (
                        <CardProduct
                            key={item.id}
                            {...item}
                            deleteProduct={this.props.deleteProduct}
                            handleClick={this.props.handleClick}
                        />
                    )
                }, this)}
            </div>
        )
    }
}

Content.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    handleChangeTitle: PropTypes.func,
    title: PropTypes.string,
    products: PropTypes.any,
}

export default withStyles(styles)(Content);
