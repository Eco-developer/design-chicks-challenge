import { Filters } from "../Filters/Filters";
import styles from "./Shop.module.css";

export const Shop = () => {
    return (
        <div className={styles["shop-container"]}>
            <img 
                src="/assets/backgroud.jpg"
                className={styles["shop-background"]}
            />
            <div className={styles["shop-grid-container"]}>
                <div className={styles["shop-grid-content"]}>
                    <div className={styles["shop-grid-title"]}>
                        Condimentum consectetur
                    </div>
                    <Filters/>
                </div>
            </div>
        </div>
    )
}