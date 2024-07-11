import { IoIosArrowDown } from "react-icons/io";
import styles from './Navbar.module.css';

export const MenuItem = ({
    text, 
    className="", 
    Icon, 
    dropdown = true
}) => (
    <div className={`${styles["menu-item"]} ${className}`}>
        {Icon ? 
            <Icon/>
        : null}
        <p>
            {text} 
        </p>
        {dropdown ?
            <IoIosArrowDown />
        : null}
    </div>
)