import Posts from "../posts/Posts";
import Share from "../share/Share";
import "./Feed.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";


export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot)=> 
      setPosts(snapshot.docs.map(doc => doc.data())))
   
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
          <Share />
      
        {posts.map(({id, profilePic, message, timestamp, username, image, comment}) => (
          <Posts
            key={id}
            profilePic={profilePic}
            message={message}
            timestamp={timestamp}
            username={username}
            image={image}
            comment={comment}
          />
        ))}
      </div>
    </div>
  );
}



