// CSS Module for Modal Delete
import styles from './DeleteModal.module.css';

export function DeleteModal({ isOpenDeleteModal, toggleIsOpenDeleteModal, idPost, onDeletePost }){

    if (isOpenDeleteModal) {
        return(
            <div className={styles.deleteModal}>
                <div className={styles.modalContent}>
                    <h4 className={styles.modalTitle}>Are you sure you want to delete this item?</h4>
                    <div className={styles.modalActions}>
                        <button className={styles.cancelButton} onClick={() => toggleIsOpenDeleteModal()}>Cancel</button>
                        <button className={styles.DeleteButton} onClick={() => onDeletePost(idPost)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }

    
};