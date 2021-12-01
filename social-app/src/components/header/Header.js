import "./Header.css";
import { Home, Message, Notifications, Search,  Person } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Header() {

  let user = JSON.parse(localStorage.getItem("user"));
  return (
      <div className="header">
        <div className="headerLeft">
          <h3 className="logo">Kamu</h3>
          <div className="searchBar">
            <Search className="searchIcon" />
            <input placeholder="Search..." className="searchInput" />
          </div>
        </div>
        <div className="headerCenter">
          <div className="headerLinks">    
            <IconButton>
              <Link className='headerLink' to="/">
              <Home />
              <h6>Home</h6>
              </Link>
            </IconButton>

            <IconButton>
              <Link className='headerLink' to="/profile">
              <Person />
              <h6>Profile</h6>
              </Link>
            </IconButton>

            <IconButton>
              <Link className='headerLink' to="/messages">
              <Message/>
              <h6>Message</h6>
              </Link>
            </IconButton>

            <IconButton>
              <Link className='headerLink' to="/#">
              <Notifications />
              <h6>Notifications</h6>
              </Link>
            </IconButton>
          </div>
        </div>
        <div className="headerRight">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
          <Link className='loginLink' to='/Login'>
          SignOut
          </Link>
        </div>
       
        
      </div>
  );
}


