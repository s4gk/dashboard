import type { InputProps } from './Input.types';
import styles from './Input.module.css';

export const Input = ({
   label,
   id,
   error,
   placeholder,
   type,
   icon,
   required,
   register,
}: InputProps) => {
   return (
      <div className={styles.input}>
         <label htmlFor={id} className={styles.input__label}>
            {label}
            {required && <span className={styles.input__label_required}>*</span>}
         </label>
         <div className={styles.input__wrapper}>
            <span className={styles.input__icon}>{icon}</span>
            <input
               className={styles.input__input}
               id={id}
               type={type}
               placeholder={placeholder}
               {...register}
               aria-invalid={!!error}
            />
         </div>
         {error && <span className={styles.input__error}>{error}</span>}
      </div>
   );
};
