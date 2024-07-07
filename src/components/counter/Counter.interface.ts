import { SizableComponentProps } from "@/interfaces";

export interface CounterProps extends SizableComponentProps<"sm"> {
	name: string;
	value: string;
}
