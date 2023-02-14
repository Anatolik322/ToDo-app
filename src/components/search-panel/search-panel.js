import React, { useState } from "react";
import "./search-panel.css"

export default function SearchPanel({onnFormChange}){
   
    const [term, setTerm] = useState('');

    const onFormChange = e => {
        const term = e.target.value;
        setTerm(term);
        onnFormChange(term);
    }

    
    return(
        <input className="form-control search-input"
        type='text'
        placeholder="пошук в нотатках"
        onChange={onFormChange}
        />
          
    )
}



