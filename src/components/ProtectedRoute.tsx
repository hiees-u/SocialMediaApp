// src/components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useNotificationStore } from "@/store/notificationStore";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { token, loading } = useAuthStore();
  const addNotification = useNotificationStore((state) => state.addNotification);

   if (loading) {
    return <div>Loading...</div>;
  }

  if(!token)
    addNotification("You must be logged in to access this page.");

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
