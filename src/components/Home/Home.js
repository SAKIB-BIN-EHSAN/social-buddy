import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
        <div>
            {
                posts.map(ps => <Post key={ps.id} post={ps}></Post>)
            }
        </div>
    );
};

export default Home;