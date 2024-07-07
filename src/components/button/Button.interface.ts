import { ButtonHTMLAttributes } from "react";

import { SizableComponentProps } from "@/interfaces";

type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends HTMLButtonProps, SizableComponentProps<"sm"> {
	children: string;
	isUppercase?: boolean;
}
