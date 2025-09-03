import type { LoginFormValues } from '@/type/type';
import {
  type Control,
  type FieldErrors,
  type UseFormHandleSubmit,
} from 'react-hook-form';
import Field from '../ui/Field';

interface LoginFormViewProps {
  control: Control<LoginFormValues>;
  errors: FieldErrors<LoginFormValues>;
  handleSubmit: UseFormHandleSubmit<LoginFormValues>;
  onSubmit: (data: LoginFormValues) => void;
}

export default function LoginView({
  control,
  errors,
  handleSubmit,
  onSubmit,
}: LoginFormViewProps) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 max-w-sm mx-auto mt-10"
    >
      <span>eve.holt@reqres.in</span>
      {/* Username */}
      <Field<LoginFormValues>
        name="username"
        control={control}
        errors={errors}
        type="email"
        placeholder="Email"
      />

      {/* Password */}
      <Field<LoginFormValues>
        name="password"
        control={control}
        errors={errors}
        type="password"
        placeholder="Password"
      />

      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Login
      </button>
    </form>
  );
}
