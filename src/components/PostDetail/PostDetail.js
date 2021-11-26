import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './PostDetail.css';
import Box from '@mui/material/Box';
import Comments from '../Comments/Comments';
import logo from '../../images/download (1).png';
import { Link } from 'react-router-dom';


const PostDetail = () => {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [id])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setComments(data));
    }, [id])
    // console.log(comments);
    const { userId, title, body } = post;
    return (
        <div className="post-detail">
            <Link to="/post"><img src={logo} alt="" /></Link>
            <div className="post-detail-container">
                <h3>User Id: {userId}</h3>
                <Box sx={{ fontWeight: 'medium' }}><p>{title} ...</p></Box>
                <p>{body}</p>
            </div>
            <div>
                {
                    comments.map(comment => <Comments key={comment.id} comment={comment}></Comments>)
                }
            </div>
        </div>
    );
};

export default PostDetail;