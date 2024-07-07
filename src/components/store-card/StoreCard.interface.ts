import { ReactNode } from "react";

import { SizableComponentProps } from "@/interfaces";

export interface StoreCardProps extends SizableComponentProps<"sm"> {
	iconElement: ReactNode;
	catchPhrase: string;
	storeName: string;
}
