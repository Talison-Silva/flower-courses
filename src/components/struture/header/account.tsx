import {Cog8ToothIcon} from '@heroicons/react/24/outline';
import {COLORGROUP} from '@/components/styled/index.ts';

const Account=()=>
{
	return(
		<COLORGROUP>			
			<div className="w-[40px] h-[40px] rounded-full bg-[#757cff]"/>
			<Cog8ToothIcon className="h-10 w-10 animate-spin duration-1000"/>
		</COLORGROUP>
	)
}

export {Account};