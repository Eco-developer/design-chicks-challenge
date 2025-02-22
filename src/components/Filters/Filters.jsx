import { Dropdown } from "../Dropdown/Dropdown";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { GiSwapBag, GiFeather, GiBroadsword } from "react-icons/gi";
import styles from "./Filters.module.css";


export const Filters = () => {
    return (
        <div className={styles["filters-container"]}>
            <div className={styles["filters-side"]}>
                <div className={styles["filter-select"]}>
                    <GiBroadsword className={styles["filter-search-icon"]}/>
                    <div className={styles["select-input"]}>
                        <p>
                            Select a game 
                        </p>
                        <IoMdArrowDropdown className={styles["arrow-icon"]}/>
                    </div>
                </div>
            </div>
            <div className={styles["filters-main"]}>
                <div className={styles["filter-search"]}>
                    <FiSearch className={styles["filter-search-icon"]}/>
                    <input placeholder="Search" className={styles["search-input"]}/>
                </div>
                <div className={styles["drop-down-container"]}>
                    <Dropdown
                        Icon={GiSwapBag}
                        className={styles["drop-down-left"]}
                        head="Price"
                        text="All"
                    />
                    <Dropdown
                        Icon={GiFeather}
                        className={styles["drop-down-right"]}
                        head="Item Type"
                        text="All"
                    />
                </div>
            </div>
        </div>
    )
}