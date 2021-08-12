import React, { useState, useContext } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import { UsuarioApresentacao, UsuarioImg, UserName, Name, Pq } from "./style.js";
import InformacoesUsuario from "../../contexts/InformacoesUsuario.jsx"

function User() {
  const [novoNome, setNovoNome] = useState('');
  const [novaDesc, setNovaDesc] = useState('');
  
  const infoUser = useContext(InformacoesUsuario);

  function handledForm(event) {
    event.preventDefault();
    if (novoNome !== ''){
      localStorage.setItem('Nome', novoNome);
      infoUser.setNome(novoNome);
      setNovoNome('');
    }
    if (novaDesc !== ''){
      localStorage.setItem('Desc', novaDesc);
      infoUser.setDesc(novaDesc);
      setNovaDesc('');
    }
  }

  return (
    <Container maxWidth="sm">
      <UsuarioApresentacao>
        <UsuarioImg src={infoUser.URLUser}/>
        <UserName>
          <Name>{infoUser.nome}</Name>
          <Pq>{infoUser.desc}</Pq>
        </UserName>
      </UsuarioApresentacao>
      <form onSubmit={handledForm}>
        <TextField
        value={novoNome}
          onChange={(e) => {
            setNovoNome(e.target.value);
          }}
          id="novo_nome"
          label="Nome de Usuario"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={novaDesc}
          onChange={(e) => {
            setNovaDesc(e.target.value);
          }}
          id="nova_desc"
          label="Porque estou no Petinder?"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Atualizar
        </Button>
      </form>
    </Container>
  );
}

export default User;
