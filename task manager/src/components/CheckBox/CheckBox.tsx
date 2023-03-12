import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import styles from './CheckBox.module.css';
import { Check, Circle } from "@phosphor-icons/react";


function CheckBox(props: ICheckBox) {
    const { toggleTask } = props;
    const [inputChecked, setInputChecked] = useState(false);
    
    const onClickNewRadioButton = () => {
        toggleTask();
        setInputChecked(!inputChecked);
    }

    const renderCheckBoxState = () => inputChecked ? 
    (<div className={styles.CheckCircleWrapper}onClick={onClickNewRadioButton}>
        <Check  size={16} />
    </div>) : 
    (<div onClick={onClickNewRadioButton} className={styles.checkBoxCustomStyle}>

    </div>)

    return (
        <div className={styles.checkBoxWrapper}>
            <input className={styles.checkRemoveTraditionalRadio} type="radio" checked />
            {renderCheckBoxState()}
        </div>
    )
}

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
    toggleTask: () => void
}

export default CheckBox;