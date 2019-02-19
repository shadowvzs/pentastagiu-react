import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
    addCard: {
        marginTop: '100px',
    }
}

const AddCardButton = props => (
    <button 
      onClick={() => props.history.push('/add-product')} 
      className={props.classes.addCard}
    > 
      Add Card 
    </button>
);

export default withStyles(styles)(AddCardButton);
