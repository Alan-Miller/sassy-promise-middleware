import React, { Component } from 'react';
import { updateTabColor } from '../ducks/reducer';
import { connect } from 'react-redux';

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }

    componentDidMount() {
        this.props.updateTabColor("blue");
    }

    render() {
        return (
            <section className="Home_section">
                HOME
            </section>
        )
    }
}

let outputActions = {
    updateTabColor
}

export default connect( null, outputActions )( Home );