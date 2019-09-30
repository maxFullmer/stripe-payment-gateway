import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';
import Catalog from './Components/Catalog/Catalog.js'
import SelectedProduct from './Components/Checkout/SelectedProduct.js'
import CheckoutForm from './Components/Checkout/CheckoutForm.js';
import './App.css';

function App() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/checkout" render={() => 
            <section>
              <header>
                <h1>Seed Commerce</h1>
              </header>
              
              <SelectedProduct />

              <aside id="quick-buy">
                <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                  <div className="example">
                    <h4 className="header-align">Simple and Secure Payment <br /> with Stripe</h4>
                    <Elements>
                      <CheckoutForm />
                    </Elements>
                  </div>
                </StripeProvider>
              </aside>
            </section>
        } />
        </Switch> 
      </main>
    );
}

export default App;
