import { Link } from 'react-router-dom';
import type { ListProps } from './List.types';
import styles from './List.module.css';

export const List = ({ icon, title, path }: ListProps) => {
   return (
      <li className={styles.list} >
         <Link to={path} className={styles.list__button} >
            {icon && <span>{icon}</span>}
            <span>{title}</span>
         </Link>
      </li>
   );
};
