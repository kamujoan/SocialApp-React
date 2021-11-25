import "./Header.css";
import { Home, Message, Notifications, People, Search, Group, Storefront } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

export default function Header() {
  return (
    <>
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
              <Home />
              <h6>Home</h6>
            </IconButton>
            <IconButton>
              <People />
              <h6>Network</h6>
            </IconButton>
            <IconButton>
              <Message />
              <h6>Message</h6>
            </IconButton>
            <IconButton>
              <Notifications />
              <h6>Notifications</h6>
            </IconButton>
          </div>
        </div>
        <div className="headerRight">
          <Avatar />
          <h4>Kamu Joan</h4>
          <span>SignOut</span>
        </div>
      </div>
    </>
  );
}
