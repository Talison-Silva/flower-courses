import {DroppedMN,DroppedFLT} from '@/styled.ts';
import {Dropped} from './index.tsx';

const DroppedMenu=({schema,down=true,...props})=>
{
	return(
		<DroppedFLT className={down?'left-0 top-full':'top-0 left-full'}>
			<DroppedMN>
				<Dropped schema={schema} menu={true}/>
			</DroppedMN>
		</DroppedFLT>
	)
}

export {DroppedMenu};