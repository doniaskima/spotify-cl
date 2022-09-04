import React from 'react'
import "./Player.css";
import { Sidebar } from '../Sidebar/Sidebar';
import Body from './Body/Body';
import Footer from '../Footer/Footer';

const Player = ({ spotify }) => {
    return (
        <div>
            <div className="player">
                <div className="body-player">
                    <Sidebar />
                    <Body/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Player