import { Bookmark, Event, Group, HelpOutline, PlayCircleFilledOutlined, Storefront, WorkOutline } from '@material-ui/icons'
import './Sidebar.css'

export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarItems">
              
            <li className="sidebarItem">
              <Group className="sidebarIcon" />
              <span className="sidebarText">Groups</span>
            </li>
            <li className="sidebarItem">
              <Storefront className="sidebarIcon" />
              <span className="sidebarText">Market</span>
            </li>
            <li className="sidebarItem">
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarText">Video</span>
            </li>
            <li className="sidebarItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarText">Bookmarks</span>
            </li>
            <li className="sidebarItem">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarText">FAQ</span>
            </li>
            <li className="sidebarItem">
              <Event className="sidebarIcon" />
              <span className="sidebarText">Events</span>
            </li>
            <li className="sidebarItem">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarText">Jobs</span>
            </li>
          </ul>
        </div>
      </div>
    );
}
