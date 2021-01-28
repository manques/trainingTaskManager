import React from 'react';
import  './taskManager.css'

class TaskManager  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            taskList: []
        }
    }
    // input handle
    handleInput(e) {
        // console.log(e);
        this.setState({
            task: e.target.value
        });
        this.setState(state => {
            console.log(state.task);
            return state;
        });
    }
    // handle submit
    handleAdd(e) {
        console.log(this.state.task);
        if(this.state.task === undefined || this.state.task === ''){
            return;
        }
        this.setState(state => {
            return {
                taskList: state.taskList.concat(state.task),
                task: '',
            };
        });
        this.setState(state => {
            console.log(state.taskList);
            return state;
        });
    }
    // handle close
    handleClose(task, index, e) {
        console.log(index);
        console.log(e);
        const newTaskList = this.state.taskList.filter(ele => ele !== task);
        console.log(newTaskList);
        this.setState({
            taskList: newTaskList
        });
    }
    render() {
        return(
            <div>
                <h1 className="title">Task Manager</h1>
                <div className="inputContainer">
                    {/* input */}
                    <input type="text"
                           className="input"
                           value={this.state.task}
                           onChange={this.handleInput.bind(this)} />
                    {/* button */}
                    <button type="button" 
                            className="button"
                            onClick={this.handleAdd.bind(this)}>
                        ADD
                    </button>
                </div>
                {/* task list */}
                <div className="inputContainer" style={{marginTop: '10px', display: (this.state.taskList.length > 0 ? '': 'none' )}}>
                    {
                        this.state.taskList.length > 0 ?
                        this.state.taskList.map((task, index) => {
                            return (
                                <div key={'key'+index}
                                     className="taskStyle">
                                    <span>{task}</span>
                                    <span style={{color: 'red'}} onClick={this.handleClose.bind(this, task, index)}>X</span>
                                </div>
                            );
                        })
                        : <span></span>
                    }
                </div>
            </div>
        );
    }
}

export default TaskManager;