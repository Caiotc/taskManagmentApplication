import React, { useEffect, useState } from "react";
import styles from './TaskManager.module.css';
import { ClipboardText } from '@phosphor-icons/react';
import { ITask, Task } from "../Task/Task";


function TaskManager(props: ITaskManager) {

    const { taskList, hasAnyTask, updateTaskList } = props;
    const [createdTasks, setCreatedTasks] = useState<number>(0);
    const [completedTasks,setCompletedTasks] = useState<number>(0);


    const taskManagerPlaceHolder = () => !hasAnyTask && (

        <div className={styles.taskManagerPlaceHolderEmpty}>
            <ClipboardText size={56} />
            <div>
                <p><strong>Voce ainda nao tem tarefas cadastradas</strong> </p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>


        </div>);

    const taskManagerTasks = () => hasAnyTask && taskList.map(({ id, isCompleted, taskDescription }) => (<Task
        updateTask={(Task:ITask) => {
            let newArray = [...taskList];
            const indexOf = newArray.indexOf(Task);
            newArray[indexOf] = Task;
            updateTaskList(newArray);
            if(Task.isCompleted){
                setCompletedTasks(completedTasks + 1);
            }
            else{
                setCompletedTasks(completedTasks -1);
            }

        }} 
        deleteTask={(Task:ITask)=>{
            updateTaskList(taskList.filter((el)=>el.id !== Task.id));
            setCreatedTasks(createdTasks - 1);
            if(Task.isCompleted)
                setCompletedTasks(completedTasks -1)
        }}
        id={id} isCompleted={isCompleted} taskDescription={taskDescription} />))

    useEffect(() => {
        setCreatedTasks(taskList.length);
    }, [taskList.length]);

    return (
        <main className={styles.taskManagerWrapper}>
            <section className={styles.taskManagerBalance}>
                <div><p>Tarefas criadas <a>{createdTasks}</a></p></div>
                <div><p>Concluidas <a>{`${completedTasks} de ${createdTasks}`}</a></p></div>
            </section>
            <section className={hasAnyTask ? styles.taskManagerContainerHasTask : styles.taskManagerContainer}>
                {taskManagerPlaceHolder()}
                {taskManagerTasks()}
            </section>
        </main>
    )

}

interface ITaskManager {
    taskList: Array<ITask>,
    hasAnyTask: boolean,
    updateTaskList: any

}

export default TaskManager;