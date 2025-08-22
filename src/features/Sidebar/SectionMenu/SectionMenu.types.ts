import type { ListProps } from '@/components/List/List.types';
import type React from 'react';

interface MenuItem {
   title: string;
   icon: React.ReactNode;
   path?: string;
   children?: ListProps[];
}

export interface SectionMenuProps {
   section: string;
   items: MenuItem[];
}
