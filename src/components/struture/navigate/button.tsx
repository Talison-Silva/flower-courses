import {ChevronRightIcon,ChevronDownIcon} from '@heroicons/react/24/outline';
import {NAVIGATION} from '@/styled.ts';
import {Dropdown} from '@/components/dropdown/index.tsx';

import {useState,useRef} from 'react';



const BTTN=({children})=>
{
	const [active,setActive]=useState(false);
	const outRef=useRef([false,false]);

	const disabled=()=>
	{

	}

	return(
		<Dropdown
		active={active}

		onMouseOver={()=>{setActive(true)}} 
		onMouseOut={()=>{setActive(false)}}

		toggle={
			<NAVIGATION.ITM>
			{children}
			{active?<ChevronDownIcon className="w-5 h-5 stroke-2"/>:<ChevronRightIcon className="w-5 h-5 stroke-2"/>}
			</NAVIGATION.ITM>
		}
		>
			<li>one</li>
			<li>two</li>
		</Dropdown>
	)
}

export {BTTN};