import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";
import AdminLayout from "./components/AdminLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<AdminLayout />}>
            <Route path="/Admin" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;