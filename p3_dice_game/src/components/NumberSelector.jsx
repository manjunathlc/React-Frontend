import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  console.log(selectedNumber);

  const numberSelectorHandler = (val)=>{
    setSelectedNumber(val);
    setError("");

  }

  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((val, i) => (
          <Box
            key={i}
            isSelected={val === selectedNumber}
            onClick={()=> numberSelectorHandler(val) }
          >
            {val}
          </Box>
        ))}
      </div>
      <p>Select number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error{
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
