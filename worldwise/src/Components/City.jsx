import { useParams } from "react-router-dom";
import styles from "./City.module.css";

function City() {
  const { id } = useParams();
  return <div className={styles.city}>City {id}</div>;
}

export default City;
