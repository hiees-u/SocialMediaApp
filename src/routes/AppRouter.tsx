import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import AnalyticsPage from "@/pages/AnalyticsPage";
import Header from "@/layouts/HeaderLayout";
import path from "@/utils/path";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path={path.home} element={<HomePage />} />
            <Route path={path.login} element={<LoginPage />} />
            <Route path={path.analytics} element={<AnalyticsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
