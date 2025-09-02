import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthStore } from "@/store/authStore";
import { useNotificationStore } from "@/store/notificationStore";
import { useNavigate } from "react-router-dom";
import LoginFormView from "@/components/Views/LoginView";
import schemaLogin from "@/schemas/login";
import type { LoginFormValues } from "@/type/type";

export default function LoginFormContainer() {
  const login = useAuthStore((state) => state.login);
  const addNotification = useNotificationStore((state) => state.addNotification);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      username: "",
      password: "",
    },
  });

   const onSubmit = async (data: LoginFormValues) => {
    const result = await login(data.username, data.password);
    
    if (result.success) {
      navigate("/");
      reset();
    }
    addNotification(result.message);
  };

  return (
    <LoginFormView
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit} // truyền xuống view
    />
  );
}
