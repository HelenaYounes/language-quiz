import React, { Component, PropTypes} from 'react';
import { string } from  'prop-types';
import Shuffle from 'react-shuffle';
import Card from './Card';
import Streak from './Streak';
import logo from './logo.svg';
import Choices from './Choices';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      dictionnary: [
        {
          spelling:"House",
          pair:"Une maison",
          definition:"Habitation"
        },
        {
          spelling:"Mouse",
          pair:"Une souris",
          definition:"little rongeur"
        },
        {
          spelling:"Carpet",
          pair:"Un tapis",
          definition:"rug"

        },
        {
          spelling:"Computer",
          pair:"Un ordinateur",
          definition:"laptop"

        },
        {
          spelling:"Flower",
          pair:"Une Fleur",
          definition:"plant"

        },
        {
          spelling:"Chair",
          pair:"Une chaise",
          definition:"piece of furniture to sit on"
        },
        {
          spelling:"Song",
          pair:"Une chanson",
          definition:"melody"
        },
        {
          spelling:"Cat",
          pair:"Un chat",
          definition:"miaw"
        },
        {
          spelling:"To eat",
          pair:"Manger",
          definition:"to Nourrish"
        },
        {
          spelling:"To drink",
          pair:"Boire",
          definition:"Absorb fluids"
        },
        {
          spelling:"To Walk",
          pair:"Marcher",
          definition:"Caminar"
        },
        {
          spelling:"A glass",
          pair:"Une Tasse",
          definition:"drink out of it"
        },
        {
          spelling:"Chicken",
          pair:"Un poulet",
          definition:"Pollo"
        },
        {
          spelling:"Tv remote",
          pair:"Une télécommande",
          definition:"glass box for fish"
        },
        {
          spelling:"Battery",
          pair:"Une Pile",
          definition:"glass box for fish"
        },
        {
          spelling:"Pen",
          pair:"Un stylo",
          definition:"glass box for fish"
        },
        {
          spelling:"Pencil",
          pair:"un Crayon",
          definition:"glass box for fish"
        },
        {
          spelling:"Paper",
          pair:"un papier",
          definition:"glass box for fish"
        },
        {
          spelling:"Keyboard",
          pair:"Un clavier",
          definition:"glass box for fish"
        },
        {
          spelling:"Drumset",
          pair:"Une batterie",
          definition:"glass box for fish"
        },
        {
          spelling:"Keyboard",
          pair:"Clavier",
          definition:"glass box for fish"
        },
        {
          spelling:"Purple",
          pair:"Violet",
          definition:"glass box for fish"
        },
        {
          spelling:"Red",
          pair:"Rouge",
          definition:"glass box for fish"
        },
        {
          spelling:"Blue",
          pair:"Bleu",
          definition:"glass box for fish"
        },
        {
          spelling:"Yellow",
          pair:"Jaune",
          definition:"glass box for fish"
        },
        {
          spelling:"Pink",
          pair:"Rose",
          definition:"glass box for fish"
        },
        {
          spelling:"Green",
          pair:"Vert",
          definition:"Verde"
        },
        {
          spelling:"Brown",
          pair:"Marron",
          definition:"glass box for fish"
        },
        {
          spelling:"Orange",
          pair:"Orange",
          definition:"glass box for fish"
        },
        {
          spelling:"Monkey",
          pair:"Un singe",
          definition:"glass box for fish"
        },
        {
          spelling:"elbow",
          pair:"Le coude",
          definition:"glass box for fish"
        },
        {
          spelling:"Orange",
          pair:"Orange",
          definition:"glass box for fish"
        },
        {
          spelling:"Nose",
          pair:"Un nez",
          definition:"glass box for fish"
        },
        {
          spelling:"Eye",
          pair:"Un oeil",
          definition:"glass box for fish"
        },
        {
          spelling:"Arm",
          pair:"Un bras",
          definition:"glass box for fish"
        },
        {
          spelling:"Leg",
          pair:"Une jambe",
          definition:"glass box for fish"
        },
        {
          spelling:"Foot",
          pair:"Un pied",
          definition:"glass box for fish"
        },
        {
          spelling:"Body",
          pair:"Un corps",
          definition:"glass box for fish"
        },
        {
          spelling:"Finger",
          pair:"Un doigt",
          definition:"glass box for fish"
        },
        {
          spelling:"Hand",
          pair:"Une main",
          definition:"glass box for fish"
        },
        {
          spelling:"Ankle",
          pair:"Cheville",
          definition:"glass box for fish"
        },
        {
          spelling:"Mouth",
          pair:"La bouche",
          definition:"glass box for fish"
        },
        {
          spelling:"Tongue",
          pair:"La langue",
          definition:"glass box for fish"
        },
        {
          spelling:"A frying pan",
          pair:"Une poêle",
          definition:"glass box for fish"
        },
        {
          spelling:"A pan (for pasta)",
          pair:"Une casserole",
          definition:"glass box for fish"
        },
        {
          spelling:"Glasses",
          pair:"Les lunettes",
          definition:"glass box for fish"
        },
        {
          spelling:"Holidays",
          pair:"Les vancances",
          definition:"Vacaciones"
        },
        {
          spelling:"Monday",
          pair:"Lundi",
          definition:"Lunes"
        },
        {
          spelling:"Tuesday",
          pair:"Mardi",
          definition:"Martes"
        },
        {
          spelling:"Wednesday",
          pair:"Mercredi",
          definition:"Miercoles"
        },
        {
          spelling:"Thursday",
          pair:"Jeudi",
          definition:"Jueves"
        },
        {
          spelling:"Friday",
          pair:"Vendredi",
          definition:"Viernes"
        },
        {
          spelling:"Saturday",
          pair:"Samedi",
          definition:"Sabado"
        },
        {
          spelling:"Sunday",
          pair:"Dimanche",
          definition:"Domingo"
        },
        {
          spelling:"Car",
          pair:"Une voiture",
          definition:"Un coche"
        },
        {
          spelling:"Bed",
          pair:"le lit",
          definition:"La cam"
        },
        {
          spelling:"To read",
          pair:"Lire",
          definition:"Leer"
        },
        {
          spelling:"I am",
          pair:"Je suis",
          definition:"Estoy"
        },
        {
          spelling:"You are",
          pair:"Tu es",
          definition:"Eres"
        },
        {
          spelling:"He is",
          pair:"Il est",
          definition:"Es"
        },
        {
          spelling:"She is",
          pair:"Elle est",
          definition:"Es"
        },
        {
          spelling:"It is",
          pair:"C'est",
          definition:"Es"
        },
        {
          spelling:"We are",
          pair:"Nous sommes",
          definition:"Somos"
        },
        {
          spelling:"You (plural/formal) are",
          pair:"Vous êtes",
          definition:"Sabado"
        },
        {
          spelling:"They are (Men)",
          pair:"Ils sont",
          definition:"Sabado"
        },
        {
          spelling:"They are (Women)",
          pair:"Elles sont",
          definition:"Sabado"
        },
        {
          spelling:"They are (Men and Women)",
          pair:"Ils sont",
          definition:"Sabado"
        },
        {
          spelling:"I have",
          pair:"J'ai",
          definition:"Sabado"
        },
        {
          spelling:"You have (singular)",
          pair:"Tu as",
          definition:"Sabado"
        },
        {
          spelling:"He has",
          pair:"Il a",
          definition:"Sabado"
        },
        {
          spelling:"She has",
          pair:"Elle a",
          definition:"Sabado"
        },
        {
          spelling:"We have",
          pair:"Nous avons",
          definition:"Sabado"
        },
        {
          spelling:"You (plural/formal) have",
          pair:"Vous avez",
          definition:"Sabado"
        },
        {
          spelling:"They have (Men)",
          pair:"Ils ont",
          definition:"Sabado"
        },
        {
          spelling:"They have (Women)",
          pair:"Elles ont",
          definition:"Sabado"
        },
        {
          spelling:"They have (Men and women)",
          pair:"Ils ont",
          definition:"Sabado"
        },
        {
          spelling:"I walk",
          pair:"Je marche",
          definition:"Sabado"
        },
        {
          spelling:"You walk (sing)",
          pair:"Tu marches",
          definition:"Sabado"
        },
        {
          spelling:"He/she walks",
          pair:"Il/elle marche",
          definition:"Sabado"
        },
        {
          spelling:"we walk",
          pair:"Nous marchons",
          definition:"Sabado"
        },
        {
          spelling:"You (plur/formal) walk",
          pair:"Vous marchez",
          definition:"Sabado"
        },
        {
          spelling:"They walk",
          pair:"Ils/elles marchent",
          definition:"Sabado"
        },
        {
          spelling:"To sleep",
          pair:"Dormir",
          definition:"Sabado"
        },
        {
          spelling:"To run",
          pair:"courir",
          definition:"Sabado"
        },
        {
          spelling:"To work",
          pair:"Travailler",
          definition:"Sabado"
        },
        {
          spelling:"To surf",
          pair:"Surfer / Faire du surf",
          definition:"Sabado"
        },
        {
          spelling:"To cook",
          pair:"Cuisiner",
          definition:"Sabado"
        },
        {
          spelling:"To draw",
          pair:"Dessiner",
          definition:"Sabado"
        },
        {
          spelling:"To sing",
          pair:"Chanter",
          definition:"Sabado"
        },

        {
          spelling:"To Write",
          pair:"Ecrire",
          definition:"Sabado"
        },

        {
          spelling:"To clean",
          pair:"Nettoyer",
          definition:"Sabado"
        },
        {
          spelling:"To drive",
          pair:"Conduire",
          definition:"Conducir"
        },
        {
          spelling:"To tidy",
          pair:"Ranger",
          definition:"Sabado"
        },
        {
          spelling:"Alarm clock",
          pair:"Un reveil",
          definition:"Sabado"
        },
        {
          spelling:"Shoe",
          pair:"Une chaussure",
          definition:"Sabado"
        },
        {
          spelling:"Trousers",
          pair:"Un pantalon",
          definition:"Sabado"
        },
        {
          spelling:"sweater",
          pair:"Un pull",
          definition:"Sabado"
        },
        {
          spelling:"A cap",
          pair:"Une casquette",
          definition:"Sabado"
        },
        {
          spelling:"A ring",
          pair:"Une bague",
          definition:"Sabado"
        },
        {
          spelling:"A watch",
          pair:"Une montre",
          definition:"Sabado"
        },
        {
          spelling:"Door",
          pair:"Une porte",
          definition:"Sabado"
        },
        {
          spelling:"Window",
          pair:"Une fenêtre",
          definition:"Sabado"
        },
        {
          spelling:"Bird",
          pair:"Un oiseau",
          definition:"Sabado"
        },
        {
          spelling:"Dog",
          pair:"Un chien",
          definition:"Sabado"
        },
        {
          spelling:"Hello",
          pair:"Bonjour",
          definition:"Hola"
        },
        {
          spelling:"How are you?",
          pair:"Comment vas tu?",
          definition:"Como estas?"
        },
        {
          spelling:"How are you?",
          pair:"Comment allez vous?",
          definition:"Como este/estais"
        },
        {
          spelling:"Please",
          pair:"S'il te plaît",
          definition:"Por favor"
        },
        {
          spelling:"Please",
          pair:"S'il vous plaît",
          definition:"Por favor"
        },
        {
          spelling:"Dog",
          pair:"Un chien",
          definition:"Sabado"
        },
        {
          spelling:"You are welcome",
          pair:"De rien",
          definition:"De nada"
        },
        {
          spelling:"Welcome",
          pair:"Bienvenue",
          definition:"Bienvenido"
        },
        {
          spelling:"See you later",
          pair:"A plus tard",
          definition:"Hasta luego"
        },
        {
          spelling:"See you tomorrow",
          pair:"A demain",
          definition:"Hata manana"
        },
        {
          spelling:"Goodbye",
          pair:"Au revoir",
          definition:"Adios"
        },
        {
          spelling:"There is",
          pair:"Il y a",
          definition:"Hay"
        },
        {
          spelling:"Ago",
          pair:"Il y a",
          definition:"Haya"
        },
        {
          spelling:"How are you doing",
          pair:"Ça va bien?",
          definition:"Haya"
        },
        {
          spelling:"Agreed",
          pair:"D'accord",
          definition:"De accuerdo??"
        },
        {
          spelling:"I agree",
          pair:"Je suis d'accord",
          definition:"Estoy de accuerdo?"
        },
        {
          spelling:"School",
          pair:"Une école",
          definition:"Sabado"
        }],
        results:[],
        current:{spelling:'House', pair:'Une maison'},
        choices:['Une maison','Un fleur','Une fille','Un chat'],
        english: true
      }
  }
  componentWillMount(){

  }
  checkPair(word){
    return(word === this.state.current.pair)
  }
  addStreak(word){

    if(this.checkPair(word)){

      this.setState({
        results: this.state.results.concat([{
          spelling: this.state.current.spelling,
          correct: true
        }])
      })
    }
    else{
      this.setState({
        results: this.state.results.concat([{
          spelling:this.state.current.spelling,
          correct: false
        }
        ])
      })
    }
    const currentIndex = this.showRandowCard()
    this.showRandomChoices(currentIndex);
  }

  getDef(){
  }

  showRandowCard(){
    const random = Math.round(Math.random()*this.state.dictionnary.length);
    this.setState({
      current:{
        spelling: this.state.dictionnary[random].spelling,
        pair: this.state.dictionnary[random].pair,
      }
    })

    return random;
  }
  shuffleArray(arr){
    let l = arr.length;
    for (var i = 0; i < l; i++) {
      let j = Math.floor(Math.random()* l);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;

  }
  showRandomChoices(index){
    const dico = this.state.dictionnary.slice(0);
    const answer = dico.splice(index,1);
    const shuffledArr = this.shuffleArray(
      this.shuffleArray(dico).slice(0,3).concat(answer)
    );
    this.setState({
      choices: shuffledArr.map( item => item.pair ),
    })
  }
  switchLanguages(){
    debugger;
    this.setState({english: this.state.english});
    console.log(this.state.english);

  }
  render() {
    return (
      <div id='app'>
        <button onClick = {this.switchLanguages}>French to English </button>
        <Streak results={this.state.results}
          spelling={this.state.current.spelling}
        />
        <Card
          spelling={this.state.current.spelling}
          pair={this.state.current.pair}
          onCliiick={this.getDef}
        />

        <Choices
          choices={this.state.choices}
          onClick={this.addStreak.bind(this)  }
        />



      </div>
    );
  }
}
App.propTypes = {
  spelling: string,
  pair:string,
  onClick: PropTypes.func
}
export default App;
