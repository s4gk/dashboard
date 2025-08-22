import { sidebar_data } from '@/data/Sidebar';
import { SectionMenu } from './SectionMenu/SectionMenu';

export const SidebarFeatures = () => {
   return (
      <>
         {sidebar_data.map(({ section, items }) => (
            <SectionMenu key={section} section={section} items={items} />
         ))}
      </>
   );
};
