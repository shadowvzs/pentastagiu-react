import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlusSquare } from '@fortawesome/fontawesome-free-solid';
import { withStyles, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
        fontSize: '20px',
        color: '#ccc',
        opacity: '0.8',
        '&:hover': {
            cursor: 'pointer',
            opacity: '1'         
        }
    },

    logo: {
        flex: 'auto',
        color: 'white',
        textDecoration: 'none',
        outline: '0',
        marginLeft: '20px'
    },

};

class Header extends React.PureComponent {
    render() {
        const classes = this.props.classes;
        console.log('render Header');
        return(
            <header className={classes.header}>
                <Link to="/" className={classes.logo}>
                    <h4>Flower power app</h4>
                </Link>
                <Link to="/add-product" className={classes.cart}>
                    <FontAwesomeIcon 
                        icon={faPlusSquare} 
                       // className={classes.cart} 
                    />
                </Link>
                <FontAwesomeIcon icon={faShoppingCart} className={classes.cart}/>
            </header>
        )
    }
}
export default withStyles(styles)(Header);