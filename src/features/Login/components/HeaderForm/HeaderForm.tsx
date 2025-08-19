import styles from './HeaderForm.module.css';
import logo from '@/assets/logo.png';

export const HeaderForm = () => {
   return (
      <div className={styles.background}>
         <img src={logo} alt="Logo Image" />
         <p>La calle habla, el estilo responde. En Factos Shop, tu ropa es tu voz.</p>
      </div>
   );
};
