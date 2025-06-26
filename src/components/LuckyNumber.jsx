import { useState } from "react";
import styles from "./LuckyNumber.module.css";

function LuckyNumber() {
  const [myArray, setArray] = useState([]);
  const [msg, setMsg] = useState("");
  const [lastNumber, setLastNumber] = useState(null);

  function handleClick() {
    const nmbr = Math.floor(Math.random() * 100);
    setLastNumber(nmbr);

    if (myArray.includes(nmbr)) {
      setMsg("Número repetido! Já foi sorteado.");
    } else {
      setArray([...myArray, nmbr]);
      setMsg("Número sorteado com sucesso!");
    }
  }

  return (
    <div className={styles.container}>
      <h1>Desafio 4: Sorteador de Números</h1>

      <button onClick={handleClick} className={styles.button}>Sortear</button>

      {lastNumber !== null && (
        <div className={styles.numberDisplay}>
          Número sorteado: <span>{lastNumber}</span>
        </div>
      )}

      <p className={msg.includes("repetido") ? styles.warning : styles.success}>
        {msg}
      </p>

      <div className={styles.arrayBox}>
        {myArray.map((item, index) => (
          <div key={index} className={styles.numberItem}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default LuckyNumber;