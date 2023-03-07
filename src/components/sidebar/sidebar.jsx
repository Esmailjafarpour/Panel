import "./sidebar.css";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MessageIcon from '@mui/icons-material/Message';
import ReportIcon from '@mui/icons-material/Report';
import WorkIcon from '@mui/icons-material/Work';





function Sidebar() {
    return (
      <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem active">
                            <LineStyleIcon className="sidebarIcon"/>
                            Home
                        </li>
                        

                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon"/>
                            Sales
                        </li>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                            <PermIdentityIcon className="sidebarIcon"/>
                            Users
                        </li>
                        

                        <li className="sidebarListItem">
                            <StorefrontIcon className="sidebarIcon"/>
                            Products
                        </li>

                        <li className="sidebarListItem">
                            <MonetizationOnIcon className="sidebarIcon"/>
                            Transactions
                        </li>

                        <li className="sidebarListItem">
                            <EqualizerIcon className="sidebarIcon"/>
                            Reports
                        </li>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                            <MailOutlineIcon className="sidebarIcon"/>
                            Mail
                        </li>
                        

                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcon"/>
                            Feedback
                        </li>

                        <li className="sidebarListItem">
                            <MessageIcon className="sidebarIcon"/>
                            Messages
                        </li>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                            <WorkIcon className="sidebarIcon"/>
                            Manage 
                        </li>
                        

                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <ReportIcon className="sidebarIcon"/>
                            Report
                        </li>

                    </ul>
                </div>

                

            </div>
      </div>
    );
  }
  
  export default Sidebar;