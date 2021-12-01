import { Avatar } from '@material-ui/core';
import { MoreVert, ThumbUp } from '@material-ui/icons';
import { useState } from 'react';
import CommentsFeed from "../comments/CommentsFeed";
import Backdrop from "../comments/Backdrop";
import './Posts.css'


export default function Posts({
  profilePic,
  message,
  timestamp,
  username,
  image,
  comment,
  like,
}) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false)

  const openComments = () => {
    setCommentsOpen(true)
  }

  const closeComments = () => {
    setCommentsOpen(false)
  }

  const likesCounter = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);

   
  };
  return (
    <div className="posts">
      <div className="postWrapper">
        <div className="postsTop">
          <div className="postsTopLeft">
            <Avatar src={profilePic} />
            <span className="postsUsername">{username}</span>
            <span className="postDate">
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
          </div>
          <div className="postsTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postsCenter">
          <span className="postsText">{message}</span>
          <img src={image} alt="" className="postsImg" />
        </div>
        <div className="postsBottom">
          <div className="postsBottomLeft">
            <ThumbUp
              htmlColor="gray"
              className="IconImg"
              onClick={likesCounter}
            />
            <span className="postsLikecounter">
              {likes}
              {like} Likes
            </span>
          </div>
          <div className="postsBottomRight">
            <div className="postsComment" onClick={openComments}>
              <span>{comment} Comments</span>
            </div>
          </div>
        </div>
      </div>
     
       {commentsOpen ? <CommentsFeed cancel={closeComments}/> : null}
       {commentsOpen ? <Backdrop cancel={closeComments}/> : null}
    </div>
  );
}
