import logo_light from '@/assets/logo_dark.png';
import { MenuIcon, OptionsIcon } from '@/icons';
import styles from './Header.module.css';

export const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.header__container}>
            <button className={styles.header__menu_button}>
               <MenuIcon />
            </button>
            <div className={styles.header__menu_logo}>
               <img src={logo_light} />
               <p>Factos Shop</p>
            </div>
            <button className={styles.header__menu_options}>
               <OptionsIcon />
            </button>
         </div>
      </header>
   );
};
