
import React from 'react';
import { Switch, Route, BrowserRouter, Sidebar as Router } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

//route
import Main from './components/main/index';
import Products from './components/products/index';
import Datasets from './components/datasets/index';
import DatasetsDetail from './components/datasets/Detail';
import Company from './components/company/index';
import ContactUs from './components/contactUs/index';
import Talk from './components/talk/index';
import Terms from './components/terms/index';
import Privacy from './components/privacy/index';

function Routes() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/Products" component={Products} />
              <Route exact path="/Datasets" component={Datasets} />
              <Route path="/Datasets/detail" component={DatasetsDetail} />
              <Route path="/Company" component={Company} />
              <Route exact path="/ContactUs" component={ContactUs} />
              <Route exact path="/Talk" component={Talk} />
              <Route exact path="/Terms" component={Terms} />
              <Route exact exact path="/Privacy" component={Privacy} />
            </Switch>
        <section className="main_setcion3">
          <h2 className="title">Are you stylish than AI?</h2>
          <p className="radius">Request a demo</p>
        </section>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
