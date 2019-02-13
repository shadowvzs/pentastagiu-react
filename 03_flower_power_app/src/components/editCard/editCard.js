import React from "react";
import PropTypes from "prop-types";
import { saveProductEdit } from '../../Redux/Actions/products';
import { hideProductEdit } from '../../Redux/Actions/ui';
import CardForm from '../cardForm/';
import { connect } from "react-redux";
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

function EditCard (props) {   
  const defaultData = props.product;
  return (
    <div className={props.classes.cardModal}>
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

const StyledEditCard = withStyles(styles)(EditCard);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledEditCard);
