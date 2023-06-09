import TodoApp from "./TodoApp";
//a component
// a functional component is a function that returns html
// when returning html, there can only be one parent element
// import FavoriteThings from "./favoriteThings";

import{useState} from "react";
function App() {

const[showTodoApp, setShowTodoApp] = useState(true);


  return (
    <div className="App">
      <button onClick={() => setShowTodoApp(!showTodoApp)}> 
      {showTodoApp ? "hide":'show'} Todo App</button>
      {
        showTodoApp ? <TodoApp /> : null
      }
      
        
    </div>
  );
}

export default App;
