import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import AnalyticsPage from "@/pages/AnalyticsPage";
import Header from "@/layouts/HeaderLayout";
import path from "@/utils/path";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

export default function AppRouter() {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  
  return (
    <HashRouter>
      <div>
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path={path.home.path} element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path={path.login.path} element={<LoginPage />} />
            <Route path={path.analytics.path} element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
