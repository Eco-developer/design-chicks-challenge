import { GiBroadsword } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { GiSwapBag } from "react-icons/gi";
import { GiFeather } from "react-icons/gi";
import styles from "./Filters.module.css";


export const Filters = () => {
    return (
        <div className={styles["filters-container"]}>
            <div className={styles["filters-side"]}>
                <div className={styles["filter-select"]}>
                    <GiBroadsword/>
                    <div className={styles["select-input"]}>
                        <p>
                            Select a game 
                        </p>
                        <IoMdArrowDropdown/>
                    </div>
                </div>
            </div>
            <div className={styles["filters-main"]}>
                <div className={styles["filter-search"]}>
                    <FiSearch/>
                    <input placeholder="Search" className={styles["search-input"]}/>
                </div>
                <div className={styles["drop-down-container"]}>
                    
                </div>
            </div>
        </div>
    )
}