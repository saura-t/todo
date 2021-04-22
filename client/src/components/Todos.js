import React from 'react'
import Todo from './Todo'

const Todos = ({todos, onToggle}) => {
    return (
        <div className="flex flex-col justify-center py-5">
            <div className="flex-1 items-center py-5">
                <h4 className="font-serif pl-4 text-2xl">Todo List</h4>
            </div>
            <div className="flex-1 border-t-2 border-red-500">
                {todos.map((todo) => (
                    <Todo onToggle={onToggle} key={todos.id} todo={todo} />
                ))}
            </div>
        </div>
    )
}

export default Todos
