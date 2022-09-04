import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>
            <div className="header-right">
                <Avatar src=""/>
                <h4>DONIA SKIMA</h4>
            </div>
        </div>
    )
}

export default Header