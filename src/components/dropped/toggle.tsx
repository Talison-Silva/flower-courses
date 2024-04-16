import {DroppedBTTN} from '@/components/styled/index.ts';
import {DroppedMenu} from './menu.tsx';
import {useState} from 'react';

const DroppedToggle=({toggle,schema,...props})=>{
	const [drop,setDrop]=useState(false)

	props.onMouseOver=()=>
	{setDrop(true)}
	props.onMouseOut=()=>
	{setDrop(false)}	

	return(
		<DroppedBTTN {...props}>
			{toggle}
			{drop && <DroppedMenu schema={schema}/>}
		</DroppedBTTN>
	)
}

export {DroppedToggle}