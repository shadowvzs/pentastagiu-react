import React from "react";
import PropTypes from "prop-types";
import { saveProductEdit } from '../../Redux/Actions/products';
import { hideProductEdit } from '../../Redux/Actions/ui';
import CardForm from '../cardForm/';
import { connect } from "react-redux";
import "./editCard.css";

function EditCard (props) {   
  const defaultData = props.product;
  return (
    <div className="edit-product content-card modal">
      <CardForm
        onSave={props._saveProductEdit}
        onClose={props._hideProductEdit}
        defaultData={defaultData}
      />
    </div>
  );
}


EditCard.propTypes = {
  onClick: PropTypes.func,
  product: PropTypes.object,
};

const mapStateToProps = (state) => ({
  product: state.products.product
});

const mapDispatchToProps = (dispatch) => ({
  _saveProductEdit: (product) => dispatch(saveProductEdit(product)),
  _hideProductEdit: () => dispatch(hideProductEdit())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCard);
