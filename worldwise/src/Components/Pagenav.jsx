import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";
export default function Pagenav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">product</Link>
        </li>
        <li>
          <Link to="/pricing">pricing</Link>
        </li>
      </ul>
    </nav>
  );
}
