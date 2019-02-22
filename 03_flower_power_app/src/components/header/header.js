import React from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { withStyles, IconButton, Badge } from '@material-ui/core';
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
    badge : {
        top: '-3px',
        right: '-3px'
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
        const { cart, classes } = this.props;
        const counter = cart.reduce((total, item) => total+item.quantity, 0);
        console.log('render Header');
        return(
            <header className={classes.header}>
                <Link to="/" className={classes.logo}>
                    <h4>Flower power app</h4>
                </Link>
                <Link to="/add-product" className={classes.cart}>
                    <FontAwesomeIcon 
                        icon={faPlusSquare} 
                    />
                </Link>
                <IconButton aria-label="Cart">
                <Badge badgeContent={counter} color="primary" className={classes.cart} classes={{ badge: classes.badge }}>
                    <FontAwesomeIcon 
                         icon={faShoppingCart} 
                    />
                </Badge>
              </IconButton>               
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
});
  
  
const StyledHeader = withStyles(styles)(Header);
  
export default connect(mapStateToProps)(StyledHeader);
  