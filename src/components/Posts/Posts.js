import React from 'react';
import './Posts.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

const Posts = (props) => {


    let navigate = useNavigate();
    const { userId, title, id } = props.posts;
    // const url = `https://randomuser.me/api/portraits/thumb/men/${userId}.jpg`;

    const handleSeeMore = () => {
        const url = `/post/${id}`;
        navigate(url);
    }

    return (
        <div className="posts-container">
            <h3>User Id: {userId}</h3>
            <p>Title: {title} </p>
            <Button onClick={handleSeeMore} variant="contained">See More</Button>
        </div>
    );
};

export default Posts;