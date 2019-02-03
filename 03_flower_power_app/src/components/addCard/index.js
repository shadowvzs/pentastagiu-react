import React from "react";
import PropTypes from "prop-types";
import { saveProductAdd } from '../../Redux/Actions/products';
import { connect } from "react-redux";
import CardForm from '../cardForm/';
import "./addCard.css";

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
        <div className="add-product content-card modal">
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


export default connect(
    null,
    mapDispatchToProps
)(AddCard);
