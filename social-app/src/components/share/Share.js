import { Avatar } from '@material-ui/core';
import { Label, PermMedia, Room, Videocam } from '@material-ui/icons';
import React from 'react'
import './Share.css'
import { useState } from 'react';
import { auth, db } from "../../firebase";
import firebase from 'firebase'



export default function Share() {
  const [input, setInput] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  let user = JSON.parse(localStorage.getItem("user"));

  async function handleSubmit(e) {
    e.preventDefault()

    const { displayName, photoURL } = auth.currentUser
    await db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: photoURL,
      username: displayName,
      image: imgUrl
    })
     setInput("")
    setImgUrl("")
    
  }
    return (
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <Avatar src={user.photoURL} />
            <form>
              <input value={input}
              onChange={(e)=> setInput(e.target.value)}
                placeholder={`Post something ${user.displayName}`}
                className="shareInput"
              />
              <input value={imgUrl}
              onChange={(e)=> setImgUrl(e.target.value)} placeholder="Post image Url" className="shareInput" />
              <button onClick={handleSubmit} type='submit' className="shareButton">Share</button>
            </form>
          </div>
          <hr className="shareHr"></hr>
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareInputText">Photo/Video</span>
              </div>
              <div className="shareOption">
                <Label htmlColor="blue" className="shareIcon" />
                <span className="shareInputText">Tag</span>
              </div>
              <div className="shareOption">
                <Room htmlColor="green" className="shareIcon" />
                <span className="shareInputText">Location</span>
              </div>
              <div className="shareOption">
                <Videocam htmlColor="crimson" className="shareIcon" />
                <span className="shareInputText">Live Video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
