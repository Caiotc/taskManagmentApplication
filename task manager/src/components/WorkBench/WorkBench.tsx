import styles from './WorkBench.module.css';
import InputField from '../Input/InputField';
import Button from '../Button/Button';


function WorkBench(){

    return(
        <main className={styles.workBenchContainer}>      
        <section className={styles.taskRegisterContainer}>  
            <InputField placeHolder='Adicione uma nova tarefa' type='text'/>
            <Button createButton text='Criar' onClick={()=>console.log("!@# the button was clicked")}/>
        </section>

        </main>
    )
}

export default WorkBench;