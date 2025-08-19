import { DashboardLayout } from '@/layout/DashboardLayout';
import { Login, Dashboard } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<DashboardLayout />}>
               <Route path="/" element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<Login />} />
         </Routes>
      </BrowserRouter>
   );
};
