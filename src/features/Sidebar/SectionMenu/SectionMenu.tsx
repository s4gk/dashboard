import { DropDown, List } from '@/components';
import type { SectionMenuProps } from './SectionMenu.types';

export const SectionMenu = ({ items }: SectionMenuProps) => {
   return (
      <>
         {items.map(({title, icon, children, path}) => (
         <div>
            <h2>{title}</h2>
            <ul>
               {children ? <DropDown icon={icon} title={title} children={children}/> : path && <List icon={icon} title={title} path={path}/>}
            </ul>
         </div>
         ))}
      </>
   );
};
