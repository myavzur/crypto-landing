import { FC } from "react";

import { GradientTextProps } from "./GradientText.interface";
import styles from "./GradientText.module.scss";

export const GradientText: FC<GradientTextProps> = ({ children }) => {
	return <span className={styles["gradient-text"]}>{children}</span>;
};
