"use client";
import { Header } from '@/components/struture/header/index.tsx';
import { Navigate } from '@/components/struture/navigate/index.tsx';
import { ROOT } from '@/styled.ts';


const Main=({children})=>
{	
	return(
		<ROOT>
			<Header/>
			<Navigate/>
			<div className="
				min-h-10
				my-5
				mx-8
				py-10
				px-24 
				bg-[#EEF2F6]
				rounded-lg 
			">{children}</div>
		</ROOT>
	)
}

export {Main};