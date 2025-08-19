import { List } from '@/components/index';
import type { DropDownProps } from './DropDown.types';
import { ArrowDownIcon } from '@/icons/ArrowDownIcon';
import { ArrowUpIcon } from '@/icons/ArrowUpIcon';

export const DropDown = ({ active, icon, text, data }: DropDownProps) => {
   return (
      <li>
         <button>
            <span>{icon}</span>
            <span>{text}</span>
            <span>{active ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
         </button>
         <div>
            <ul>
               {data.map(({ icon, label }) => (
                  <List key={label} label={label} icon={icon} />
               ))}
            </ul>
         </div>
      </li>
   );
};
