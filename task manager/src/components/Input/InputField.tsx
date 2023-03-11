import React, { InputHTMLAttributes } from "react";
import styles from './InputField.module.css';
function InputField(props: insertTaskInput){
    const {placeHolder,type,onChange} = props;
    return (
        <input
         type={type}
         className={styles.insertTaskInput}
         placeholder={placeHolder}
         onChange={onChange}
        />
    )
}
interface insertTaskInput extends InputHTMLAttributes<HTMLInputElement>{
    placeHolder?:string,
    type:string,
}
export default InputField;