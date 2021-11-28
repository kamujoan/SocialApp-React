import { Avatar } from '@material-ui/core';
import { Label, PermMedia, Room, Videocam } from '@material-ui/icons';
import React from 'react'
import './Share.css'

export default function Share() {
    return (
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <Avatar />
            <form>
              <input
                placeholder="Post something here..."
                className="shareInput"
              />
              <input placeholder="Post image Url" className="shareInput" />
              <button className="shareButton">Share</button>
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
