import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
export default function Map() {
  const [serachParams] = useSearchParams();
  const lat = serachParams.get("lat");
  const lng = serachParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        position:{lat},{lng}
      </h1>
    </div>
  );
}
