import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

let [todos , setTodos] = useState([{task:"sample task", id :uuidv4(),isDone:false}]);
let [newTodo,setNewTodo] = useState("");


let addNewTask = ()=>{
    setTodos((prevTodos)=>{
   return [...prevTodos,{task:newTodo,id:uuidv4()}]
    });
    setNewTodo("");
};

let updateTodoValue=(event)=>{
    setNewTodo(event.target.value)
}

let deleteTodo = (id)=>{
    setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id != id));
}

let upperCaseAll = () => {
setTodos((prevTodos)=> prevTodos.map((todo)=>{
    return {
        ...todo, task : todo.task.toUpperCase()
    }
}));



}

let upperCaseOne = (id)=>{
    
    setTodos((prevTodos)=> prevTodos.map((todo)=>{
        if(todo.id == id){
    return {
        ...todo, task : todo.task.toUpperCase()
    }
}else{
    return todo;
}
}))
}

let markDone = (id)=>{

    setTodos((prevTodos)=>prevTodos.map((todo)=>{
        if(todo.id==id){
            return{
                ...todo,isDone: true,
            }
        }else{
                return todo;
            }
    }))
}
    return(
    <div>

        <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />   
        <button onClick={addNewTask}>Add Task</button>
        <br /><br /><br /><br />
        
        <hr />
        <h4>Task Todo</h4>
        <ul>{
            
            todos.map((todo)=>{
              return  <li key={todo.id}>
                <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>{todo.task}</span>
                &nbsp;&nbsp;&nbsp;
                <button onClick={()=>deleteTodo(todo.id)}>delete</button>&nbsp;&nbsp;&nbsp;
                <button onClick={()=>upperCaseOne(todo.id)}>UpperCaseOne</button>
                <button onClick={()=>markDone(todo.id)}>done</button>
                </li>
                
            })
            
            }</ul>
                <br />
            <button onClick={upperCaseAll}>UPPERCASE</button>
    </div>
)
}