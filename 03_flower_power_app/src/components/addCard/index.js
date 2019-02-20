import React from "react";
import { saveProductAdd } from '../../Redux/Actions/products';
import { connect } from "react-redux";
import CardForm from '../cardForm/';
import { withStyles } from '@material-ui/core';

const styles = {
    cardModal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
        border: '1px outset #ccc',
        borderRadius: '5px',
        background: 'linear-gradient(to right, #fff, #ddd)',
        zIndex: 1
    }
  }

function AddCard(props) {

    const defaultData = {
        name: '',
        description: '',
        unitPrice: '',
        photoUrl: ''
    };    
    

    return (
        <div className={props.classes.cardModal}>
            <CardForm
                title="New Card"
                history={props.history}
                onSave={props._saveProductAdd}
                onClose={props.onClick}
                defaultData={defaultData}
            />
        </div>
    );
 
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    _saveProductAdd: (product) => dispatch(saveProductAdd(product, ownProps.history)),
});

const StyledComponent = withStyles(styles)(AddCard);

export default connect(null, mapDispatchToProps)(StyledComponent);
