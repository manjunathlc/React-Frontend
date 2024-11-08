import React, { useState } from "react";
import styled from "styled-components";

const RollDie = ({roleDice,currentDice}) => {
    
    
  return (
    <DiceContainer>
      <div className="dice"
      onClick={roleDice}>
        <img src={`/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDie;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;
