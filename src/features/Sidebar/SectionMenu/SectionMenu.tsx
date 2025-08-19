import type { SectionMenuProps } from './SectionMenu.types';

export const SectionMenu = ({ title, items }: SectionMenuProps) => {
   return (
      <div>
         <h2>{title}</h2>
         <ul></ul>
      </div>
   );
};
