import React from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Routes/PrivateRoute';
import ScrollToTop from './Container/Scrolltotop';
import Home from './Container/Home/Home';
import Blog from './Container/Blog/Blog';
import Compare from './Container/Compare/Compare';
import BlogMain from './Container/Blog/BlogMain';
import IndividualProduct from './Container/ProductIndividual/IndividualProduct';
import AboutUs from './Container/About/AboutUs';
import Section from './Container/Section/Section';
import ComingSoon from './Container/ComingSoon/ComingSoon';
import 'semantic-ui-css/semantic.min.css';
import Cart from './Container/Cart/Cart';
import paymentCart from './Container/Cart/paymentCart';
import ProfileIndividual from './Container/Profile/ProfileIndividual';
import sendQuery from './Container/Query/sendQuery';
import Loader from './Container/Loader/Loader';
import {getAllProducts} from './Redux/Actions/ProductActions'
import {getAllCategories} from './Redux/Actions/CategoryActions'
import {getFooterDetails, getProductTabs} from './Redux/Actions/StorefrontActions'
import {getAllPages} from './Redux/Actions/PageActions'

class App extends React.Component {
  componentDidMount(){
    this.props.getAllProducts()
    this.props.getFooterDetails()
    this.props.getProductTabs()
    this.props.getAllCategories()
    this.props.getAllPages()
  }
  render(){
    if(this.props.footerLoading || this.props.categoriesloading){
      return <Loader />
  }
    return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blogs" component={Blog} />
            <Route path="/compare" component={Compare} />
            <Route path="/blogIndividual" component={BlogMain} />
            <Route path="/product/:id" component={IndividualProduct} />
            <Route path='/aboutUs' component={AboutUs} />
            <Route path='/ComingSoon' component={ComingSoon} />
            <Route path='/cart' component={Cart} />
            <Route path='/payment' component={paymentCart} />
            <PrivateRoute path='/profile' component={ProfileIndividual}></PrivateRoute>
            <Route path='/sendquery' component={sendQuery} />
            <Route exact path='/category/:name/:id' component={Section} />
          </Switch>
        </Router>
      </div>
    );
  } 
}
const mapStateToProps = state =>{
  return {
      footerLoading: state.getFooter.loading,
      allProductRowsLoading: state.getProductTabs.loading,
      categoriesloading: state.getCategories.loading
  }
}
export default connect(mapStateToProps, {getAllProducts, getFooterDetails, getProductTabs, getAllCategories, getAllPages})(App)

