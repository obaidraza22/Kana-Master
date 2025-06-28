import styles from "../Modules/List.module.css";

function List({ data }) {
  return data.map((kana) => (
    <div className={styles.kana} key={kana.id}>
      {kana.kana}
    </div>
  ));
}

export default List;
