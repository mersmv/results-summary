import { v4 } from 'uuid';
export const CARDS_INFO = [
	{
		id: v4(),
		icon: '/public/assets/images/icon-reaction.svg',
		title: 'Reaction',
		percent: '80',
		color: 'red',
		bgcolor: 'rgb(255,0,0, 0.05)'
	},
	{
		id: v4(),
		icon: '/public/assets/images/icon-memory.svg',
		title: 'Memory',
		percent: '92',
		color: 'rgba(255, 178 ,30)',
		bgcolor: 'rgba(255, 178 ,30 ,0.2)'
	},
	{
		id: v4(),
		icon: '/public/assets/images/icon-verbal.svg',
		title: 'Verbal',
		percent: '61',
		color: 'green',
		bgcolor: 'rgba(0,255,0,0.15)'
	},
	{
		id: v4(),
		icon: '/public/assets/images/icon-visual.svg',
		title: 'Visual',
		percent: '73',
		color: 'blue',
		bgcolor: 'rgba(0,0,255,0.1)'
	}
];
