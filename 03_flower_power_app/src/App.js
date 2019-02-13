import React, { PureComponent } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import AddCard from './components/addCard/';
import { connect } from "react-redux";
import { getProducts, getProduct, deleteProduct } from './Redux/Actions/products';
import { withStyles } from '@material-ui/core';

const styles = {
    addCard: {
        marginTop: '100px',
    }
}

const AddCardButton = props => (<button onClick={props.toggleAddCardModal} className={props.classes.addCard}>Add Card</button>);
const StyledAddCardButton = withStyles(styles)(AddCardButton);


class App extends PureComponent {
  constructor(props){
    super(props);
    this.toggleAddCardModal = this.toggleAddCardModal.bind(this);
    this.toggleEditCardModal = this.toggleEditCardModal.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.state = {
      name: 'Bogdan',
      title: 'Super Bogdan',
      openAddCard: false,
      dataById: {}
    }
  }

  // load all products from backend
  componentDidMount = async () => {
    this.props._getAllProducts();
  }

  // delete product what we pass down with props to card
  deleteProduct(id) {
    this.props._deleteProduct(id);
  }

  // toggle add card modal - local state here
  toggleAddCardModal() {
    const state = this.state.openAddCard;
    this.setState({openAddCard: !state})
  }

  // toggle the edit modal - state in redux
  toggleEditCardModal(id = null) {
    id && this.props._getProduct(id);
  }

  // show add card modal is internal state boolean (openAddCard) is true
  // show edit card modal if in redux store (ui.productEdit) is true
  // show loader spinner
  // else show content with all product card
 
  render() {

    console.log('app props', this.props, this.state);
    return (
      <div className="App">
        <Header />
        <StyledAddCardButton toggleAddCardModal={this.toggleAddCardModal} /> 
        {
          this.state.openAddCard ? <AddCard onClick={this.toggleAddCardModal} /> : null
        }
        {
          this.props.ui.productEdit
            ? <EditCard onClick={this.toggleEditCardModal} />
            : this.props.ui.showSpinner 
              ? <div className="loading-spinner"><div></div><div></div><div></div><div></div></div>
            : <Content
                name={this.state.name}
                handleClick={this.toggleEditCardModal}
                products={this.props.products}
                title={this.state.title}
                deleteProduct={this.deleteProduct}
              />
        }
      </div>
    );
  }
}

// put redux store (ui/products) into props
const mapStateToProps = (state) => ({
  ui: state.ui,
  products: state.products.products
});

// put redux actions into props
const mapDispatchToProps = (dispatch) => ({
    _getAllProducts: () => dispatch(getProducts()),
    _getProduct: (id) => dispatch(getProduct(id)),
    _deleteProduct: (id) => dispatch(deleteProduct(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
