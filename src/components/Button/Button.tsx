import styles from './Button.module.css';
import type { ButtonProps } from './Button.types';

export const Button = ({ content }: ButtonProps) => {
   return <button className={styles.button}>{content}</button>;
};
