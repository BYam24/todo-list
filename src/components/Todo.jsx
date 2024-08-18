// file name must be cap first
import React, {useEffect, useRef, useState} from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

  const inputRef = useRef(); //use Ref is a react hook that allow us to create mutable variables, which will not re-render the compoent
  //use inputRef to get value in the input field 

  // const [todolist, setTodoList] = useState([]);          instead of empty array we get what is already stored
  const [todolist, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []); //useState is a react hook which creates an "state variable" that helps us track state in components and updates the user interface when state changes

  const add = () =>{
    const inputText = inputRef.current.value.trim();
    console.log(inputText);
    if (inputText === ""){
      return null; //dont do anything when there is no text
    }
    const newTodo = { //create an object newTodo item
      id: Date.now(),
      text: inputText,
      isComplete: false
    }

    setTodoList((prev)=> [...prev, newTodo]) //take current todolist and add the newTodo item to it
    inputRef.current.value = ""; //make the input value blank after the button is clicked
  } //we will add a anonymous function 


  const deleteTodo = (id) => {
    setTodoList((prvTodos)=> {
      return prvTodos.filter((todo) => todo.id !== id) //make the todolist ref (mutable variable) the filtered list where prvTodos is the current list and todo are elements of the list
    })
  }

  const toggle = (id) =>{
    setTodoList((prevTodos)=>{
      return prevTodos.map((todo) => {
        if (todo.id === id){
          return {...todo, isComplete: !todo.isComplete} 
        }
        return todo
      })
    })
  }

  useEffect(()=>{ //allow you to perform side effect in component: detching data from API, directly updating the DOM, timers like SetTimeOut
    console.log(todolist); //print array that's it
    localStorage.setItem("todos", JSON.stringify(todolist)) //local storage is the browser storage, we want to save our list
  },[todolist]) // {} is a dependencies array

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>  {/* do css inside here */}


      {/* ------------title----------- */}
      <div className='flex items-center mt-7 gap-2'>
        <img src={todo_icon} alt="" className='w-8' />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>

      </div>

      {/* -------input box----------- */}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        {/* ref captures the input in the input box and send it to inputRef */}
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
        {/* when the button is clicked, the function add is triggered */}
        <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-large font-medium cursor-pointer'> ADD +</button>
        
      </div>

      {/*--------- todo list -------- */}
      <div>
        {todolist.map((item, index)=> {
          return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/> })}  {/* variable needs to be in curly braces/ we will use map function to make todo item */}
        {/* we can link the function deleteTodo to be used by TodoItems component */}


        {/* <TodoItems text='l'></TodoItems>
        <TodoItems text='learn react'/> */}
      </div>
    </div>
  )
}

export default Todo
