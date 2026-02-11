import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import StudentLayout from "../layouts/StudentLayout";
import SubmitCode from "../pages/student/SubmitCode";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<SubmitCode />} />
        <Route path="submit" element={<SubmitCode />} />
      </Route>
    </Routes>
  );
}
