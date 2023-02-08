import React, { Component } from "react";
import PostListItem from "../post-list-item";
import "./post-list.css"

export default class PostList extends Component {
    render(){
        const {deleteEvent,  onToggleImportant,  onToggleLike, posts} = this.props;
         
        const elements = posts.map(item => {
            //console.log(this.props.posts);
            return(

                <li key={item.id} className="list-group-item">
                   
                    <PostListItem
                    {...item}
                    deleteEvent = {() => deleteEvent(item.id)}
                    onToggleImportant = {() => onToggleImportant(item.id)}
                    onToggleLike = {() => onToggleLike(item.id)}
                    />
                </li>
            )
        })

        return(
            <ul className="app-list list-group">
            {Object.assign([], elements)}
            
            </ul>
        )
    }
}





