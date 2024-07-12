import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./Dropdown.module.css";

export const Dropdown = ({
    Icon,
    className,
    head,
    text,
}) => (
    <div className={`${styles.dropdown} ${className}`}>
        <Icon className={styles["dropdown-icon"]}/>
        <span className={styles["dropdown-content"]}>
            <span className={styles["dropdown-head"]}>
                {head}
            </span>
            <span className={styles["dropdown-text"]}>
                {text}
            </span>
        </span>
        <IoMdArrowDropdown className={styles["arrow-icon"]}/>
    </div>
)