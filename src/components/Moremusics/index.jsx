import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import './index.css'

function Moremusics() {
    const [yes, setYes] = useState(false);
    return (
        <div className="moremusic">
            <h3>Deseja ouvir essas músicas?</h3>
            {yes && (
                <div className="userasset">
                    <p>Acesse no Youtube: <a href="https://www.youtube.com/c/GreenDay/videos" target="_blank" rel="noreferrer">Green Day</a></p>
                </div>
            )}
            {!yes && (
                <Button onClick={() => setYes(!yes)} variant="contained" color="primary">Sim</Button>
            )}
        </div>
    );
}

export default Moremusics;