import { Link } from 'react-router-dom';
import type { ListProps } from './List.types';

export const List = ({ icon, title, path }: ListProps) => {
   return (
      <li>
         <Link to={path}>
            {icon && <span>{icon}</span>}
            <span>{title}</span>
         </Link>
      </li>
   );
};
