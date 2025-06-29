import styles from "../Modules/Katakana.module.css";
import List from "./List";

import katakana from "../../Data/katakana.json";
import { useContext } from "react";
import { KanaContext } from "../Context/KanaContext";
import Detail from "./Detail";

function Katakana() {
  const { selectedKana } = useContext(KanaContext);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <List data={katakana} />
        {selectedKana && <Detail kana={selectedKana} />}
      </div>
    </div>
  );
}

export default Katakana;
