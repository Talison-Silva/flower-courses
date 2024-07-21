import {Dropped} from '@/components/dropped/index.tsx';
import {HomeIcon} from '@heroicons/react/24/outline';
import {HomeSchema,ProgrammingSchema} from '@/utils/navigation.ts';
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

				<Dropped schema={ProgrammingSchema} toggle={
					<NavigationBUTTON name="programming" Icon={HomeIcon}/>
				}/>
				
			</NAVIGATION.GRP>
		</NAVIGATION.CNTNT>
	)
}

export {Navigate}