import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import AnalyticsPage from "@/pages/AnalyticsPage";
import Header from "@/layouts/HeaderLayout";
import path from "@/utils/path";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AppRouter() {
  return (
    <Router>
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
    </Router>
  );
}
