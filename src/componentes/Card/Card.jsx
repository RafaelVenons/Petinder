import React from "react";
import { AreaCard, CardImg, DialogPet, LevantaCard } from "./style.js";
import Like from "../../assets/okay.png";
import DisLike from "../../assets/not_ok.png";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

function Card(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!props.pet) {
    console.log("n tem card");
    return <></>;
  } else if (props.lastLike === 1) {
    console.log("Card do like");
    return (
      <div>
        <AreaCard onClick={handleClickOpen}>
        <LevantaCard>
          <img src={Like} alt="like" />
        </LevantaCard>
        <CardImg largura={props.largura} src={props.pet.url} />
        </AreaCard>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Menu do Pet`}</DialogTitle>
        <DialogContent>
          <DialogPet src={props.pet.url} alt="Pet selecionado"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Adicionar ao perfil
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  } else if (props.lastLike === -1) {
    console.log("Card do dislike");
    return (
      <div>
        <AreaCard onClick={handleClickOpen}>
        <LevantaCard>
          <img src={DisLike} alt="Dislike" />
        </LevantaCard>
        <CardImg largura={props.largura} src={props.pet.url} />
        </AreaCard>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Menu do Pet`}</DialogTitle>
        <DialogContent>
          <DialogPet src={props.pet.url} alt="Pet selecionado"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Adicionar ao perfil
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  } else {
    console.log("Default");
    return <CardImg largura={props.largura} src={props.pet.url} />;
  }
}

export default Card;

/* const [card, setCard] = useState({});
const [idAnterior, setIdAnterior ] = useState('');
useEffect(() => {
    if(card === {} || props.id === ''){
        fetch(`https://api.thedogapi.com/v1/images/search`)
        .then(resposta => resposta.json())
        .then(dogs => dogs[0])
        .then(dog => {
            console.log(dog);
            setCard(dog);
        })    
    }else if(props.id && props.id !== idAnterior){
        fetch(`https://api.thedogapi.com/v1/images/${props.id}`)
        .then(resposta => resposta.json())
        .then(dog => {
            console.log(dog);
            setIdAnterior(props.id);
            setCard(dog);
        })
    }
},[idAnterior, props.id]);

 */

/* 
                <CardTemplate largura={props.largura} small={props.small}>
                <CardName small={props.small}><CardPropt>Nome:</CardPropt> {card.breeds[0].name}</CardName>
                <CardItem><CardPropt>Peso:</CardPropt> {card.breeds[0].weight.metric}Kg</CardItem>
                <CardItem><CardPropt>Altura:</CardPropt> {card.breeds[0].height.metric}cm</CardItem>
                <CardItem><CardPropt>Tempo de vida:</CardPropt> {card.breeds[0].life_span}</CardItem>
                <CardItem><CardPropt>Criado para:</CardPropt> {card.breeds[0].bred_for}</CardItem>
                <CardItem><CardPropt>Grupo Racial:</CardPropt> {card.breeds[0].breed_group}</CardItem>
                <CardItem><CardPropt>Temperamento:</CardPropt> {card.breeds[0].temperament}</CardItem>
                </CardTemplate>*/
