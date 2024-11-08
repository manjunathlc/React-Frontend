import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button className={props.isOutline ? styles.outlineBtn : styles.btnArea}>
        
         {props.icon} 
          <span> {props.text}</span>
        
      </button>
    </div>
  );
};

export default Button;
