import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);

    return (
        <div>
            <h4>Post Title: {postDetail.title}</h4>
            <h4>Post:  {postDetail.body}</h4>
            <h3>Comments</h3>
            {
                comments.map( cm => <Comments key={cm.id} comment={cm}></Comments>)
            }
        </div>
    );
};

export default PostDetail;