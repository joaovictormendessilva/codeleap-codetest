// CSS Module for Main screen
import styles from './Post.module.css';

// Button Images
import deleteButton from '../../assets/delete.png';

// React Router DOM
import { useNavigate } from 'react-router-dom';

// Date FNS
import { formatDistanceToNow } from 'date-fns';

// Axios
import axios from 'axios';

// Modal Component
import { DeleteModal } from '../DeleteModal/DeleteModal';

// React Hooks
import { useState } from 'react';
import { EditModal } from '../EditModal/EditModal';


export function Post({ idPost, username, createdDateTime, title, content, nameUserLogged }){

    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);

    // Navigate React Router DOM
    const navigate = useNavigate();

    // Post Hour Conversion
    const dateConversion = new Date(createdDateTime);
    const publishedDateRelativeToNow = formatDistanceToNow(dateConversion)

    function toggleIsOpenDeleteModal(){
        setIsOpenDeleteModal(!isOpenDeleteModal)
    }

    function toggleIsOpenEditModal(){
        setIsOpenEditModal(!isOpenEditModal)
    }

   

    async function deletePost(id){
        await axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`)
        navigate(0);
    }

    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <h4>{title}</h4>

                {nameUserLogged == username ?
                    <div className={styles.actionsPost}>
                        <button onClick={() => setIsOpenDeleteModal(true)}>
                            <img src={deleteButton} alt="" />
                        </button>
                        <button onClick={() => setIsOpenEditModal(true)}>
                            <i className="bi bi-pencil-square"></i>
                        </button>
                    </div>
                    :
                    <></>
                }
            </div>

            <div className={styles.postContentContainer}>
                <div className={styles.userAndDate}>
                    <h4>@{username}</h4>
                    <span>{publishedDateRelativeToNow} ago</span>
                    
                </div>

                <div className={styles.postContent}>
                    <p>
                        {content}
                    </p>
                </div>
            </div>

            <DeleteModal 
                isOpenDeleteModal={isOpenDeleteModal} 
                toggleIsOpenDeleteModal={toggleIsOpenDeleteModal} 
                idPost={idPost}
                onDeletePost={deletePost}
            />

            <EditModal 
                isOpenEditModal={isOpenEditModal} 
                toggleIsOpenEditModal={toggleIsOpenEditModal}
                idPost={idPost}
                title={title}
                content={content}
            />

        </div>
    );
};

