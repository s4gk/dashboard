import { DropDown, List } from '@/components';
import styles from './SectionMenu.module.css';
import type { SectionMenuProps } from './SectionMenu.types';

export const SectionMenu = ({ section, items }: SectionMenuProps) => {
   return (
      <>
         <div className={styles.section}>
            <h2 className={styles.section__title}>{section}</h2>
            <ul className={styles.section__ul}>
               {items.map(({ title, icon, children, path }) => (
                  <>
                     {children ? (
                        <DropDown icon={icon} title={title} children={children} />
                     ) : (
                        path && <List icon={icon} title={title} path={path} />
                     )}
                  </>
               ))}
            </ul>
         </div>
      </>
   );
};
