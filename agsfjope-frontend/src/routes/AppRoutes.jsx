import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import StudentLayout from "../layouts/StudentLayout";
import SubmitCode from "../pages/student/SubmitCode";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/student" element={<StudentLayout />}>
        <Route path="submit" element={<SubmitCode />} />
      </Route>
    </Routes>
  );
}
