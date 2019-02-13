import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { withStyles } from '@material-ui/core';

const styles = {
    header: {
        backgroundColor: '#282c34',
        minHeight: '50px',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: '1',
    },

    cart: {
        marginRight: '20px',
        opacity: '0.8',
        '&:hover': {
            cursor: 'pointer',
            opacity: '1'         
        }
    },

    logo: {
        flex: 'auto',
        marginLeft: '20px'
    }
};

class Header extends React.PureComponent {
    render() {
        console.log('render Header');
        return(
            <header className={this.props.classes.header}>
                <h4 className={this.props.classes.logo}>Flower power app</h4>
                <FontAwesomeIcon icon={faShoppingCart} className={this.props.classes.cart}/>
            </header>
        )
    }
}
export default withStyles(styles)(Header);