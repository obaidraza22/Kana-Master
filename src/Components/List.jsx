import { useContext } from "react";
import { KanaContext } from "../Context/KanaContext";
import styles from "../Modules/List.module.css";
import Detail from "./Detail";

function List({ data }) {
  const { setSelectedKana } = useContext(KanaContext);

  console.log(data);
  return data.map((kana) => (
    <div
      className={styles.kana}
      key={kana.id}
      onClick={() => setSelectedKana(kana)}
    >
      {kana.kana}
    </div>
  ));
}

export default List;
