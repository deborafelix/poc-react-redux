import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Input, AddButton, Task, Remove, NewTask, AllTasks, TextTask, InputTask } from './styles';
import { AiOutlineDelete } from "react-icons/ai";

import Footer from '../../components/Footer';
import {AddTask, RemoveTask, CheckedTask} from '../../store/actions'

class ToDo extends Component {
    
    state ={
        name: '',
        done: false,
        tasks: [],
    }  

    render() {
    const {tasks} = this.props;
    const dispatch = this.props.dispatch;

    const handleOnChange = (event) => {
        this.setState({name: event.target.value})
    }

    const handleOnClick = (event) => {
        event.preventDefault();
        const payload = {name: this.state.name, done: this.state.done};
        dispatch(AddTask(payload));
    }

    const handleOnRemove = (event, index) => {
        event.preventDefault();
        // const payload = index;
        dispatch(RemoveTask(index));
    }

    const handleChecked = (index) => {
        // const payload = index;
        dispatch(CheckedTask(index));
    }

    return (
        <>
            <View>
            <NewTask>
                <Input onChange={handleOnChange} value={this.state.name}/>
                <AddButton onClick={handleOnClick}>+</AddButton>
            </NewTask>
            <AllTasks>
                {tasks.map((task, index) => (
                    <Task>
                        <InputTask type="checkbox" checked={task.done} onChange={() => handleChecked(index)}/>
                        <TextTask>{task.name}</TextTask>
                        <Remove onClick={(event) => handleOnRemove(event, index)}>
                            <AiOutlineDelete size={18} color="#FF1654" />
                        </Remove>
                    </Task>
                ))}
                
            </AllTasks>
            </View>
            <Footer />
        </>
        
    )
  }
}



export default connect((state) => ({ tasks: state.tasks }))(ToDo);