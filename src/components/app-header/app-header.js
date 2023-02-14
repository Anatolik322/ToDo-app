import React from "react";
import "./app-header.css"

const AppHeader = ({liked, allElements}) => {
    
    return(
        <div className="app-header d-flex">
            <h1>Name Surname</h1>
            <h2>{allElements} нотаток, сподобались {liked}</h2>
        </div>
    )
}

export default AppHeader;