import { useState,ChangeEvent } from 'react';
import styles from './WorkBench.module.css';
import InputField from '../Input/InputField';
import Button from '../Button/Button';
import { ITask } from "../Task/Task";
import TaskManager from '../TaskManager/TaskManager';


function WorkBench(){
    const [newInputedTaskValue,setNewInputedTaskValue] = useState('');
    const [tasks,setTasks] = useState<Array<ITask>>([]);



    const onChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setNewInputedTaskValue(event.target.value);
    };

    return(
        <main className={styles.workBenchContainer}>      
        <section className={styles.taskRegisterContainer}>  
            <InputField placeHolder='Adicione uma nova tarefa' type='text' onChange={onChange}/>
            <Button createButton text='Criar' onClick={()=>{
                
                const newTask :ITask = 
                {id:0,taskDescription:newInputedTaskValue,isCompleted:false};
                if(!tasks.length)
                    setTasks([...tasks,newTask])
                else{                    
                    let lastTask =  tasks[tasks.length-1];
                    
                    if(lastTask)
                    newTask.id = lastTask.id + 1;
                    setTasks([...tasks,newTask]);
                }
            }}/>
        </section>
        <TaskManager updateTaskList={setTasks} taskList={tasks} hasAnyTask={!!tasks.length}/>

        </main>
    )
}

export default WorkBench;