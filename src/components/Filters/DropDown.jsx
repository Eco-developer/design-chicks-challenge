import styles from "./Filters.module.css";

export const DropDown = ({
    Icon,
    className,
    text,
    head
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
    </div>
)