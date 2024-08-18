// install ES7 React/Redux/GraphQl snippets

//do rafce then tab to create our component (jsx is our component file)

//look at tailwind css docs https://tailwindcss.com/docs/installation to get css class you want

import React from 'react'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className='bg-stone-900 grid py-4 min-h-screen'> {/* grid layout with padding */}
      {/* <h1 className='bg-gray-600 text-white'>Benjamin Yam</h1> the tailwind class "bg-gray" creates gray background and "text-white" makes the text white */}
      {/* <Todo></Todo> would render a ToDo component in App.jsx which is tied to the src in index.html. */}
      <Todo/>
    </div>
  )
}

export default App
