import type React from 'react';
import type { ListProps } from '../List/List.types';

export interface DropDownProps {
   icon: React.ReactNode;
   title: string;
   children: ListProps[];
}
