import React from 'react';
import styles from './notFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
        <h1>Ничего не найдено :(</h1>
            </div>
    );
};

export default NotFoundBlock;