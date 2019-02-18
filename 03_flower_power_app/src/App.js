import React, { PureComponent } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import AddCard from './components/addCard/';
import { connect } from "react-redux";
import { getProducts, deleteProduct } from './Redux/Actions/products';
import { withStyles } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

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
const StyledAddCardButton = withStyles(styles)(AddCardButton);


const NotFound = (props) => (
  <h2> Not found </h2>
);

class App extends PureComponent {
  constructor(props){
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  // load all products from backend
  componentDidMount = async () => {
    this.props._getAllProducts();
  }

  // delete product what we pass down with props to card
  deleteProduct(id) {
    this.props._deleteProduct(id);
  }

  //shouldComponentUpdate(nextProps) {
  //  return nextProps.product !== this.props.product;
  //}
  
  render() {
    console.log('app render');
    return (
      <div className="App">
        <Header />
        <StyledAddCardButton {...this.props} />
        <Switch>
          <Route exact path="/add-product" component={ props => (<AddCard {...props} />) } />
          <Route exact path="/product/:productId" component={ props => (<EditCard {...props} />) } />
          <Route exact path="/" component={ props => (
            <Content
              {...props}
              products={this.props.products}
              deleteProduct={this.deleteProduct}
            />)}
          />
          <Route path="*" component={() => (<NotFound />)} />
        </Switch>
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
    _deleteProduct: (id) => dispatch(deleteProduct(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
