import React, { PureComponent } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import AddCard from './components/addCard/';
import Cart from './components/cart/cart';
import NotFound from './components/errors/notFound';
import { connect } from "react-redux";
import { getProducts } from './Redux/Actions/products';
import { Route, Switch } from 'react-router-dom';

class App extends PureComponent {

  // load all products from backend
  componentDidMount = async () => {
    this.props._getAllProducts();
  }

  render() {
    console.log('app render');
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/add-product" component={ props => (
            <AddCard history={props.history} />
            ) } 
          />
          <Route exact path="/product/:productId" component={ props => (
              <EditCard 
                products={props.products} 
                history={props.history} 
                id={props.match.params.productId}
              />) } 
          />

          <Route exact path="/cart" component={ props => <Cart history={props.history} /> } />

          <Route exact path="/" component={ props => (
            <Content
              history={props.history}
              products={this.props.products}
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
  products: state.products
});

// put redux actions into props
const mapDispatchToProps = (dispatch) => ({
    _getAllProducts: () => dispatch(getProducts())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
