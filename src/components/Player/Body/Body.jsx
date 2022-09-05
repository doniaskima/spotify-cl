import React from 'react'
import { useStateValue } from '../../../StateProvider';
import "./Body.css";
import Header from "./Header/Header"
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow/SongRow';
const Body = ({ spotify }) => {

    const [{ dicover_weekly }, dispatch] = useStateValue()
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body-info">
                <img src={dicover_weekly?.images[0].url} alt="" className="spotify" />
                <div className="info-text">
                    <strong>PLAYLISTS</strong>
                    <h2>Discover WEEKLY</h2>
                    <p>{dicover_weekly?.description}</p>
                </div>
            </div>
            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilledIcon className="PlayCircleFilledIcon" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {/* list of songs */}
                {dicover_weekly?.tracks.items.map(item => {
                    <SongRow track={item.track} />
                })}
            </div>
        </div>


    )
}

export default Body