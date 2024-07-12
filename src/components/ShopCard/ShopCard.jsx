import Image from "next/image";
import { CardInput } from "./CardInput";
import { GoDotFill } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import styles from "./ShopCard.module.css";

export const ShopCard = ({
    thumbnail,
    sale=true,
    discountedFrom=null,
    ammount=null,
    name,
    description,
}) => (
    <div className={styles["card-container"]}>
        <div className={styles["card-head"]}>
            <div className={styles["card-sale-container"]}>
                {sale ?
                    <span className={styles["card-sale"]}>
                        <GoDotFill  className={styles["card-sale-dot"]}/> 
                        <span className={styles["card-sale-text"]}>
                            On sale
                        </span>
                    </span>
                :null}
                <span className={styles["card-stock"]}>
                    In stock
                </span>
            </div>
            <CardInput/>
        </div>
        <div className={styles["card-tumbnail"]}>
            <Image 
                src={`/assets/${thumbnail}`}
                width={60}
                height={60}
                className={styles["card-product-thumbnail"]}
                alt={thumbnail}
            />
        </div>
        <div className={styles["card-product-content"]}>
            <span className={styles["card-product-name-container"]}>
                <span className={styles["card-product-name"]}>
                    {name}
                </span>
                {ammount ?
                    <span className={styles["card-product-amount"]}>
                        <span>
                            ${ammount.toFixed(2)}
                        </span>
                        {discountedFrom ? 
                            <span className={styles["discounted-amount"]}>
                                ${discountedFrom.toFixed(2)}
                            </span>
                        : null}
                    </span>
                : null}
            </span>
            <span className={styles["card-product-brand"]}>
                <RiReactjsLine/>
            </span>
        </div>
        <div className={styles["card-product-description"]}>
            {description}
        </div>
        <div className={styles["card-buttons"]}>
            <button className={styles["button-details"]}>
                Details
            </button>
            <button className={styles["button-add"]}>
                <span>
                    Add 
                </span>
                <span className={styles["button-add-icon"]}>
                    <IoMdCart/>
                </span>
            </button>
        </div>
    </div>
)