import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./views/HomePage";
import { LoginPage } from "./views/LoginPage";
import { AboutPage } from "./views/AboutPage";
import { Navbar } from "./views/Navbar";
import { UserProvider } from "./hooks/UserProvider";

export const App = () => {
  return (
    <>
      <h1>MainApp</h1>

      <UserProvider>
        <Navbar />

        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </UserProvider>
    </>
  );
};
