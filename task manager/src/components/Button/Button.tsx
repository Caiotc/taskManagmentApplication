import React, { Fragment } from "react";
import styles from './Button.module.css';
import {PlusCircle} from '@phosphor-icons/react';
function Button(props :CreateButton){

    const {onClick,text,defaultButton,createButton} = props;
    
    const returnTextAndPlusCircle = () => createButton && (<Fragment><div><p>{text}</p></div><PlusCircle size={20}/></Fragment>);
    const returnDefaultButton =() => defaultButton && (<div>{text}</div>);
    
    return(
    <button className={ createButton && styles.createButton} onClick={onClick}>
            <div className={createButton && styles.plusCircleAndTextWrapper}>
                {returnTextAndPlusCircle()}
                {returnDefaultButton()}
            </div>
    </button>
    )
}

interface CreateButton{
    onClick: ()=>void,
    defaultButton?:Boolean,
    createButton?:Boolean,
    text:string
}
export default Button;