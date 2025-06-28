import styles from "../Modules/Katakana.module.css";
import List from "./List";

import katakana from "../../Data/katakana.json";

function Katakana() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <List data={katakana} />
      </div>
    </div>
  );
}

export default Katakana;
