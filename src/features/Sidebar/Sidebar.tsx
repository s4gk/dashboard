import { sidebar_data } from '@/data/Sidebar';
import { SectionMenu } from './SectionMenu/SectionMenu';

export const Sidebar = () => {
   return (
      <>
         {sidebar_data.map(({ section, items }) => (
            <SectionMenu key={section} items={items} />
         ))}
      </>
   );
};
