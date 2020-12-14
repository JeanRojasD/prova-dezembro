import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '@material-ui/core/Button'
import './index.css'

function Register() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  function Greenforms(event) {

    const register = {
      nome: nome,
      email: email,
      telefone: telefone,
      nascimento: nascimento,
      checkbox: checkbox
    };

    console.log(register);

    event.preventDefault();
  }
  return (
    <div className="register">
      <Header />
      <div className="register-content">
        <div className="register-box">
          <div className="register-text">
            <h3>Registre-se</h3>
            <p>Para ficar por dentro de novas musicas</p>
          </div>
          <form className="register-form" onSubmit={Greenforms}>
            <label>
              Nome
              <input onChange={event => setNome(event.target.value)} type="text" value={nome} />
            </label>
            <label>
              Email
              <input onChange={event => setEmail(event.target.value)} type="email" value={email} />
            </label>
            <label>
              Telefone
              <input onChange={event => setTelefone(event.target.value)} type="tel" value={telefone} />
            </label>
            <label>
              Data de nascimento
              <input onChange={event => setNascimento(event.target.value)} type="date" value={nascimento} />
            </label>
            <div className="register-check">
              <label>
                Deseja receber novidades?
                <input onChange={event => setCheckbox(event.target.value)} type="checkbox" name="subscribe" value={!checkbox} />
              </label>
            </div>
            <Button type="submit" value="submit" variant="contained" color="primary" disableElevation> Registrar </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Register;
