import React from "react";
import PropTypes from "prop-types";
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
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
        border: '1px outset #ccc',
        borderRadius: '5px',
        background: 'linear-gradient(to right, #fff, #ddd)',
        zIndex: 1
    }
  }

function AddCard(props) {

    // i readed this and decided near local state
    // why? not persistent, don't have any global impacat

    const defaultData = {
        name: '',
        description: '',
        unitPrice: '',
        photoUrl: ''
    };    

    return (
        <div className={props.classes.cardModal}>
            <CardForm
                onSave={props._saveProductAdd}
                onClose={props.onClick}
                defaultData={defaultData}
            />
        </div>
    );
 
}

AddCard.propTypes = {
    onClick: PropTypes.func,
    _saveProductAdd: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    _saveProductAdd: (product) => dispatch(saveProductAdd(product)),
});

const StyledComponent = withStyles(styles)(AddCard);

export default connect(
    null,
    mapDispatchToProps
)(StyledComponent);
