import { useState,ChangeEvent, useEffect } from 'react';
import styles from './WorkBench.module.css';
import InputField from '../Input/InputField';
import Button from '../Button/Button';

interface Task{
    index:number,
    taskDescription:string,
    isCompleted:Boolean
}
function WorkBench(){
    const [newInputedTaskValue,setNewInputedTaskValue] = useState('');
    const [tasks,setTasks] = useState<Array<Task>>([]);



    const onChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setNewInputedTaskValue(event.target.value);
    };

    useEffect(()=>{console.log("!@# taks atualizadas ",tasks,newInputedTaskValue)},[tasks,newInputedTaskValue]);
    return(
        <main className={styles.workBenchContainer}>      
        <section className={styles.taskRegisterContainer}>  
            <InputField placeHolder='Adicione uma nova tarefa' type='text' onChange={onChange}/>
            <Button createButton text='Criar' onClick={()=>{
                
                const newTask :Task = 
                {index:0,taskDescription:newInputedTaskValue,isCompleted:false};
                if(!tasks.length)
                    setTasks([...tasks,newTask])
                else{                    
                    let lastTask =  tasks[tasks.length-1];
                    
                    if(lastTask)
                    newTask.index = lastTask.index + 1;
                    setTasks([...tasks,newTask]);
                }
            }}/>
        </section>

        </main>
    )
}

export default WorkBench;