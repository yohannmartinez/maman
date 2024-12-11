import type { Rating } from '$lib/types/reviews';

export const ratings: Rating[] = [
	{
		rate: 5,
		label: 'Wouaaaah',
		characterIndex: 0,
		background: '#F7E2A9',
		color: '#F7C644',
		buttonElement: null,
		gradients: ['#EEC64F', '#F7A944']
	},
	{
		rate: 4,
		label: 'Rien à dire',
		characterIndex: 1,
		background: '#D3ECCC',
		color: '#76C25C',
		buttonElement: null,
		gradients: ['#74bf65', '#3CA44F']
	},
	{
		rate: 3,
		label: "C'est stylé",
		characterIndex: 2,
		background: '#C9E5FB',
		color: '#59ABF6',
		buttonElement: null,
		gradients: ['#61A9F5', '#5988F6']
	},
	{
		rate: 2,
		label: 'Ça passe',
		characterIndex: 3,
		background: '#F0E0FC',
		color: '#CF9BF5',
		buttonElement: null,
		gradients: ['#D58CD0', '#AF9BF5']
	},
	{
		rate: 1,
		label: 'Euuuuh',
		characterIndex: 4,
		background: '#F6CDCC',
		color: '#EC645E',
		buttonElement: null,
		gradients: ['#EC6664', '#e12117']
	}
];
