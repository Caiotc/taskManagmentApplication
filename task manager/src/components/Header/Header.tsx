import styles from './Header.module.css';
import todoLogo from '../../assets/todoLogo.svg';

function Header(){

    return <header className={styles.header}>
        <img src={todoLogo} alt="todoLogo"/>
    </header>

}

export default Header;