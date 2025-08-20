import { List } from '@/components/index';
import type { DropDownProps } from './DropDown.types';
import { ArrowDownIcon } from '@/icons/ArrowDownIcon';
import { ArrowUpIcon } from '@/icons/ArrowUpIcon';
import { useState } from 'react';
import styles from './DropDown.module.css';

export const DropDown = ({ icon, title, children }: DropDownProps) => {
   const [active, setActive] = useState<boolean>(false);

   const handleActive = () => {
      setActive(!active);
   };

   return (
      <li className={styles.dropddown}>
         <button onClick={() => handleActive()} className={styles.dropdown__button}>
            <div className={styles.dropdown__button_section}>
               <span>{icon}</span>
               <span>{title}</span>
            </div>
            <span>{active ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
         </button>
         <div>
            <ul>
               {children.map(({ title, path }) => (
                  <List key={path} title={title} icon={icon} path={path} />
               ))}
            </ul>
         </div>
      </li>
   );
};
