import {HomeIcon} from '@heroicons/react/24/outline';
import {NAVIGATION} from '@/styled.ts';
import {BTTN} from './button.tsx';


const Navigate=()=>
{
	return(
		<NAVIGATION.CNTNT>
			<NAVIGATION.GRP>

				<BTTN>
					<HomeIcon 
						className="
							w-7  h-7
							stroke-2
						"
					/>

					<p>home</p>	
				</BTTN>

			</NAVIGATION.GRP>
		</NAVIGATION.CNTNT>
	)
}

export {Navigate}