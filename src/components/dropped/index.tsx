import {DroppedCNTNR,DroppedITM} from '@/styled.ts';
import {DroppedNoOpen} from './no-open.tsx';
import {DroppedOpen} from './open.tsx';
import {DroppedToggle} from './toggle.tsx';


const Dropped=({schema,toggle,menu,children})=>
{
	if(toggle)
	{
		return <DroppedToggle toggle={toggle} schema={schema}/>;
	}

	else if(menu && schema)
	{				
		return(
			<>
			{
				schema.map(entry => {					
					if(entry.menu){return <DroppedOpen name={entry.name} Icon={entry.icon} schema={entry.menu}/>}//schema
					else{return <DroppedNoOpen name={entry.name} method={entry.method} Icon={entry.icon}/>}
				})
			}
			</>
		)
	}
}

/*


const data=Object.entries(schema)
return(
	<DroppedCNTNR>
	{
		Object.entries(
			schema
		).map(entry => {
			const [indx,itm]=entry				
			console.log('itm',itm)
			if(itm.menu)
			{
				return <DroppedOpen children={children}/>
			}
			else
			{
				return <DroppedNoOpen children={children}/>
			}
		})
	}
	</DroppedCNTNR>
)


*/

export { Dropped };