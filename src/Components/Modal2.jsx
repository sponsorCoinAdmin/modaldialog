import React from "react";
import { useState } from "react";
import styles from '../styles/App.module.css'
import TokenList from './TokenList'

import img2 from "../resources/images/image2.svg";

import tokenEthList from "../resources/data/tokenEthList.json";

export const Modal2 = ({ openModal2, setOpenModal2 }) => {
  let tokenList = tokenEthList;
  let [tokenOne, setTokenOne] = useState(tokenList[0]);
  let [tokenTwo, setTokenTwo] = useState(tokenList[1]);

  const [emailSend, setEmailSend] = useState(false);

  const sendEmail = () => {
    setEmailSend(true);
    setTimeout(() => {
      setOpenModal2(false);
    }, 2000);
  };

  function modifyToken(idx) {
    alert("Modifying Token " + idx);
  }

  function getTokenList() {
    
  }
  
  return (
    <>
      {!emailSend && (
        <div className="main-container">
          <div className="modal-container">

          <div className="modalContent">
          {/* {tokenList?.map((e, i) => {
            return (
              <div
                className={styles.tokenChoice}
                key={i}
                onClick={() => modifyToken(i)}
              >
                <img src={e.img} alt={e.ticker} className={styles.tokenLogo} />
                <div className={styles.tokenChoiceNames}>
                  <div className={styles.tokenName}>{e.name}</div>
                  <div className={styles.tokenTicker}>{e.ticker}</div>
                </div>
              </div>
            );
          })} */}


          </div>
            <h3 className="">Token List</h3>
             <div>
              <TokenList />
              <button
                className="modal-footer-button modal-button-send"
                onClick={sendEmail}
              >
                Send
              </button>
              <button
                className="modal-footer-button modal-button-cancel"
                onClick={() => {
                  setOpenModal2(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {emailSend && (
        <div className="modal-container-sent">
          <img className="modal-image" src={img2} />
          <div className="modal-text">Email sent!</div>
        </div>
      )}
    </>
  );
};