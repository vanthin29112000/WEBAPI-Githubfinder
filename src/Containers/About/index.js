import React, { Component } from 'react';
import "./About.css"
class About extends Component {
    render() {
        return (
            <div className="about">
                <h2>This app is created by Van Thin
                    Search user in Github</h2>
                <p> Version: 1.0.0</p>
                <i class="far fa-check-circle"></i>
            </div>
        );
    }
}

export default About;