import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = (props) => {
    const {id, title} = props.post;
    return (
        <div className="post-style">
            <h3>Title: {title} </h3>
            <Link to={`/post-detail/${id}`}>
                <Button style={{marginBottom: '10px'}} variant="contained" color="primary">See More</Button>
            </Link>
            
        </div>
    );
};

export default Post;