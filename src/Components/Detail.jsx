import { useContext } from "react";
import styles from "../Modules/Detail.module.css";
import { createPortal } from "react-dom";
import { KanaContext } from "../Context/KanaContext";
import { useNavigate } from "react-router-dom";

function Detail({ kana }) {
  const { setSelectedKana } = useContext(KanaContext);
  const navigate = useNavigate();

  return createPortal(
    <div
      className={styles.container}
      onClick={() => {
        setSelectedKana(null);
        navigate(-1);
      }}
    >
      <div className={styles.main} onClick={(e) => e.stopPropagation()}>
        <img src={kana.img} />
        <h1 className={styles.kana}>{kana.kana}</h1>
        <div className={styles.textContainer}>
          <p className={styles.text}>Romaji: {kana.romaji}</p>
          <p className={styles.text}>Example: {kana.example}</p>
          <p className={styles.text}>Mnemonic: {kana.mnemonic}</p>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Detail;
