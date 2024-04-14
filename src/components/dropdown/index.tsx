import {DropdownContainerSTYLD,DropdownMenuSTYLD} from '@/styled.ts';

const Dropdown =({toggle,active,children,...props})=>
{	
	return(
		<DropdownContainerSTYLD {...props}>
			{toggle}
			{active && <DropdownMenuSTYLD children={children}/>}
		</DropdownContainerSTYLD>
	)
}

export { Dropdown };