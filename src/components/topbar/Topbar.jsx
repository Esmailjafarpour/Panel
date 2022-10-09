import './Topbar.css';
import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import profile from '../../img/profile.jpg';

function Topbar() {
    return (
      <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topbarLeft">
                <span className="logo">left</span>
            </div>
            <div className="topbarRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon/>
                    <span className="topIconBadge">1</span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon/>
                </div>
                <img src={profile} alt="profile" className="topAvatar"/>
            </div>
            
        </div>
       
      </div>
    );
  }
  
  export default Topbar;