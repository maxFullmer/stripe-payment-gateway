import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SelectedProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 1 };
    }

    closeCheckoutView = () => {
        this.props.history.push('/');
    }

    // incrementQuantity = () => {
    //     this.setState({
    //         quantity: this.state.quantity + 1
    //     })
    // }
    // decrementQuantity = () => {
    //     if (this.state.quantity > 0 )
    //     this.setState({
    //         quantity: this.state.quantity - 1
    //     })
    // }

    render() {
        return (
            <article>
                <h2 className="header-align">Selected Seed Product</h2>
                <input onClick={this.closeCheckoutView} type="button" value="X" />
                <input type="button" value="Add To Cart" />
                <label htmlFor="quantity">Quantity</label>
                <input autoFocus type="number" id="quantity" min="1"/>
            </article>
        );
    }
}
//connect redux state to Props

export default withRouter(SelectedProduct);