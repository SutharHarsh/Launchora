import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import ResetPasswordPage from "./components/ResetPasswordPage";
import DemoPage from "./components/DemoPage";
import Toaster from "./components/ui/toaster";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="justify-center align-middle items-center">

      <Routes >
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="*" element={<SignInPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}
