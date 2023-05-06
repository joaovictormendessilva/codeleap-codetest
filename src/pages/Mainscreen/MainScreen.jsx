// CSS Module for Main screen
import styles from './MainScreen.module.css';

import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

// Axios
import axios from 'axios';

// Post Component
import { Post } from '../../components/Post/Post';


export function MainScreen(){

    const [changeTitle, setChangeTitle] = useState('');
    const [changeTextArea, setChangeTextArea] = useState('');
    const [data, setData] = useState([]);

    const isEmptyFields = changeTitle.length === 0 | changeTextArea.length === 0;

    const [searchParams] = useSearchParams();
    const nameUserLogged = searchParams.get('name');

    const navigate = useNavigate();

    function handleChangeTitle(event){
        setChangeTitle(event.target.value);
    }

    function handleChangeTextArea(event){
        setChangeTextArea(event.target.value);
    }

    function handleSubmitPost(event){

        event.preventDefault();

        axios.post(`https://dev.codeleap.co.uk/careers/`, {
            username: nameUserLogged,
            title: changeTitle,
            content: changeTextArea
        })
        navigate(0);
    }

    useEffect(() => {
        axios.get(`https://dev.codeleap.co.uk/careers/`)
        .then(({data}) => {
            setData(data.results);
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className={styles.mainScreen}>
            <div className={styles.container}>
                <header>
                    <h1>CodeLeap Network</h1>
                </header>

                <div className={styles.mainScreenForm}>
                    <form onSubmit={handleSubmitPost}>
                        <h4>What's on your mind?</h4>

                        <div className={styles.formControl}>
                            <label htmlFor="title">Title</label>
                            <input 
                                className={styles.titleInput} 
                                type="text" 
                                name='title' 
                                placeholder='Enter title here'
                                onChange={handleChangeTitle}
                            />
                        </div>
                        <div className={styles.formControl}>
                            <label htmlFor="content">Content</label>
                            <textarea 
                                className={styles.contentArea} 
                                name="content" 
                                placeholder="Describe here what's on your mind..."
                                onChange={handleChangeTextArea}
                                />
                        </div>

                        <div className={styles.mainScreenButtonContainer}>
                            <button type='submit' className={styles.mainScreenCreateButton} disabled={isEmptyFields}>
                                Create
                            </button>
                        </div>
                    </form>
                </div>

                {data.map((data, index) => {
                    return <Post 
                            key={index}
                            idPost={data.id} 
                            username={data.username} 
                            createdDateTime={data.created_datetime} 
                            title={data.title} 
                            content={data.content}
                            nameUserLogged={nameUserLogged}
                        />
                })}
            </div>
        </div>
    );
};