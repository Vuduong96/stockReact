import React from 'react';
import styles from './Header.module.css';
import { AiOutlineStock } from 'react-icons/ai';

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.logoContainer}>
            <AiOutlineStock className={styles.logo}/>
            <span>Stock</span>
        </div>

        <div className={styles.userContainer}>
            <div className={styles.user}>V</div>
            <span>Vu</span>
        </div>

    </header>;
}

export default Header