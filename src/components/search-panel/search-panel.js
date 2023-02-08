import React, { Component } from "react";
import "./search-panel.css"

export default class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
        this.onFormChange = this.onFormChange.bind(this);
    }

    onFormChange(e){
        const term = e.target.value;
        this.setState({term: term});
        this.props.onFormChange(term);
    }

    render(){
        return(
            <input className="form-control search-input"
            type='text'
            placeholder="search in todos"
            onChange={this.onFormChange}
            />
            
            
        )
}

}

