import React, { Component } from 'react';

import {TextStatus} from './styles';
import { connect } from 'react-redux';

class Footer extends Component {

  render() {
    const tasks = this.props.tasks;

    const unfinishedTasks = tasks.filter((task) => task.done === false)
    

    return (
        <>
          <TextStatus>all tasks {tasks.length}</TextStatus>
          <br />
          <TextStatus>unfinished tasks {unfinishedTasks.length}</TextStatus>
        </>
      )
  }
}

export default connect((state) => ({ tasks: state.tasks }))(Footer);