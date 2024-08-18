import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'



const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div onClick={()=> {toggle(id)}} className='flex items-center my-3 gap-2'> 
      <div className='flex flex-1 items-center cursor-pointer'>
        <img src={isComplete ? tick : not_tick} alt="" className='w-7'/> {/*  ternary is used if isComplete then tick else not_tick */}
        <p className={`tex-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through": "" }`}> {text} </p> {/* added curly braces so that it is a variable */}
        {/* used $ to add ternary in the styling / also use backticks */}
      </div>
      <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-3.5' /> {/* the delete function is from the parent todo.jsx */}
      
    </div>
  )
}

export default TodoItems
