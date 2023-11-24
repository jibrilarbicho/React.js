/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
export default function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat} &lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h1 className={styles.name}>{cityName}</h1>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
