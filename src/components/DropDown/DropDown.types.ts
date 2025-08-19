import type React from 'react';
import type { ListProps } from '../List/List.types';

export interface DropDownProps {
   active: boolean;
   icon: React.ReactNode;
   text: string;
   data: ListProps[];
}
