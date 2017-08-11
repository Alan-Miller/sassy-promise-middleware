import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <nav className="Header_nav">
                <ul className="Header_ul">
                    <span className={this.props.color === 'blue' ? null : 'shadow'}>
                        <Link to="/"><li>Home</li></Link>
                    </span>
                    <span className={this.props.color === 'red' ? null : 'shadow'}>
                        <Link to="/profile"><li>Profile</li></Link>
                    </span>
                    <span className={this.props.color === 'orange' ? null : 'shadow'}>
                        <Link to="/products"><li>Products</li></Link>
                    </span>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    if (!state) return {};
    return {
        color: state.color
    }
}

export default connect( mapStateToProps )( Header );