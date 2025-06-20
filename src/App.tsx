import { Route, Routes } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import HomePage from "./pages/Dashboard/HomePage";
import IntentOIPage from "./pages/Dashboard/IntentOIPage";
import Intro from "./pages/Intro";
import CaseSyncPage from "./pages/Dashboard/CaseSyncPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path="intentoi" element={<IntentOIPage />} />
          <Route path="case-sync" element={<CaseSyncPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
