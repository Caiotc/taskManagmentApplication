import React, { InputHTMLAttributes } from "react";
import styles from './CheckBox.module.css';
import { CheckCircle,Circle } from "@phosphor-icons/react";


function CheckBox(props :InputHTMLAttributes<HTMLInputElement>){
    
    return (
        <label>
        {/* <input className={styles.checkBoxCustomStyle} type="radio" onChange={props.onChange}/> */}
        <div className={styles.checkBoxCustomStyle}/>
        <CheckCircle size={24}/>
        <Circle size={24}/>
        </label>
    )
}

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement>{

}

export default CheckBox;