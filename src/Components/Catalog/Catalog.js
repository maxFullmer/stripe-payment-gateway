import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            items: {

            }
        };
    }
    // go to checkout with item that is stored in local cache/storage. "items" = {image, price}
    checkoutThisItem = () => {
        // update redux state with selected item (itemReducer.selectedItem: "" => "productID")
            this.props.history.push('/checkout')
    }

    render() {
        return (
            <section id="item-shop">
                <header id="catalog-header">
                    <h1>Seed Commerce</h1>
                </header>

                <h2>Click, Buy, Plant!</h2>
                <div id="item-wrapper">
                    <article onClick={this.checkoutThisItem} className="items">item 1</article>
                    <article onClick={this.checkoutThisItem} className="items">item 2</article>
                    <article onClick={this.checkoutThisItem} className="items">item 3</article>
                    <article onClick={this.checkoutThisItem} className="items">item 4</article>
                    <article onClick={this.checkoutThisItem} className="items">item 5</article>
                    <article onClick={this.checkoutThisItem} className="items">item 6</article>
                    <article onClick={this.checkoutThisItem} className="items">item 7</article>
                    <article onClick={this.checkoutThisItem} className="items">item 8</article>
                    <article onClick={this.checkoutThisItem} className="items">item 9</article>
                </div>
            </section>
        );
    }
}

export default withRouter(Catalog);
