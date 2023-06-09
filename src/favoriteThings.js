//props can only be passed down, they cannot be passed up
import { useState } from "react"; //importing the useState function from the react library
// in React if we want UI to update/"re-render" we need to trigger a state change
//hooks are a way to manage state in a functional component
//hooks always start with the word use
//useState is a function that returns an array with two elements
//it takes one argument, the default value of the state
//the first element in the array is the current value of the state
//the second element in the array is a function that allows us to update the state
//we can name these whatever we want



function FavoriteThings(props) {
  const [count, setCount] = useState(0);


 
	return (
		<div>
      <h1>My name is {props.name}</h1>
      <p>{count}</p>
      <button 
      onClick={() => {
        setCount(count + 1);
      }}

      >Increment</button> 
      <button 
      onClick={() => {
        if (count > 0) {
        setCount(count - 1);
        }
      }}

      >Decrement</button> 
		</div>
	);
}

export default FavoriteThings;
