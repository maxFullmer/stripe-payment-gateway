import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './Components/CheckoutForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Stay Awake</h1>
        </header>

        <div id="search-n-buy">
          <section id="category-shop">
            <h2>Shop Max</h2>
            <div id="category-wrapper">
              <article className="categories">Category 1</article>
              <article className="categories">Category 2</article>
              <article className="categories">Category 3</article>
              <article className="categories">Category 4</article>
            </div>
          </section>

          <aside id="quick-buy">
            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
              <div className="example">
                <h2>QuickBuy</h2>
                <Elements>
                  <CheckoutForm />
                </Elements>
              </div>
            </StripeProvider>
          </aside>
        </div>
      </main>
    );
  }
}

export default App;
