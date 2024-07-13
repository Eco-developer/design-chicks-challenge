import styles from "./Footer.module.css";

export const FooterLinks = ({
    title,
    items,
}) => (
    <div className={styles["footer-links"]}>
        <div className={styles["title"]}>
            {title}
        </div>
        {items.map((text) => (
            <div key={text} className={styles["text"]}>
                {text}
            </div>
        ))}
    </div>
)