// src/components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useNotificationStore } from "@/store/notificationStore";
import { useEffect } from "react";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { token, loading } = useAuthStore();
  const addNotification = useNotificationStore((state) => state.addNotification);

  useEffect(() => {
    if (!loading && !token) {
      addNotification("You must be logged in to access this page.");
    }
  }, [loading, token, addNotification]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
