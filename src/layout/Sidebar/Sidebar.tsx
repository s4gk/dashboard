import { SidebarFeatures } from '@/features';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
   return (
      <aside className={styles.aside}>
         <nav className={styles.aside__navbar}>
            <SidebarFeatures />
         </nav>
      </aside>
   );
};
