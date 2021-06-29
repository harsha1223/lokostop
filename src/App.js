import React from 'react';
import Home from './Container/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from './Container/Scrolltotop';
import Blog from './Container/Blog/Blog';
import Compare from './Container/Compare/Compare';
import BlogMain from './Container/Blog/BlogMain';
import IndividualProduct from './Container/ProductIndividual/IndividualProduct';
import AboutUs from './Container/About/AboutUs';
import Section from './Container/Section/Section' ;
import ComingSoon from './Container/ComingSoon/ComingSoon';
import 'semantic-ui-css/semantic.min.css';
import Cart from './Container/Cart/Cart';
import paymentCart from './Container/Cart/paymentCart';
import PaymentDebit from './Container/Cart/PaymentDebit';
import PaymentNet from './Container/Cart/PaymentNet';
import PaymentWallet from './Container/Cart/PaymentWallet';
import PaymentCash from './Container/Cart/PaymentCash';
import ProfileIndividual from './Container/Profile/ProfileIndividual';
import sendQuery from './Container/Query/sendQuery';
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/blogs" component={Blog}></Route>
          <Route path="/compare" component={Compare}></Route>
          <Route path="/blogIndividual" component={BlogMain}></Route>
          <Route path="/productindividual" component={IndividualProduct}></Route>
          <Route path='/aboutUs' component={AboutUs}></Route>
          <Route path='/ComingSoon' component = {ComingSoon}></Route>
          <Route path='/Section' component ={Section}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route path='/payment' component ={paymentCart}></Route>
          <Route path='/paymentDebit' component={PaymentDebit}></Route>
          <Route path='/paymentNet' component={PaymentNet}></Route>
          <Route path='/paymentWallet' component = {PaymentWallet}></Route>
          <Route path='/PaymentCash' component={PaymentCash}></Route>
          <Route path='/profileIndividual' component={ProfileIndividual}></Route>
          <Route path='/sendquery' component={sendQuery}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
