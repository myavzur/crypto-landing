import cn from "classnames";
import { FC } from "react";

import { ButtonProps } from "./Button.interface";
import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({ isUppercase = true, children }) => {
	return (
		<button
			className={cn(styles.button, { [styles.button_uppercase]: isUppercase })}
		>
			{children}
		</button>
	);
};
