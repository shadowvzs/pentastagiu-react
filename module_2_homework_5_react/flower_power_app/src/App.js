import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import './App.css';
import { connect } from "react-redux";
import { getProducts, deleteProduct } from './Redux/Actions/products';
import { startEditProduct } from './Redux/Actions/ui';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.state = {
      name: 'Bogdan',
      title: 'Super Bogdan',
      setEditMode: false,
      dataById: {}
    }
  }

  componentDidMount = async () => {
    this.props._getAllProducts();
  }

  handleClick(id) {
    this.props._startEditProduct(id);
  }

  deleteProduct(id) {
    console.log(id);
    this.props._deleteProduct(id);
  }


  render() {
    console.log('app props', this.props);
    return (
      <div className="App">
      <Header />
      {
        this.props.ui.productEdit ?
          <EditCard {...this.state.dataById} /> :
          this.props.ui.showSpinner ?
            <div className="loading-spinner"><div></div><div></div><div></div><div></div></div>
          :
          <Content
            name={this.state.name}
            handleClick={this.handleClick}
            products={this.props.products}
            title={this.state.title}
            deleteProduct={this.deleteProduct}
            handleChangeTitle={()=> {}}
          />
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui,
  products: state.products.products
});

const mapDispatchToProps = (dispatch) => ({
    _getAllProducts: () => dispatch(getProducts()),
    _startEditProduct: (id) => dispatch(startEditProduct(id)),
    _deleteProduct: (id) => dispatch(deleteProduct(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
