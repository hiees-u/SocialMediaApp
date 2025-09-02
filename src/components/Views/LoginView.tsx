import type { LoginFormValues } from '@/type/type';
import { Controller, type Control, type FieldErrors, type UseFormHandleSubmit } from 'react-hook-form';

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
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="email"
            placeholder="Email"
            className="border rounded p-2 bg-slate-100"
          />
        )}
      />
      {errors.username && (
        <p className="text-red-500 text-sm">{errors.username.message}</p>
      )}

      {/* Password */}
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="password"
            placeholder="Password"
            className="border rounded p-2 bg-slate-100"
          />
        )}
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded"
      >
        Login
      </button>
    </form>
  );
}
