import { FC } from "react";

import { CounterProps } from "./Counter.interface";
import styles from "./Counter.module.scss";

export const Counter: FC<CounterProps> = ({ name, value }) => {
	return (
		<span className={styles.counter}>
			<p className={styles.counter__value}>{value}</p>
			<p className={styles.counter__name}>{name}</p>
		</span>
	);
};
