import {HomeIcon} from '@heroicons/react/24/outline';


export const HomeSchema=
[
	{
		name:'home',
		icon:HomeIcon,
		method:()=>{alert('home')}
	},
	{
		name:'home',
		icon:HomeIcon,
		method:()=>{alert('home')}
	},
	{
		name:'home',
		icon:HomeIcon,
		menu:[
			{
				name:'home',
				icon:HomeIcon,
				method:()=>{alert('home')}
			},
			{
				name:'home',
				icon:HomeIcon,
				method:()=>{alert('home')}
			}
		]
	}
]