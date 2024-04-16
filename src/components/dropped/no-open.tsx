import {DroppedBTTN,DroppedITM} from '@/styled.ts'

const DroppedNoOpen=({name,Icon,method})=>{	
	return(
		<div className="px-2 w-full min-h-min flex justify-between" onClick={method}>
			<DroppedITM>
				<div className="flex gap-5 items-center">
				<Icon className="w-6 h-6 stroke-2"/>
				{name}
				</div>
			</DroppedITM>
		</div>
	)
}

export {DroppedNoOpen}