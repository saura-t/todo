import {AiOutlineDelete} from 'react-icons/ai'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} 
        onDoubleClick={()=> onToggle(task.id)}>
            <h3>{task.text} 
            <AiOutlineDelete 
            style={{color: 'red', cursor: 'pointer'}}
            onClick={()=>onDelete(task.id)}/></h3>
            <p>
                {task.day}
            </p>
        </div>
    )
}

export default Task
