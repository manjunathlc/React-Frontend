import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDie from "./RollDie";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const[error,setError] = useState("");
  const[showRules,setShowRules]=useState(false);

  const generateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
      if(!selectedNumber) {
        setError("You have Not Selected a Number");
        return;
      };
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((preVal) => randomNumber);


    if(selectedNumber===randomNumber){
        setScore((preVal)=>preVal+randomNumber);
    }else{
        setScore(preVal=>preVal-2);
    }

    setSelectedNumber(undefined)
  };

  const resetScore = ()=>{
    setScore(0);

  }

  return (
    <MainCOntainer>
      <div className="Topsection">
        <TotalScore  score={score}/>
        <NumberSelector
        error={error}
        setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDie currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>setShowRules((preVal)=>!preVal)}> {showRules ? "Hide" : "Show" } Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainCOntainer>
  );
};

export default GamePlay;

const MainCOntainer = styled.div`
  .Topsection {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
  }
`;
