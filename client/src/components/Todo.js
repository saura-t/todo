const Todo = ({todo, onToggle}) => {

    return (
        <div className="flex items-baseline px-4 pt-4">
            <input type='checkbox'
            value={todo.status}
            onChange={() => onToggle(todo.id)} />
            <h4 className={`ml-2 font-sans ${todo.status ? 'line-through' : ' text-red-700'}`} >{todo.title} </h4>
        </div>
    )
}

export default Todo
