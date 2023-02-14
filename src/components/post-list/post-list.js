import React, { Component } from "react";
import PostListItem from "../post-list-item";
import "./post-list.css"

export default function PostList ({deleteEvent,  onToggleImportant,  onToggleLike, posts}) {
   
         
    const elements = posts.map(item => {
        
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





