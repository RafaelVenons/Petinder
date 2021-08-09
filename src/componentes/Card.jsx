import React from 'react';
import { CardImg, LevantaCard, CardSpace} from '../styles/CardStyle';
import Like from '../assets/okay.png'
import DisLike from '../assets/not_ok.png'

function Card(props){
    if(!props.pet){
        console.log("n tem card");
        return(<></>)
    } else if(props.lastLike === 1){
        console.log("Card do like");
        return(
            <CardSpace>
                <LevantaCard><img src={Like} alt="Like"/></LevantaCard>
                <CardImg largura={props.largura} src={props.pet.url}/>
            </CardSpace>
        )
    }else if(props.lastLike === -1){
        console.log("Card do dislike");
        return(
            <CardSpace>
                <LevantaCard><img src={DisLike} alt="Dislike"/></LevantaCard>
                <CardImg largura={props.largura} src={props.pet.url}/>
            </CardSpace>
        )
    }else{
        console.log("Default");
        return <CardImg largura={props.largura} src={props.pet.url}/>;
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