export type Rating = {
	rate: number;
	label: string;
	characterIndex: number;
	background: string;
	color: string;
	buttonElement: (EventTarget & HTMLButtonElement) | null;
	gradients: string[];
};
