import React from "react";
import "./app-header.css"

const AppHeader = ({liked, allElements}) => {
    
    return(
        <div className="app-header d-flex">
            <h1>Name Surname</h1>
            <h2>{allElements} todos, you like {liked}</h2>
        </div>
    )
}

export default AppHeader;