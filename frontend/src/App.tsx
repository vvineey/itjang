import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import ClosetPage from "./pages/ClosetPage";
import ClosetRegisterPage from "./pages/ClosetRegisterPage";
import HomePage from "./pages/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";
import RecommendationResultPage from "./pages/RecommendationResultPage";
import RecommendationSelectPage from "./pages/RecommendationSelectPage";
import UserProfilePage from "./pages/UserProfilePage";

const App = () => (
  <Routes>
    <Route element={<AppShell />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="/closet" element={<ClosetPage />} />
      <Route path="/closet/register" element={<ClosetRegisterPage />} />
      <Route path="/recommend" element={<RecommendationSelectPage />} />
      <Route path="/recommend/result" element={<RecommendationResultPage />} />
      <Route path="/community" element={<PlaceholderPage title="커뮤니티" />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
