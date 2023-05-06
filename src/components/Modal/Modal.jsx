import styles from './Modal.module.css';

export function Modal({ isOpenModal, toggleIsOpenModal, idPost, onDeletePost }){

    if (isOpenModal) {
        return(
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <h4 className={styles.modalTitle}>Are you sure you want to delete this item?</h4>
                    <div className={styles.modalActions}>
                        <button className={styles.cancelButton} onClick={() => toggleIsOpenModal()}>Cancel</button>
                        <button className={styles.DeleteButton} onClick={() => onDeletePost(idPost)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }

    
};