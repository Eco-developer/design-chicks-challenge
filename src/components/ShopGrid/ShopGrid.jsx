import { Dropdown } from "../Dropdown/DropDown";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import styles from "./ShopGrid.module.css";
import { ShopCard } from "../ShopCard/ShopCard";
import { mockItems } from "@/const/mockItems";

export const ShopGrid = () => {
    return (
        <div className={styles["shop-grid"]}>
            <div className={styles["shop-sort-container"]}>
                <p className={styles["shop-pagination"]}>
                    Showing 20 - from 125
                </p>    
                <Dropdown
                    Icon={HiOutlineAdjustmentsHorizontal}
                    className={styles["shop-sort"]}
                    head="Sort By"
                    text="Featured"
                />
            </div>
            <div className={styles["shop-grid-content"]}>
                {mockItems.map((item) => (
                    <ShopCard
                        thumbnail={item.thumbnail}
                        sale={item.sale}
                        discountedFrom={item.discountedFrom}
                        ammount={item.ammount}
                        name={item.name}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}