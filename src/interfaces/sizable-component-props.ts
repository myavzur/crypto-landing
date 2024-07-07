type SizeName = "sm" | "md";

export interface SizableComponentProps<S extends SizeName> {
	/** Если компонент имеет несколько размеров - указывает, какой использовать. */
	size?: S;
}
