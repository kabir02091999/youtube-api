import React from 'react';
import SideBarRow from './../sideBarRow/SideBarRow';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Sidebar = () => {
    return ( <div className='sidebar'>

        <SideBarRow selected Icon={HomeIcon} title='Home' />
        <SideBarRow Icon={WhatshotIcon} title='trending'/>
        <SideBarRow Icon={SubscriptionsIcon} title='subscription'/>
        <hr/>
        <SideBarRow Icon={VideoLibraryIcon} title='library'/>
        <SideBarRow Icon={HistoryIcon} title='History'/>
        <SideBarRow Icon={OndemandVideoIcon} title='Your videos'/>
        <SideBarRow Icon={WatchLaterIcon} title='watch later'/>
        <SideBarRow Icon={ThumbUpIcon} title='liked vides'/>

    </div> );
}
 
export default Sidebar;