import cn from "classnames";
import { FC } from "react";

import { StoreCardProps } from "./StoreCard.interface";
import styles from "./StoreCard.module.scss";

export const StoreCard: FC<StoreCardProps> = ({
	iconElement,
	catchPhrase,
	storeName,
	size
}) => {
	return (
		<div
			className={cn(styles.card, { [styles[`card_size-${size}`]]: Boolean(size) })}
		>
			<div className={styles.card__image}>{iconElement}</div>

			<p className={styles.card__phrase}>{catchPhrase}</p>
			<p className={styles.card__store}>{storeName}</p>
		</div>
	);
};
