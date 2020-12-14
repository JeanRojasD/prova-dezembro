import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import notfound from '../../assets/images/notfound.png'
import './index.css'

function Notfound() {
  return (
    <div className="notfound">
      <Header />
      <div className="notfound-content">
        <img src={notfound} alt="notfound"></img>
        <h2> Essa pagina não existe</h2>
        <p>Clique no botão abaixo para voltar a landing page</p>
        <Link to="/">
          <Button variant="contained" color="primary" disableElevation> Retorne a Ladingpage </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Notfound;
