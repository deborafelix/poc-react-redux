export const AddTask = (payload) => {
    return {
        type: 'ACTION_SET_NEW_TASK',
        payload,
    }
}

export const RemoveTask = (taskIndex) => {
    return {
        type: 'ACTION_SET_REMOVE_TASK',
        taskIndex,
    }
}

export const CheckedTask = (taskIndex) => {
    return {
        type: 'ACTION_SET_CHECKED_TASK',
        taskIndex,
    }
}