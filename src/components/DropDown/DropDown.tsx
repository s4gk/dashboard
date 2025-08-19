import { List } from '@/components/index';
import type { DropDownProps } from './DropDown.types';
import { ArrowDownIcon } from '@/icons/ArrowDownIcon';
import { ArrowUpIcon } from '@/icons/ArrowUpIcon';
import { useState } from 'react';

export const DropDown = ({icon, title, children }: DropDownProps) => {
   const [active, setActive] = useState<boolean>(false);
   
   const handleActive = () => {
      setActive(!active);
   }

   return (
      <li>
         <button onClick={() => handleActive()}>
            <span>{icon}</span>
            <span>{title}</span>
            <span>{active ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
         </button>
         <div>
            <ul>
               {children.map(({ title, path }) => (
                  <List key={path} title={title} icon={icon} />
               ))}
            </ul>
         </div>
      </li>
   );
};
