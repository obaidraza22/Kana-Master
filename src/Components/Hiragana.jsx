import styles from "../Modules/Hiragana.module.css";

import hiragana from "../../Data/hiragana.json";
import List from "./List";
import { useContext } from "react";
import { KanaContext } from "../Context/KanaContext";
import Detail from "./Detail";

function Hiragana() {
  const { selectedKana } = useContext(KanaContext);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <List data={hiragana} />
        {selectedKana && <Detail kana={selectedKana} />}
      </div>
    </div>
  );
}

export default Hiragana;
