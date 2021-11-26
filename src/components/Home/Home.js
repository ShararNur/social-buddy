import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import logo from '../../images/download (1).png';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);

    // console.log(posts)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, [])

    return (
        <div>
            <Link to="/post"><img src={logo} alt="" /></Link>
            {
                posts.map(post => <Posts key={post.id} posts={post}></Posts>)
            }
        </div>

    );
};

export default Home;