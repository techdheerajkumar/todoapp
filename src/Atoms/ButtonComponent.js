import React, {Component} from 'react';

class ButtonComponent extends Component{
    render(){
        return (
            <button className = "btn btn-info" onClick = {this.props.click}>{this.props.buttonName}</button>
        )
    }
}

export default ButtonComponent;