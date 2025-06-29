import { useContext } from "react";
import { KanaContext } from "../Context/KanaContext";
import styles from "../Modules/List.module.css";
import { useNavigate } from "react-router-dom";

function List({ data }) {
  const { setSelectedKana } = useContext(KanaContext);
  const navigate = useNavigate();

  return data.map((kana) => (
    <div
      className={styles.kana}
      key={kana.id}
      onClick={() => {
        setSelectedKana(kana);
        navigate(kana.kana);
      }}
    >
      {kana.kana}
    </div>
  ));
}

export default List;
