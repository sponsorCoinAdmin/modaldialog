import React from 'react'
import tokenList from "../resources/data/tokenEthList.json";
import styles from '../styles/App.module.css'


function modifyToken(idx) {
    alert("Modifying Token " + idx);
  }

  function getTokenListBroke(){
    <div>
        {tokenList?.map((e, i) => {
            return (
            <div
                className={styles.tokenChoice}
                key={i}
                onClick={() => modifyToken(i)}
            >
                <img src={e.img} alt={e.ticker} className={styles.tokenLogo} />
                <div className={styles.tokenChoiceNames}>
                    {alert("e.name[" +i+ "] = " + e.name)}
                    <div className={styles.tokenName}>{e.name}</div>
                    <div className={styles.tokenTicker}>{e.ticker}</div>
                </div>
            </div>
            );
        })}
    </div>
}

function getTokenList(){
    <div>
        return (
            <div>
            tokenList[1].name
            tokenList[1].ticker
            </div>
        )

        {/* {tokenList?.map((e, i) => {
            return (
            <div
                className={styles.tokenChoice}
                key={i}
                onClick={() => modifyToken(i)}
            >
                <img src={e.img} alt={e.ticker} className={styles.tokenLogo} />
                <div className={styles.tokenChoiceNames}>
                    {alert("e.name[" +i+ "] = " + e.name)}
                    <div className={styles.tokenName}>{e.name}</div>
                    <div className={styles.tokenTicker}>{e.ticker}</div>
                </div>
            </div>
            );
        })} */}
    </div>
}

function TokenList1() {
    //    {alert(JSON.stringify(tokenList, null, 2))}
    return (
        <div>
            <h2>{tokenList[1].name} {tokenList[1].ticker}</h2>
        </div>
    )
    // })}

}



function TokenList2() {
  tokenList?.map((e, i) => {
        return (
            <div
                className={styles.tokenChoice}
                key={i}
                onClick={() => modifyToken(i)}
            >
                <img src={e.img} alt={e.ticker} className={styles.tokenLogo} />
                <div className={styles.tokenChoiceNames}>
                    {/* {alert("e.name[" +i+ "] = " + e.name)} */}
                    <div className={styles.tokenName}>{e.name}</div>
                    <div className={styles.tokenTicker}>{e.ticker}</div>
                </div>
            </div>
            );
        })}

    function TokenList() {
        // {alert(JSON.stringify(tokenList, null, 2))}
        const tList = tokenList?.map((e, i) => (
            
            <div
                className={styles.tokenChoice}
                key={i}
                onClick={() => modifyToken(i)}
            >
                <img src={e.img} alt={e.ticker} className={styles.tokenLogo} />

                <div className={styles.tokenChoiceNames}>
                    {/* {alert("e.name[" +i+ "] = " + e.name)} */}
                    <div className={styles.tokenName}>{e.name}</div>
                    <div className={styles.tokenTicker}>{e.ticker}</div> 
                </div>
            </div>)

        )
        
            return (
                <div>
                    {tList}
                </div>
            )
        }

export default TokenList

