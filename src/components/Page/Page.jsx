import {
	IoIosArrowBack,
	IoIosArrowForward,
} from 'react-icons/io';
import {
	LEFT_PAGE,
	RIGHT_PAGE,
} from '@/const/pages';
import styles from "./Page.module.css";

export const Page = ({page, current}) => {

	if (page === LEFT_PAGE) {
		return(
			<button
                className={styles["arrow-button"]}
            >
				<IoIosArrowBack/>
			</button>
		)
	}

	if (page === RIGHT_PAGE) {
		return(
			<button
                className={styles["arrow-button"]}
			>
				<IoIosArrowForward/>
			</button>
		)
	}
    console.log(page, current, current == page);
	return (
		<button 
            className={`${styles["page"]} ${current == page ? styles["active"] : ""}`}
		>
			{page}
		</button>
	)
}
