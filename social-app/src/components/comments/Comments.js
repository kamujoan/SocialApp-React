import { Avatar } from "@material-ui/core";
import './Comments.css'


const Message = ({ profilePic, text, username }) => {
    return (
      <div>
             <div className='user'>
              <Avatar src={profilePic} className='avatar'/>
              <h5>{username}</h5>
              </div>
              <div className='text'>
              <p>{text}</p>
          </div>
      </div>
    );
}

export default Message;