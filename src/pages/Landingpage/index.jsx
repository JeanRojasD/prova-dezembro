import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Listmap from '../../components/Listmap'
import Moremusics from '../../components/Moremusics'
import Button from '@material-ui/core/Button'
import './index.css'

function App() {

  const [yes, setYes] = useState(false);

  return (
    <div className="landing">
      <Header />
      <div className="landing-content">
        <div className="landing-text">
          <h2>GREEN DAY</h2>
        </div>
        <div>
          {yes && (
            <div className="landing-map">
              <h3>Algumas Músicas:</h3>
              <Listmap />
              <Moremusics />
            </div>
          )}
          {!yes && (
            <div className="landing-map">
              <h3>Deseja ver a lista de músicas?</h3>
              <Button onClick={() => setYes(!yes)} variant="contained" color="primary">Sim</Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
