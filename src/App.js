import React ,{useState}from "react";
import './App.css';
import Todo from './Todo.js';

function App() {
 const[todos,setTodos]=useState([]);
 const[input,setInput]=useState([""]);
 
 const handleSubmit=(e)=>{
   e.preventDefault();
   setTodos([...todos,input]);
   setInput('');
 }
   
  return (
    <div className="App">
    <h2>To-Do App</h2>
    <form>
    <input value={input} onChange={(e)=> setInput(e.target.value)} type="text"/>
    <button type="submit" disabled={!input} onClick={handleSubmit} >Add Todo</button>
    </form>
    { 
     todos.map((todo,index)=>(
      <Todo key={index} title={`${index+1}:${todo}`}/>
     ))
    }
    </div>
  );
}

export default App;
