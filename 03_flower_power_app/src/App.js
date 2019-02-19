import React, { PureComponent } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import AddCard from './components/addCard/';
import AddCardButton from './components/addCard/addCardButton';
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
        <Header />
        <AddCardButton {...this.props} />
        <Switch>
          <Route exact path="/add-product" component={ props => (<AddCard {...props} />) } />
          <Route exact path="/product/:productId" component={ props => (<EditCard {...props} />) } />
          <Route exact path="/" component={ props => (
            <Content
              {...props}
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
  products: state.products.products
});

// put redux actions into props
const mapDispatchToProps = (dispatch) => ({
    _getAllProducts: () => dispatch(getProducts())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
