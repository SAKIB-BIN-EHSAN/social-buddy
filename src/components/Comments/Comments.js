import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = (props) => {
    const {email, body} = props.comment;
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => setUserInfo(data.results[0].picture.medium))
    }, []);

    const imageStyle = {
        border: '1px solid gray',
        height: '40px',
        borderRadius: '50px',
        marginRight: '10px'
    }
    return (
        <div className="comment">
            <div className="comment-image">
                <img style={imageStyle} src={userInfo} alt=""/>
                <p>{email}</p>
            </div>
            <div className="comment-body">
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Comments;