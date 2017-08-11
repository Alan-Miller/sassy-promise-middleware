import React, { Component } from 'react';
import { updateTabColor } from '../ducks/reducer';
import { connect } from 'react-redux';

class Profile extends Component {
    constructor() {
        super()

        this.state = {}
    }

    componentDidMount() {
        this.props.updateTabColor("red");
    }

    render() {
        return (
            <section className="Profile_section">
                Profile
            </section>
        )
    }
}

let outputActions = {
    updateTabColor
}

export default connect( null, outputActions )( Profile );