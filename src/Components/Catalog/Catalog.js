import React, { Component } from 'react';

class Catalog extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { REDUX STATE ONCE CONNECTED };
    // }
    render() {
        return (
            <section id="item-shop">
                <header>
                    <h1>Seed Commerce</h1>
                </header>

                <h2>Click, Buy, Plant!</h2>
                <div id="item-wrapper">
                    <article className="items">item 1</article>
                    <article className="items">item 2</article>
                    <article className="items">item 3</article>
                    <article className="items">item 4</article>
                </div>
            </section>
        );
    }
}

export default Catalog;