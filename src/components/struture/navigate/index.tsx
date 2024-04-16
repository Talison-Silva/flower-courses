import {Dropped} from '@/components/dropped/index.tsx';
import {HomeIcon} from '@heroicons/react/24/outline';
import {HomeSchema} from '@/utils/navigation.ts';
import {NavigationBUTTON} from './button.tsx';
import {NAVIGATION} from '@/components/styled/index.ts';


const Navigate=()=>
{
	return(
		<NAVIGATION.CNTNT>
			<NAVIGATION.GRP>

				<Dropped schema={HomeSchema} toggle={
					<NavigationBUTTON name="home" Icon={HomeIcon}/>
				}/>
				
			</NAVIGATION.GRP>
		</NAVIGATION.CNTNT>
	)
}

export {Navigate}