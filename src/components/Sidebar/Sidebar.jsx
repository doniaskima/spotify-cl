import React from 'react'
import "./Sidebar.css";
import SidebarOp from "./SidebarOp/SidebarOp"
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <img
                className="sidbar-logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOp title="Home" Icon={HomeIcon}/>
            <SidebarOp title="Search" Icon={SearchIcon}/>
            <SidebarOp title="Your Library" Icon={LibraryMusicIcon}/>
                  
            <strong className="sidebar-title">PLAYLSTS</strong>
        <hr/>
         <SidebarOp title="Hip hop" />
         <SidebarOp title="Rock" />
         <SidebarOp title="RnB" />
        
         
        </div>
    )
}
