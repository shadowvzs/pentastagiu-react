import React from "react";
import { connect } from "react-redux";
import { saveProductEdit } from '../../Redux/Actions/products';
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

class EditCard extends React.PureComponent {

  render() {
    const props = this.props;
    const id = this.props.id;
    const product = props.products.find(e => +e.id === +id);
    if (!product) { return null; } 
    return (
      <div className={props.classes.cardModal}>
        <CardForm
          title="Edit Card"
          history={props.history}          
          onSave={props._saveProductEdit}
          defaultData={product}
        />
      </div>
    );
  }
}

// put redux store (ui/products) into props
const mapStateToProps = (state) => ({
  products: state.products
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  _saveProductEdit: (product) => dispatch(saveProductEdit(product, ownProps.history)),
});

const StyledEditCard = withStyles(styles)(EditCard);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledEditCard);
