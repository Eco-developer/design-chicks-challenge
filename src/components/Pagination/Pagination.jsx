"use client"
import { Page } from "../Page/Page";
import { pages } from "@/const/pages";
import styles from "./Pagination.module.css";

export const Pagination = () => {
	return(
		<div className={styles["pagination-container"]}>
 			<div className={styles["pagination"]}>
 				{pages.map((page) => (
 					<Page
 						key={page}
 						page={page}
 						current={'1'}
 					/>
 				))}
 			</div>
 		</div>
 	)
}