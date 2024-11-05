import React, { useState } from "react";
import styles from "./Main.module.css";
import Button from "./Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const Main = () => {
  const[name,setNAme]=useState("");

  const viaOnCall = ()=>{
    console.log("Hi I am clicked");
    

  }


  return (
    <div>
      <h1>CONTACT US</h1>
      <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
      <div className={styles.contentArea}>
        <div className={styles.formArea}>
          <div className={styles.headbtnArea}>
            <div className={styles.upperHead}>
              <Button  text=" VIA SUPPORT CHAT" icon={<MdOutlineMessage/>} />
              <Button   text=" VIA CALL" icon={<IoMdCall />}  />
            </div>
            <Button
              text=" VIA EMAIL FORM"
              icon={MdOutlineMailOutline}
              isOutline={true}
            />
            <div className={styles.lowerHead}></div>
          </div>
          <div className={styles.actualformArea}>
            <form className={styles.defineForm} action="">
              <label htmlFor="text" className={styles.label1}>
                name
              </label>
              <input type="text" name="name" id="1" />

              <label htmlFor="email" className={styles.label2}>
                E-mail
              </label>
              <input type="email" name="email" id="2" onChange={handleName} />
              <label htmlFor="" className={styles.label3}>
                Text
              </label>
              <textarea name="address" id="3" rows={10}></textarea>
            </form>
            <div className={styles.downBtnArea}>
              <Button text="SUBMIT" />
            </div>
          </div>
        </div>
        <img src="/images/service.svg" alt="serviceLogo" />


      </div>
    </div>
  );

  // return (
  //   <div>
  //     <h1 onClick={testfun}>CONTACT US</h1>
  //     <p>
  //       LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
  //       WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
  //       REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
  //       EMAIL, OR SOCIAL MEDIA.
  //     </p>
  //     <div className={styles.contentArea}>
  //       <div className={styles.formArea}>
  //         <div className={styles.headbtnArea}>
  //           <div className={styles.upperHead}>
  //             <button>
  //               <img src="/images/message.png" alt="messagelogo" /> VIA SUPPORT
  //               CHAT
  //             </button>
  //             <button>
  //               <img src="/images/phonecall.png" alt="messagelogo" /> VIA CALL
  //             </button>
  //           </div>
  //           <div className={styles.lowerHead}>
  //             <button>
  //               <img src="/images/messagedown.png" alt="messagelogo" /> VIA
  //               EMAIL FORM
  //             </button>
  //           </div>
  //         </div>
  //         <div className={styles.actualformArea}>
  //           <form className={styles.defineForm} action="">
  //               {/* <label htmlFor="">name</label> */}
  //               <input type="text" name="name" id="1"  />

  //               {/* <label htmlFor="">E-mail</label> */}
  //               <input type="email" name="email" id="2"  />
  //               {/* <label htmlFor="">Text</label> */}
  //               <textarea name="address" id="3" ></textarea>
  //           </form>
  //           </div>
  //       </div>
  //       <img src="/images/service.svg" alt="serviceLogo" />
  //     </div>
  //   </div>
  // );
};

export default Main;
