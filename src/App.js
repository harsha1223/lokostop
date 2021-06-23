import React from 'react';
import Header01 from './Container/Component/Header/Header01';
import Home from './Container/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from './Container/Scrolltotop';
import Blog from './Container/Blog';
import Compare from './Container/Compare';
import BlogMain from './Container/BlogMain';
import IndividualProduct from './Container/IndividualProduct';
import productSpecification from './Container/productSpecification';
import productReview from './Container/productReview';
import AboutUs from './Container/AboutUs';
import Section from './Container/Section' ;
import ComingSoon from './Container/ComingSoon';
import 'semantic-ui-css/semantic.min.css';
import Cart from './Container/Cart';
import paymentCart from './Container/paymentCart';
import PaymentDebit from './Container/PaymentDebit';
import PaymentNet from './Container/PaymentNet';
import PaymentWallet from './Container/PaymentWallet';
import PaymentCash from './Container/PaymentCash';
function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/blogs" component={Blog}></Route>
          <Route path="/compare" component={Compare}></Route>
          <Route path="/blogIndividual" component={BlogMain}></Route>
          <Route path="/productindividual" component={IndividualProduct}></Route>
          <Route path="/productSpecification" component={productSpecification}></Route>
          <Route path='/productReview' component = {productReview}></Route>
          <Route path='/aboutUs' component={AboutUs}></Route>
          <Route path='/ComingSoon' component = {ComingSoon}></Route>
          <Route path='/Section' component ={Section}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route path='/payment' component ={paymentCart}></Route>
          <Route path='/paymentDebit' component={PaymentDebit}></Route>
          <Route path='/paymentNet' component={PaymentNet}></Route>
          <Route path='/paymentWallet' component = {PaymentWallet}></Route>
          <Route path = '/PaymentCash' component={PaymentCash}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
