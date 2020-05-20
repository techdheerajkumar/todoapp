import React, { Component } from 'react';
import EnterField from '../Molecules/EnterFieldComponent';
import ListComponent from '../Molecules/ListComponent';

class LogicComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            currentItem: {
                text: "",
                id: ""
            },
            inputVal: ""
        }
        this.deleteItemHandler = this.deleteItemHandler.bind(this)
    }
 
    changeHandler = (e) => {
        this.setState({
            ...this.state.currentItem,
            currentItem: {
                text: e.target.value,
                id: Date.now()
            },
            inputVal: e.target.value
        })
    }
    getValueHandler = () => {
        if (this.state.inputVal !== "") {
            const text = this.state.currentItem;
            this.setState({
                itemList: [...this.state.itemList, text],
                inputVal: "",

            });
        }
    }
    deleteItemHandler = (key)=>{
      const demo = this.state.itemList.filter(item =>{
           return item.id !== key
        });
        this.setState({
            itemList : demo
        })
    }
    render() {
        return (
            <div className="logic container">
                <div className="col-sm-12">
                    <EnterField
                        LogicChange={this.changeHandler}
                        LogicClick={this.getValueHandler}
                        inputValue={this.state.inputVal}
                    />
                </div>
                <div className="col-sm-12 list-container">
                    <ListComponent
                        todoList={this.state.itemList}
                        click = {this.deleteItemHandler}
                    />
                </div>
            </div>
        )
    }
}
export default LogicComponent;