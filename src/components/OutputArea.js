import React, { Component } from 'react';

class OutputArea extends Component {
    render() {
        var outputStyle= {

        };
        return (
            <div style={outputStyle}>
                {this.props.excuse}
            </div>
        );
    }
}

export default OutputArea;
