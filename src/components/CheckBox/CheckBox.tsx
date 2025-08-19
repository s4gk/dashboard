import type { checkboxProps } from './CheckBox.types';
import styles from './CheckBox.module.css';

export const CheckBox = ({ id, name, label }: checkboxProps) => {
   return (
      <div className={styles.checkbox}>
         <input type="checkbox" id={id} name={name} className={styles.checkbox__input} />
         <label htmlFor={id} className={styles.checkbox__label}>
            {label}
         </label>
      </div>
   );
};
