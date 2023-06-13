import { useState } from "react";
import { useSelector } from "react-redux";




const useTodoApp = () => {
	const [todos, setTodos] = useState([]);
	const [todoInput, setTodoInput] = useState("");

	//useEffect takes two arguments
	//the first argument is a function that will run when the component mounts and an array of dependencies
	//when the array of dependencies changes, the function will run again
	// the function inside of useeffect wuill only run when the component mounts
	//mounted means that 'return' has already been called, meaning the html has been rendered

	
	useEffect(() => {
		(async()=>{
			const res = await fetch("https://dummyjson.com/todos");
			const data = await res.json();
			setTodos(data.todos);
		})();

		// fetch("https://dummyjson.com/todos")
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		setTodos(data.todos);
		// 	});


			return () => {
				console.log("component unmounted");
			}
	}, []);

	return (
		<div>
			<h1>TodoApp</h1>
			<input
				type="text"
				onChange={(e) => {
					setTodoInput(e.target.value);
				}}
				value={todoInput}
				placeholder="Enter a todo"
			/>
			<button
				onClick={() => {
					setTodos([...todos, todoInput]);
					setTodoInput("");
				}}
			>
				Add Todo
			</button>
			{todos.length === 0 ? (
				<p>No todos</p>
			) : (
				<ul>
					{todos.map((todo, index) => {
						return (
							<li key={index}>
								<p>{todo.todo}</p>
								<p>Not completed</p>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default useTodoApp;