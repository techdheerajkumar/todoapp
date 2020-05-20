import React, { Component } from 'react';
import ButtonComponent from '../Atoms/ButtonComponent';
import InputElement from '../Atoms/InputComponent';

class EnterFieldComponent extends Component {
   
    render() {
        return (
            <div className="todo-data">
                <InputElement
                    change = {this.props.LogicChange}
                    inputVal = {this.props.inputValue}
                />
                <ButtonComponent
                    click={this.props.LogicClick}
                    buttonName="Add"
                />    
            </div>
        )
    }
}

export default EnterFieldComponent;