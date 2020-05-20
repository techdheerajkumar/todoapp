import React, {Component} from 'react';
import HeadingOne from '../Atoms/PageHeadingComponent';
import LogicComponent from '../Molecules/LogicComponent'
class TodoComponent extends Component{
    render(){
        return (
            <div>
                <HeadingOne title = 'Todo App' />
                <LogicComponent />
            </div>
        )
    }
}
export default TodoComponent;