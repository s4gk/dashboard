import type { UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps {
   label: string;
   id: string;
   error?: string;
   placeholder: string;
   type: string;
   icon: React.ReactNode;
   required?: boolean;
   register: UseFormRegisterReturn;
}
