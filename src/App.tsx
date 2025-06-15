import { Route, Routes } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import HomePage from "./pages/Dashboard/HomePage";
import IntentOIPage from "./pages/Dashboard/IntentOIPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path="intentoi" element={<IntentOIPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
