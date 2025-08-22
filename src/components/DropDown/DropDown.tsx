import { List } from '@/components/index';
import { useState } from 'react';
import type { DropDownProps } from './DropDown.types';
import styles from './DropDown.module.css';
import { ArrowIcon } from '@/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const DropDown = ({ icon, title, children }: DropDownProps) => {
   const [active, setActive] = useState<boolean>(false);

   const handleActive = () => {
      setActive(!active);
   };

   return (
      <li className={styles.dropdown}>
         {/* Button Dropdown Menu */}
         <Link to={'#'} onClick={() => handleActive()} className={styles.dropdown__button}>
            <div className={styles.dropdown__button_section}>
               <span>{icon}</span>
               <span>{title}</span>
            </div>
            <motion.span
               animate={{ rotate: active ? 180 : 0 }}
               transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
               <ArrowIcon />
            </motion.span>
         </Link>
         {/* Sub Menu Dropdown */}
         <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: active ? 'auto' : 0, opacity: active ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={active ? styles.submenu__section_active : styles.submenu__section_hidden}
         >
            <ul className={styles.submenu__section_menu}>
               {children.map(({ title, path }) => (
                  <List key={path} title={title} icon={icon} path={path} />
               ))}
            </ul>
         </motion.div>
      </li>
   );
};
