// CSS Module for Modal Edit
import styles from './EditModal.module.css';

// React Hooks
import { useState } from 'react';

// Axios
import axios from 'axios';

// React Router DOM
import { useNavigate } from 'react-router-dom';

export function EditModal({ isOpenEditModal, toggleIsOpenEditModal, idPost, title, content, editPost }){

    const [changeTitleToEdit, setChangeTitleToEdit] = useState('');
    const [changeContentToEdit, setChangeContentToEdit] = useState('');

    const navigate = useNavigate();

    function handleChangeTitleToEdit(event){
        setChangeTitleToEdit(event.target.value);
        event.target.setCustomValidity("");
    }

    function handleChangeContentToEdit(event){
        setChangeContentToEdit(event.target.value);
        event.target.setCustomValidity("");
    }

    function handleEdit(event){
        event.preventDefault();
        editPost(idPost);
    }

    function editPost(id){
        axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, {
            title: changeTitleToEdit,
            content: changeContentToEdit
        })
        navigate(0)
    }

    function customValidity(event){
        event.target.setCustomValidity('Please fill in this field.')
    }

    if (isOpenEditModal) {
        return (
            <div className={styles.editModal}>
                <div className={styles.modalContent}>
                    <form onSubmit={handleEdit}>
                        <h4>Edit item</h4>
                        
                        <input type="hidden" value={idPost}/>
                        <div className={styles.formControl}>
                            <label htmlFor="title">Title</label>
                            <input 
                                className={styles.titleInput} 
                                type="text" 
                                name='title' 
                                placeholder='Enter text here to edit'
                                defaultValue={title || ''}
                                onChange={handleChangeTitleToEdit}
                                required
                                onInvalid={customValidity}
                            />
                        </div>
    
                        <div className={styles.formControl}>
                            <label htmlFor="content">Content</label>
                            <textarea 
                                className={styles.contentArea} 
                                name="content" 
                                placeholder="Edit the content here..."
                                defaultValue={content || ''}
                                onChange={handleChangeContentToEdit}
                                required
                                onInvalid={customValidity}
                            />
                        </div>
    
                        <div className={styles.modalActions}>
                            <button className={styles.cancelButton} onClick={() => toggleIsOpenEditModal()}>Cancel</button>
                            <button type='submit' className={styles.confirmButton}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    
};