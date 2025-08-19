import { LoginPage } from '@/features/Login/LoginPage';
import styles from './Login.module.css';

export const Login = () => {
   return (
      <div className={styles.login}>
         <LoginPage />
      </div>
   );
};
