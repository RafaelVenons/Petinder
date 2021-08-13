import React from "react";
import { AreaCard, CardImg, LevantaCard, DialogPet, PetProp, PetItem } from "./style.js";
import Like from "../../assets/okay.png";
import DisLike from "../../assets/not_ok.png";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useContext } from "react";
import InformacoesUsuario from "../../contexts/InformacoesUsuario.jsx";

function Card(props) {
  const [open, setOpen] = React.useState(false);

  const infoUser = useContext(InformacoesUsuario);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChangeImg = () => {
    localStorage.setItem("UserImg", props.pet.url)
    infoUser.setURLUser(props.pet.url);
    setOpen(false);
  };

  if (!props.pet) {
    return <></>;
  } else if (props.lastLike) {
    return (
      <>
        <AreaCard onClick={handleClickOpen}>
          <LevantaCard>
            {props.lastLike === 1 ? (
              <img src={Like} alt="like" />
            ) : (
              <img src={DisLike} alt="Dislike" />
            )}
          </LevantaCard>
          <CardImg largura={props.largura} src={props.pet.url} />
        </AreaCard>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {props.pet.breeds.length ? props.pet.breeds[0].name : `Menu do Pet`}
          </DialogTitle>
          <DialogContent>
            <DialogPet src={props.pet.url} alt="Pet selecionado" />
            <DialogContentText>
              {props.pet.breeds.length ? (
                <>
                  <PetItem><PetProp>Peso:</PetProp> {props.pet.breeds[0].weight.metric}Kg</PetItem>
                  <PetItem><PetProp>Altura:</PetProp> {props.pet.breeds[0].height.metric}cm</PetItem>
                  <PetItem><PetProp>Tempo de vida:</PetProp> {props.pet.breeds[0].life_span}</PetItem>
                  <PetItem><PetProp>Criado para:</PetProp> {props.pet.breeds[0].bred_for}</PetItem>
                  <PetItem><PetProp>Grupo Racial:</PetProp> {props.pet.breeds[0].breed_group}</PetItem>
                  <PetItem><PetProp>Temperamento:</PetProp> {props.pet.breeds[0].temperament}</PetItem>
                </>
              ) : (
                <p>Não temos informação desse Cachorro :(</p>
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleChangeImg} color="primary">
              Adicionar ao perfil
            </Button>
            <Button onClick={handleClose} color="primary">
              Excluir
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  } else {
    return (
      <>
        <AreaCard onClick={handleClickOpen}>
          <CardImg largura={props.largura} src={props.pet.url} />
        </AreaCard>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {props.pet.breeds.length ? props.pet.breeds[0].name : `Menu do Pet`}
          </DialogTitle>
          <DialogContent>
            <DialogPet src={props.pet.url} alt="Pet selecionado" />
            <DialogContentText>
              {props.pet.breeds.length ? (
                <>
                  <PetItem><PetProp>Peso:</PetProp> {props.pet.breeds[0].weight.metric}Kg</PetItem>
                  <PetItem><PetProp>Altura:</PetProp> {props.pet.breeds[0].height.metric}cm</PetItem>
                  <PetItem><PetProp>Tempo de vida:</PetProp> {props.pet.breeds[0].life_span}</PetItem>
                  <PetItem><PetProp>Criado para:</PetProp> {props.pet.breeds[0].bred_for}</PetItem>
                  <PetItem><PetProp>Grupo Racial:</PetProp> {props.pet.breeds[0].breed_group}</PetItem>
                  <PetItem><PetProp>Temperamento:</PetProp> {props.pet.breeds[0].temperament}</PetItem>
                </>
              ) : (
                <p>Não temos informação desse Cachorro :(</p>
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleChangeImg} color="primary">
              Adicionar ao perfil
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default Card;