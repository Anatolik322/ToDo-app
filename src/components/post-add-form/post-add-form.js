import React, { useState } from "react";

import "./post-add-form.css"

export default function PostAddForm ({onAdd}){
    
    const [text, setText] = useState('')
    

    const onValueChange = e => {
       setText(e.target.value) 
    }

    const onSubmit = event => {
        console.log(event);
        event.preventDefault();
        onAdd(text);
        setText('')
    }
 
    return(
        <form 
        className="bottom-panel d-flex"
        onSubmit={onSubmit}
        >
        
            <input
            type="text"
            placeholder="нова нотатка"
            className="form-control new-post-label"
            onChange={onValueChange}
            value={text}
            />
            <button
            type="submit"
            className="btn btn-outline-secondary"
            >
                додати
            </button>
        </form>
    )
}

