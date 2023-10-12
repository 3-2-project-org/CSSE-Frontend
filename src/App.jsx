import { Route, Routes } from "react-router-dom";
import Login from "./components/organisms/auth/Login/Login";
import ResetPassword from "./components/organisms/auth/reset-password/ResetPassword";
import AdminRoutes from "./views/admin-view";
import ProcumentRoutes from "./views/procument-view";
import SiteManagerRoutes from "./views/site-manager-view";
import SupplierRoutes from "./views/supplier-view";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Route>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/supplier/*" element={<SupplierRoutes />} />
        <Route path="/procument/*" element={<ProcumentRoutes />} />
        <Route path="/manager/*" element={<SiteManagerRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
