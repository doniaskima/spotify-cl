import React from 'react'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "./Footer.css"
import { Grid, Slider } from '@material-ui/core';
const Footer = () => {
    return (
        <div className="footer">
            <div className="left-footer">

                <img src="https://i.discogs.com/U0T_B3kevdWIO51S3L_MhLUl2_9msxQpeAE9kmXUHGs/rs:fit/g:sm/q:90/h:658/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIzNjU3/MDEtMTYyOTI3OTU0/OS0yNTM3LmpwZWc.jpeg" alt="" className="album" />
                <div className="song">
                    <h4>songer:</h4>
                    <p>Maitre gims</p>
                </div>
            </div>
            <div className="center-footer">
                <ShuffleIcon className="green-footer" />
                <SkipPreviousIcon className="footer-icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer-icon" />
                <SkipNextIcon className="footer-icon" />
                <RepeatIcon className="green-footer" />
            </div>
            <div className="right-footer">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}

export default Footer