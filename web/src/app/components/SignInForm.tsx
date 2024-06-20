import { ReactElement } from 'react';
import styles from './SignInForm.module.css';

export const SignInForm = (): ReactElement => (
    <form className={styles.form}>
        <div className={styles.formInput}>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" />
        </div>
        <div className={styles.formInput}>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
        </div>
        <div className={styles.formInput}>
            <button>Sign in</button>
        </div>
    </form>
)
