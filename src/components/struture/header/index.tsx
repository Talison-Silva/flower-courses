import styled from 'styled-components';
import {Search} from './search.tsx';
import {HEADER,RECTBTTN,GROUP,PURPLEBTTN,COLORSBUTTON,COLORGROUP} from '@/styled.ts';
import {
	BellAlertIcon,
	Cog8ToothIcon,
	LanguageIcon,
	ArrowsPointingOutIcon,
	ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';



const Circle=styled.div`
	width:35px;
	height:35px;
	border-radius:50%;
	background-color: #757cff;
`

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
				<RECTBTTN children={
					<ChatBubbleLeftIcon/>
				} className="hover:bg-[#ff80d0] bg-[#ffb8e5] text-[#ff80d0]"/>

				<RECTBTTN children={
					<LanguageIcon/>
				} className="hover:bg-[#757cff] bg-[#d4d6ff] text-[#757cff]"/>

				<RECTBTTN children={
					<BellAlertIcon/>
				} className="hover:bg-[#ff80d0] bg-[#ffb8e5] text-[#ff80d0]"/>

				 <RECTBTTN children={
				 	<ArrowsPointingOutIcon/>
				 } className="hover:bg-[#757cff] bg-[#d4d6ff] text-[#757cff]"/>

				<COLORGROUP>
					<Circle/>
					<Cog8ToothIcon className="h-8 w-8"/>
				</COLORGROUP>
			</GROUP>
		</HEADER>
	)
}


/*
<ContainerHeader>
	<Tools>
		<img src="./flower.png" width="50" height="50"/>
		<SearchContainer>									
		</SearchContainer>
		<Circle/>
		<RainbowBTTN/>
	</Tools>
	<Navigate/>
</ContainerHeader>
*/


export {Header}