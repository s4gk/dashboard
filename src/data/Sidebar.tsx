import { DashboardIcon } from '@/icons';

export const sidebar_data = [
   {
      section: 'Menu',
      items: [
         {
            title: 'Dashboard',
            icon: <DashboardIcon />,
            children: [
               { title: 'Ecommerce', path: '/dashboard/ecommerce' },
               { title: 'Analytics', path: '/dashboard/analytics' },
               { title: 'Marketing', path: '/dashboard/marketing' },
            ],
         },
         {
            title: 'Menu',
            icon: <DashboardIcon />,
            path: '/dashboard'
         }
      ],
   },
];
