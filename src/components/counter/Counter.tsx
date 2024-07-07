import cn from "classnames";
import { FC } from "react";

import { CounterProps } from "./Counter.interface";
import styles from "./Counter.module.scss";

export const Counter: FC<CounterProps> = ({ name, value, size }) => {
	return (
		<span
			className={cn(styles.counter, {
				[styles[`counter_size-${size}`]]: Boolean(size)
			})}
		>
			<p className={styles.counter__value}>{value}</p>
			<p className={styles.counter__name}>{name}</p>
		</span>
	);
};
