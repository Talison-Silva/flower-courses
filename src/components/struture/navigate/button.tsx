import {ChevronRightIcon,ChevronDownIcon} from '@heroicons/react/24/outline';
import {NavigationBTTN} from '@/styled.ts';
import {DroppedMenu} from './menu.tsx';
import {useState} from 'react';

const Chevron=({active})=>
(
	<>
	{active?<ChevronDownIcon className="w-5 h-5 stroke-2"/>:<ChevronRightIcon className="w-5 h-5 stroke-2"/>}
	</>
)


const NavigationBUTTON=({name,Icon,...props})=>{
	const [drop,setDrop]=useState(false)

	props.onMouseOver=()=>
	{setDrop(true)}
	props.onMouseOut=()=>
	{setDrop(false)}

	return(
		<NavigationBTTN {...props}>
			<Icon className="w-6 h-6 stroke-2"/>
			{name}	
			<Chevron active={drop}/>
		</NavigationBTTN>
	)
}

export {NavigationBUTTON}