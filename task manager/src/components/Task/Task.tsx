import React from "react";
import CheckBox from "../CheckBox/CheckBox";
import styles from './Task.module.css';

export function Task({id,isCompleted,taskDescription}:ITask){

    return(
    <div className={styles.taskWrapper}>
        <CheckBox/>
        <section><span>{taskDescription}</span></section>     
        <input type={"button"}/>   

    </div>)

}


export interface ITask{
    id:number,
    taskDescription:string,
    isCompleted:Boolean
}