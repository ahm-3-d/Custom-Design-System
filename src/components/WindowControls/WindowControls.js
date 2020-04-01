import React, { Fragment } from "react";
import PropTypes from "prop-types";

import './WindowControls.css';

const OSXControls = ({ onClose, onSizeChange, onMinimise }) => (
    <div class='focus'>
        <div class="traffic-lights">
            <button class="traffic-light traffic-light-close" id="close" onClick={onClose}></button>
            <button class="traffic-light traffic-light-minimize" id="minimize" onClick={onMinimise} ></button>
            <button class="traffic-light traffic-light-maximize" id="maximize" onClick={onSizeChange}></button>
        </div>
    </div>
);

const WindowOSControls = ({ onClose, onSizeChange, onMinimise }) => (
    <div class='wc'>
        <div class="minimize" id="minimize"></div>
        <div class="maximize" id="maximise"></div>
        <div class="close" id="close"></div>
    </div>
)

function WindowControls({ type, onClose, onSizeChange, onMinimise, ...rest }) {
    return (
        <Fragment>
            {
                type === 'windows' && <WindowOSControls onClose={onClose} onSizeChange={onSizeChange} onMinimise={onMinimise} />
            }
            {
                type === 'osx' && <OSXControls onClose={onClose} onSizeChange={onSizeChange} onMinimise={onMinimise} />
            }
        </Fragment>
    )
};

WindowControls.propTypes = {
    type: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onSizeChange: PropTypes.func.isRequired,
    onMinimise: PropTypes.func.isRequired
};

export default WindowControls;