import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import ResetPasswordPage from "./components/ResetPasswordPage";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="*" element={<SignInPage />} />
    </Routes>
  );
}
