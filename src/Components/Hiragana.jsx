import styles from "../Modules/Hiragana.module.css";

import hiragana from "../../Data/hiragana.json";
import List from "./List";

function Hiragana() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <List data={hiragana} />
      </div>
    </div>
  );
}

export default Hiragana;
