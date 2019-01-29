import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { setSaveProduct, setInputProduct } from '../../Redux/Actions/products';
import { finishEditProduct } from '../../Redux/Actions/ui';
import { connect } from "react-redux";
import "./editCard.css";

class EditCard extends PureComponent {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onInputChange(event){
    const { name, value} = event.target;
    this.props._setInputProduct({[name]: value});
  }

  onCancel(event) {
    this.props._finishEditProduct();
  }

  onSave() {
    this.props._finishEditProduct();
    this.props._setSaveProduct();
  }

  render() {
    return (
      <div className="content-card modal">
        <label>Name</label>
        <input
          value={this.props.product.name}
          name="name"
          type="text"
          onChange={this.onInputChange}
        />
        <label>Description</label>
        <input
          value={this.props.product.description}
          name="description"
          type="text"
          onChange={this.onInputChange}
        />
        <button onClick={this.onSave}>Save</button>
        <button onClick={this.onCancel}>Cancel</button>
      </div>
    );
  }
}
EditCard.propTypes = {
  name: PropTypes.string,
};

const mapStateToProps = (state) => ({
  product: state.products.product
});

const mapDispatchToProps = (dispatch) => ({
    _finishEditProduct: () => dispatch(finishEditProduct()),
    _setSaveProduct: () => dispatch(setSaveProduct()),
    _setInputProduct: (name) => dispatch(setInputProduct(name))
  });


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCard);
