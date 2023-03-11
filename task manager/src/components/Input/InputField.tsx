import React from "react";
import styles from './InputField.module.css';
function InputField(props: insertTaskInput){
    const {placeHolder,type} = props;
    return (
        <input
         type={type}
         className={styles.insertTaskInput}
         placeholder={placeHolder}
         
        />
    )
}
interface insertTaskInput{
    placeHolder?:string,
    type:string,
}
export default InputField;