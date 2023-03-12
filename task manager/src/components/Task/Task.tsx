import React, { useState } from "react";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import InputField from "../Input/InputField";
import styles from './Task.module.css';

export function Task({ id, isCompleted, taskDescription, updateTask, deleteTask }: ITask) {
    const [taskState, setTaskState] = useState(false);
    
    const toggleTask = () => {
        updateTask({ id, isCompleted: !taskState, taskDescription });
        setTaskState(!taskState);
    }
    const removeTask = () =>{
        setTaskState(false);
        deleteTask({ id, isCompleted:taskState, taskDescription });
    }
    const renderTaskDescription = () => taskState? (<section><span className={styles.TaskCompleted}>{taskDescription}</span></section>) :(<section><span>{taskDescription}</span></section>)
    return (
        <div className={styles.taskWrapper}>
            <CheckBox toggleTask={toggleTask} />
            {renderTaskDescription()}
            <Button onClick={removeTask} text="" isDelete/>
            
        </div>)

}


export interface ITask {
    id: number,
    taskDescription: string,
    isCompleted: Boolean,
    updateTask?: any,
    deleteTask?: any,

}