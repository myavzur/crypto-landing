import { FC } from "react";

import { FeedbackCardProps } from "./FeedbackCard.interface";
import styles from "./FeedbackCard.module.scss";

export const FeedbackCard: FC<FeedbackCardProps> = ({
	image,
	name,
	accountTag,
	description
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__background} />

			<div className={styles.card__info}>
				<div className={styles["card__info-image"]}>
					<img
						src={image.src}
						alt={image.alt}
					/>
				</div>

				<p className={styles["card__info-name"]}>{name}</p>
				<p className={styles["card__info-tag"]}>{accountTag}</p>
			</div>

			<p className={styles.card__description}>{description}</p>
		</div>
	);
};
