const Todo = ({todo, onToggle}) => {

    return (
        <div className="flex items-center px-4 pt-4">
            <input type='checkbox'
            className="flex items-center p-2"
            value={todo.status}
            onChange={() => onToggle(todo._id)} />
            <div className="flex flex-col ml-4 font-sans">
                <h4 className={`flex ${todo.status ? 'line-through' : ' text-red-700'}`} >{todo.title} </h4>
                <p className={`flex ${todo.status ? 'line-through' : ''}`} > {todo.time} </p>
            </div>
        </div>
    )
}

export default Todo
