//css
import './App.css';

//react
import {useCallbak, useEffect, useState} from "react"

//data
import {wordsList} from "./data/words"

//components
import StartScreen from './components/StartScreen';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)


  return (
    <div className="App">
      {gameStage === "start" && <StartScreen/>}
      {gameStage === "game" && <StartScreen/>}
      {gameStage === "end" && <StartScreen/>}
    </div>
  );
}

export default App;
