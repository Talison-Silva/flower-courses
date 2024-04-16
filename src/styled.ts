import styled from 'styled-components';

// --| header |======================================================================|

export const HEADER=styled.header`
	position:relative;
	min-height:7vh;
	display:flex;
	justify-content:space-between;
	align-items:center;
	padding:10px 30px 10px 30px;
`

// --| search |=============================================|

export const SEARCH=
{
	CNTNT:styled.form`
		position:relative;
		width:40%;height:7vh; 

		border:2px solid;
		border-color:#999999;

		border-radius:8px;
		overflow:hidden;

		display:flex;
		justify-content:space-between;
		align-items:center;

		&:hover
		{
			border-color:black;
		}

		&:select
		{
			border-color:red;
		}
	`,

	INPT:styled.input`
		width:100%;
		height:6vh;
		padding:0 20px 0 20px;
		outline:none;
		color:#999999;
		background-color:transparent;
		font-family:'Ubuntu Mono',monospace;
		font-size:25px;
	`,

	SBMT:styled.button`
		width:5vh;height:5vh;
		outline:none;
		background-color:transparent;
		color:#999999;
		padding:0 20px 0 0;
	`
}

// --| navigation |==================================================================|

export const NAVIGATION=
{
	CNTNT:styled.nav`
		position:relative;
		width:100%;
		padding: 10px 0 10px 0;
		min-height:6vh;
		background-color: purple;
		//background:linear-gradient(to left,#b1bbfa,#ddb1fa,#fab1f3,#fab1c4); // fraca
		background:linear-gradient(to left,#94a3ff,#d193fa,#ff8cf4,#fc8daa);
	`,

	GRP:styled.ul`
		width:100%;min-height:4.5vh;

		display:flex;
		justify-content:center;
		align-items:center;
	`,

	ITM:styled.li`		
		font-size:1.7125rem;
		font-family:'Ubuntu Mono',sans-serif;		
		font-weight: 400;
		letter-spacing:.125rem;
		text-transform:capitalize;
		padding:10px 15px 10px 15px;
		border-radius:10px;
		color:white;
		user-select:none;
		display:flex;
		align-items:center;
		gap:20px;

		&:hover
		{
			background-color:rgba(255,255,255,.2125);
		}
	`
}


export const ROOT=styled.section`
	position:realtive;
	height:100vh;
`

export const NavigationBTTN=styled.button`
	position:relative;
	font-size:1.7125rem;
	font-family:'Ubuntu Mono',sans-serif;		
	font-weight: 400;
	letter-spacing:.125rem;
	text-transform:capitalize;
	padding:10px 15px 10px 15px;
	border-radius:10px;
	color:white;
	user-select:none;
	display:flex;
	align-items:center;
	gap:20px;

	&:hover
	{
		background-color:rgba(255,255,255,.2125);
	}
`

// --| dropdown |=================================================================|

export const DropdownContainerSTYLD=styled.div`
	width: min-content;
	height: min-content;
`

export const DropdownButtonSTYLD=styled.button`
	position:relative;
	font-size:1.7125rem;
	font-family:'Ubuntu Mono',sans-serif;		
	font-weight: 400;
	letter-spacing:.125rem;
	text-transform:capitalize;
	padding:10px 15px 10px 15px;
	border-radius:10px;
	color:white;
	user-select:none;
	display:flex;
	align-items:center;
	gap:20px;

	&:hover
	{
		background-color:rgba(255,255,255,.2125);
	}
`

export const DropdownMenuSTYLD=styled.ul`
	position:absolute;
	left:0;top:100%;
	width:250px;
	min-height:40px;
	padding:15px 0 15px 0;
	border-radius:10px;
	box-shadow:0px 0px 15px #666666;
	background-color:white;

	display:flex;
	flex-direction:column;
`

export const DropdownItemSTYLD=styled.li`
	width:100%;
	height:40px;
	color:black;

	display:flex;
	justify-content:space-between;
`

// --| dropped |=================================================================|

// Dropped-Container
export const DroppedCNTNR=styled.div`
	width: min-content;
	height: min-content;	
`

// Dropped-Button
export const DroppedBTTN=styled.div`
	position:relative;
	width: min-content;
	height: min-content;
`

// Dropped-Float
export const DroppedFLT=styled.div`
	position:absolute;
	width: min-content;
	height: min-content;
`

// Dropped-Menu
export const DroppedMN=styled.div`
	//position:relative;	
	width:250px;
	min-height:40px;
	padding:15px 0 15px 0;
	border-radius:10px;
	box-shadow:0px 0px 15px #666666;
	background-color:white;

	display:flex;
	flex-direction:column;
`

// Dropped-Item
export const DroppedITM=styled.button`
	width:100%;
	position:relative;
	font-size:1.5125rem;
	font-family:'Ubuntu Mono',sans-serif;		
	font-weight: 400;
	letter-spacing:.125rem;
	text-transform:capitalize;
	padding:10px 15px 10px 15px;
	border-radius:10px;
	color:black;
	user-select:none;
	display:flex;
	justify-content:space-between;
	align-items:center;

	&:hover
	{
		background-color:#f5ebff;
		color:#a245ff;
		stroke:#f5ebff;
	}
`

// --| generic |==================================================================|

export const GROUP=styled.div`
	min-width: min-content;
	min-height:min-content;
	color:black;
	display:flex; 
	align-items:center;
	gap:1rem;
`

export const COLORSBUTTON=styled.button`
	min-width:5vh;min-height:5vh;
	border-radius: 12px;
	padding:7px;

	background-color:#ffd1dd;//#FFCCD9;
	color: #ff5984;

	font-family:'Ubuntu Mono',monospace;
	font-weight:800;

	display:flex;
	justify-content:center;
	align-items:center;	
	gap:10px;
`

export const PURPLEBTTN=styled(COLORSBUTTON)`
	background-color:#d4d6ff;//#B6BAFA;
	color:#757cff;
`

export const RECTBTTN=styled.button`
	min-width: 5vh;
	min-height:5vh;
	border-radius: 12px;
	padding:7px;

	font-family:'Ubuntu Mono',monospace;
	font-weight:800;

	display:flex;
	justify-content:center;
	align-items:center;	
	gap:10px;

	&:hover
	{
		color:white;
	}
`

export const COLORGROUP=styled.div`
	width: min-content;
	height: min-content;
	padding:10px;
	border-radius:30px;
	background-color:#d4d6ff;//#B6BAFA;
	color:#757cff;

	display:flex;
	justify-content:center;
	align-items:center;	
	gap:10px;
`

export const MINCONTENT=styled.div`
	position:relative;
	width: min-content;
	height: min-content;
`