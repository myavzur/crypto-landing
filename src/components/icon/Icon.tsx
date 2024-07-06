import { FC } from "react";

import { IconProps } from "./Icon.interface";
import sprite from "./assets/sprite.svg";

export const Icon: FC<IconProps> = ({ name, width, height, onClick }) => {
	return (
		<svg
			width={width || "100%"}
			height={height || "100%"}
			onClick={onClick}
		>
			<use href={sprite + `#${name}`} />
		</svg>
	);
};
