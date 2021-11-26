import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import './comments.css';

const Comments = (props) => {
    const [picture, setPicture] = useState([])
    useEffect(() => {
        fetch('https://randomuser.me/api/?inc=picture')
            .then((response) => response.json())
            .then(data => {
                setPicture(data.results)
            });
    }, [])

    const { name, email, body } = props.comment;

    return (
        <div className="comment-container">
            <div className="header-section">
                <div>
                    {
                        picture.map(pic => <Avatar key={pic.picture.large} alt="#" src={pic.picture.large} />)
                    }
                </div>
                <div>
                    <Box sx={{ fontWeight: 'medium', mt: -2.4, mx: 1.5 }}><p>{name}</p></Box>
                    <Box sx={{ fontWeight: 'light', fontSize: 15, mt: -1.5, mx: 1.5 }}><p>{email}</p></Box>
                </div>
            </div>
            <p>{body}</p>
        </div>
    );
};

export default Comments;