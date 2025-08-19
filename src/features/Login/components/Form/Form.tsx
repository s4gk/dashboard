import { Input, Button, CheckBox } from '@/components/';
import { EmailIcon, PasswordIcon } from '@/icons';
import styles from './Form.module.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginSchema } from '@/schemas/auth.schema';

export const Form = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginSchema>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: '',
         password: '',
         keepSignedId: false,
      },
      mode: 'onSubmit',
   });

   const onSubmit = (data: LoginSchema) => {
      console.log('Datos válidos:', data);
   };

   return (
      <div className={styles.form__wrapper}>
         <h2>Hi, welcome back</h2>
         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
               label="Email"
               placeholder="email@gmail.com"
               id="emailLogin"
               type="email"
               icon={<EmailIcon />}
               required={true}
               error={errors.email?.message}
               register={register('email')}
            />
            <Input
               label="Password"
               placeholder="Enter Your Password"
               id="passwordLogin"
               type="password"
               icon={<PasswordIcon />}
               required={true}
               error={errors.password?.message}
               register={register('password')}
            />
            <div className={styles.form__options}>
               <CheckBox label="Keep me logged in" id="logged" {...register('keepSignedId')} />
               <Link to="#">Forgot Password ?</Link>
            </div>
            <Button content="Login" />
         </form>
         <div className={styles.form__footer}>
            <p>© 2025 Factos Shop. Todos los derechos reservados.</p>
         </div>
      </div>
   );
};
