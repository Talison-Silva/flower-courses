import {Search} from './search.tsx';
import {
	HEADER,
	RECTBTTN,
	GROUP,
	PURPLEBTTN,
	COLORSBUTTON,
	COLORGROUP
} from '@/components/styled/index.ts';

import {
	BellAlertIcon,
	Cog8ToothIcon,
	LanguageIcon,
	ArrowsPointingOutIcon,
	ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';
import {Account} from './account.tsx';


const Header=()=>
{
	return(
		<HEADER>
			<GROUP>
				<img 
					width="50"height="50"
					src="./flower.png"					
				/>
			</GROUP>

			<Search/>

			<GROUP>
				<RECTBTTN children={<ChatBubbleLeftIcon/>} className="hover:bg-[#ff80d0] bg-[#ffb8e5] text-[#ff80d0]"/>

				<RECTBTTN children={<LanguageIcon/>} className="hover:bg-[#757cff] bg-[#d4d6ff] text-[#757cff]"/>

				<RECTBTTN children={<BellAlertIcon/>} className="hover:bg-[#ff80d0] bg-[#ffb8e5] text-[#ff80d0]"/>

				 <RECTBTTN children={<ArrowsPointingOutIcon/>} className="hover:bg-[#757cff] bg-[#d4d6ff] text-[#757cff]"/>				

				 <Account/>
			</GROUP>
		</HEADER>
	)
}


export {Header}