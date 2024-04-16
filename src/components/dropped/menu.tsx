import {DroppedMN,DroppedFLT} from '@/components/styled/index.ts';
import {Dropped} from './index.tsx';

const DroppedMenu=({schema,down=true,...props})=>
{
	return(
		<DroppedFLT className={down?'left-0 top-full':'top-0 left-full'}>
			<DroppedMN children={<Dropped schema={schema} menu={true}/>}/>
		</DroppedFLT>
	)
}

export {DroppedMenu};