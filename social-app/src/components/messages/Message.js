import { Avatar } from "@material-ui/core";
import "./messages.css";
import {auth} from '../../firebase'


const Message = ({ profilePic, text, }) => {
  const {uid} = auth.currentUser;
    return (
      <div className={uid ? 'sent' : 'received'}>
              <div className='msg'>
              <Avatar src={profilePic}/>
              <p className='msgText'>{text}</p>
      </div>
      </div>
    );
}

export default Message;