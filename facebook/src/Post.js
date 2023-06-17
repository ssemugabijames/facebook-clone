import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";


function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="Post">
        <div className="post__top">
            <Avatar src={profilePic} className="post_topInfo" />
            <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
      <div className="  ">
      <p>{message}</p>
      </div>
      <div className="post__image">
      <img src={image} alt="" />
      </div>
      <div className="post__options">
      <div className="post__options">
        <ThumbUpIcon />
        <p>Like</p>
      </div>
      <div className="post__options">
        <ChatBubbleOutlineIcon />
        <p>Comment</p>
      </div>
      <div className="post__options">
        <NearMeIcon />
        <p>Share</p>
      </div>
      
      </div>
    </div>
  )
}

export default Post