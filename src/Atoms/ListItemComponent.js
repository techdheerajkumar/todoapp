import React,{Component} from 'react';

class ListItemComponent extends Component{
    render(){
        return(
            <p>{this.props.data}</p>
        )
    }
}

export default ListItemComponent;