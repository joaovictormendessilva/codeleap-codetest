import styles from './Loader.module.css';

import arrowLoad from '../../assets/arrowload.svg'

export function Loader(){
    return (
        <div className={styles.loader}>
            <img src={arrowLoad} alt="" />
        </div>
    );
};