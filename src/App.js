import React, { useEffect, useState } from "react";

function App() {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);

	 const handleOnClick = () => {
	  setToggle(prev => !prev)
	 }
	useEffect(() => {
	 setTimeout(() => {
	 setData({})
	 },100)
	},[])

	return (
		<div>
			{data && <div  style={{color: 'red'}}>data</div>}
			{toggle===true && <div data-testid='toggle-elem'>toggle</div>}
			<h1>Hello world</h1>
			<button data-testid ='toggle-btn' onClick={handleOnClick}>click me</button>
			<input type="text" placeholder="input value ..." />
		</div>
	);
}

export default App;
