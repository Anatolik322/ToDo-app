import React from "react";
import { Button } from "reactstrap";
import "./post-status-filter.css"

const PostStatusFilter = ({onFilterSelect}) => {
    return(
        <div className="btn-group">
            <Button onClick={() => onFilterSelect('all')} color="info"> Всі</Button>
            <button className="btn btn-outline-secondary"
            onClick={() => onFilterSelect('like')}>Вподобані</button>
        </div>
    )
}

export default PostStatusFilter;