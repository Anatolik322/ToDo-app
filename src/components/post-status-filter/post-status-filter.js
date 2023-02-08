import React from "react";
import { Button } from "reactstrap";
import "./post-status-filter.css"
const PostStatusFilter = ({onFilterSelect}) => {
    return(
        <div className="btn-group">
            <Button onClick={() => onFilterSelect('all')} color="info"> All</Button>
            <button className="btn btn-outline-secondary"
            onClick={() => onFilterSelect('like')}>Liked</button>
        </div>
    )
}

export default PostStatusFilter;