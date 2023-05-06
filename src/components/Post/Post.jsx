// CSS Module for Main screen
import styles from './Post.module.css';

// Button Images
import deleteButton from '../../assets/delete.png';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Post({ idPost, username, createdDateTime, title, content, nameUserLogged }){

    const navigate = useNavigate();

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
                        <button onClick={() => deletePost(idPost)}>
                            <img src={deleteButton} alt="" />
                        </button>
                        <button>
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
                    <span>25 minutes ago</span>
                </div>

                <div className={styles.postContent}>
                    <p>
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
};

