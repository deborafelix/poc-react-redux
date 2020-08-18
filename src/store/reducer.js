const INITIAL_STATE = {tasks: []}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ACTION_SET_NEW_TASK':
            return {...state, tasks:[...state.tasks, action.payload]}
        case 'ACTION_SET_REMOVE_TASK':
            return {...state, tasks: state.tasks.filter((task,index) => index !== action.taskIndex)}
        case 'ACTION_SET_CHECKED_TASK':
            return {...state, tasks: state.tasks.map((task,index) => {
                if (index === action.taskIndex) {
                    task.done = !task.done;
                }
                return task;
            })}
             
        default: return state;
    }
}