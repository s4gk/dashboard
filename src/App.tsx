import { useTheme } from './hooks/useTheme';
import { AppRoutes } from './routes';

export const App = () => {
   useTheme();
   return <AppRoutes />;
};
