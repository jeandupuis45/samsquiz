import React from "react";
import { Quiz } from "./Quiz/quiz";

// import  Checkboxes  from "./Mui/test";
// import { Quiz } from "./Raphael/Quiz";
// import { Position } from "./Raphael/Container";
// import { Checkbox} from "./Forms/Checkbox";
// import { Number } from "./Forms/Number_input";
// import { Text } from "./Forms/Text_input";
// import { List } from "./Forms/List";
// import { Container } from "./Anime/Container";
// import { InputCard } from "./Anime/Input_Card";
// import { Test2 } from "./Training/Test";
// import logo from './logo.svg';
// import './App.css';
// import { Calculatrice } from "./Calculatrice/Addition";

// const myFunction2 = () => console.log("Bonjour")

// // Quand React lit le composant button pour la premiere fois
// const onClickFunction = () => setValeur(valeur + 10)
// // A chaque fois aue tu cliques sur le bouton
// onClickFunction()
// // Ce qui reviens à cela/
// setValeur(valeur + 10)

// // Quand React lit le composant input pour la premiere fois
// const onChangeFunction = (event) => setValeur(event.target.value)
// // L'utilisateur tape 3 et value etait egale à 2 avant de ajouter 3
// const event = {
//   nomDuBoutton: "Mon nom",
//   heure: "4",
//   target: {
//     value: ancienneValue + "3"
//   }
// }
// onChangeFunction(event)
// // Ce qui reviens à cela/
// setValeur(ancienneValue + "3")
// // Ce qui reviens à cela/
// setValeur("23")

// const event = {
//   nomDuBoutton: "Mon nom",
//   heure: "4",
//   target: {
//     value: ancienneValue + "3"
//   }
// }
// const valeur = event["target"]["value"]

// Formulaires:
// - button: onClick execute la fonction quand on clique
// - input type=text/number/checkbox, value, onChange
// - select

// function Ajoute(list, valeur) {
//   const list2 = list.push(valeur)
//   return list
// }
  

// function ToDo() {
//   const [valAjoute, setValAjoute] = React.useState("")
//   const [valList, setValList] = React.useState([])
//   const listItems = valList.map((word) =>
//     <p key={word}>{word}</p>)
//   return (
//     <>
//     <input type="text" value={valAjoute} onChange={(event) => setValAjoute(event.target.value) }/>
//     <div>{listItems}</div>
//     <button type="button" onClick={() => setValList(valList.concat([valAjoute]))}>
//     </button>
//     </>
//   )
// }



// function Fruits () {
//   const fruits = ["banane", "pomme", "tomate", "abricot", "mangue"]
//   const listItems = fruits.map((word) =>
//     <p key={word}>{word}</p>)
//   return <div>{listItems}</div> 
// }



// function Formulaires() {
//   const [valPrenom, setValPrenom] = React.useState("")
//   const [valNom, setValNom] = React.useState("")
//   const [valAge, setValAge] = React.useState("")
//   const [valSexe, setValSexe] = React.useState("")
//   const [valPhrase, setValPhrase] = React.useState("")
//   return (
//     <>
//     <p>Nom : </p>
//     <input type="text" value={valNom} onChange={(event) => setValNom(event.target.value)}/> 
//     <p>Prénom : </p>
//     <input type="text" value={valPrenom} onChange={(event) => setValPrenom(event.target.value)}/>
//     <p>Age : </p>
//     <input type="number" value={valAge} onChange={(event) => setValAge(event.target.value)}/>
//     <p>Sexe :</p>
//     <p>Masculin</p>
//     <input type="checkbox" checked={valSexe=="Mr"} onChange={() => setValSexe("Mr")}/>
//     <p>Feminin</p>
//     <input type="checkbox" checked={valSexe=="Mme"} onChange={() => setValSexe("Mme")}/>
//     <p>Autre</p>
//     <input type="checkbox" checked={valSexe==""} onChange={() => setValSexe("")}/>
//     <p></p>
//     <input type="button" value={"Valider"} onClick={() => setValPhrase(`Vous êtes ${valSexe} ${valNom} ${valPrenom} et vous avez ${valAge} ans`)}/>
//     <p>{valPhrase}</p>
//     </>
//   )
// } 


// function Composition(props){
//   return (
//     <button onClick={props.action}>{props.name}</button>
//   )
// }



// function SubApp() {
//   const count = useSelector((state) => state.counter.count);
//   const userName = useSelector((state) => state.counter.userName);
//   const dispatch = useDispatch();
//   return (
//     <div className="App">
//       <h1> The count is: {count}</h1>
//       <button onClick={() => dispatch(increment())}>increment</button>
//       <button onClick={() => dispatch(decrement())}>decrement</button>
//       <button onClick={() => dispatch(incrementByAmount(33))}>
//         Increment by 33
//       </button>
//       <input type={"number"} value = {count} onChange={(event) => dispatch(changeNumber(event.target.value))} />
//       <input type={"text"} value = {userName} onChange={(event) => dispatch(changeName(event.target.value))}/>
//       <p> Bonjour {userName} </p>
//     </div>
//   );
// }




function App() {
  return (
    <div className="App">
      {/* <Test2/> */}
      {/* <Tri/> */}
      <header className="App-header">
        <Quiz/>
        {/* <Calculatrice/> */}
        {/* <Composition name={"click-me"} action={() => console.log("Hi")}/> */}
        {/* <Formulaires/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}


export default App;
