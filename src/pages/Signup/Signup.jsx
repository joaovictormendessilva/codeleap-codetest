// CSS Module for Signup
import styles from './Signup.module.css';

// React Hooks
import { useState, useEffect, createContext } from 'react';

export const UserNameContext = createContext(null);

// Navigate React Router DOM
import { useNavigate } from 'react-router-dom';

export function Signup(){

    const [changeUserName, setChangeUserName] = useState('');
    const [userName, setUserName] = useState();
    const isEmptyField = changeUserName.length === 0;

    const navigate = useNavigate();


    function handleChangeUsername(event){
        setChangeUserName(event.target.value);
    }

    async function handleSubmit(event){

        event.preventDefault();

        await setUserName(changeUserName);

         
    }

    useEffect(() => {
        if (userName) {
            navigate({
                pathname: '/mainscreen',
                search: `?name=${userName}`
            });
        }
    }, [userName])

    return (
        <div className={styles.signup}>

            <div className={styles.signupContainer}>
                <h1 className={styles.signupTitle}>Welcome to CodeLeap network!</h1>

                <div className={styles.signupForm}>
                    <form>
                        <label className={styles.signupLabel} htmlFor="username">Please enter your username</label>
                        
                        <input 
                            className={styles.signupInput} 
                            type="text" 
                            name="username"
                            onChange={handleChangeUsername}
                        />
                        
                        <div className={styles.signupButtonContainer}>
                            <button onClick={handleSubmit} className={styles.signupButton} disabled={isEmptyField}>
                                ENTER
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};