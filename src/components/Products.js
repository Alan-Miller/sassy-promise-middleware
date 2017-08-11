import React, { Component } from 'react';
import { updateTabColor } from '../ducks/reducer';
import { connect } from 'react-redux';

class Products extends Component {
    constructor() {
        super()

        this.state = {}
    }

    componentDidMount() {
        this.props.updateTabColor("orange");
    }

    render() {
        return (
            <section className="Products_section">
                Products
            </section>
        )
    }
}

let outputActions = {
    updateTabColor
}

export default connect( null, outputActions )( Products );