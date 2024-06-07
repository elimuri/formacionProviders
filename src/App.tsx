import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./views/HomePage";
import { LoginPage } from "./views/LoginPage";
import { AboutPage } from "./views/AboutPage";
import { Navbar } from "./views/Navbar";
import { GifProvider } from "./hooks/GifProvider";

export const App = () => {
  return (
    <>
      <GifProvider>
        <Navbar />

        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </GifProvider>
    </>
  );
};
