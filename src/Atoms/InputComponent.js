import React, { Component } from 'react';

class InputComponent extends Component {
    render() {
        return (
            <input
                type="text"
                placeholder="Enter a todo" 
                className="input input-group-text" 
                onChange = {this.props.change}
                value = {this.props.inputVal}
                />
        )
    }
}

export default InputComponent;