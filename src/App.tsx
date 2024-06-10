import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./ejemploConContext/views/HomePage";
import { LoginPage } from "./ejemploConContext/views/LoginPage";
import { AboutPage } from "./ejemploConContext/views/AboutPage";
import { Navbar } from "./ejemploConContext/views/Navbar";
import { GifProvider } from "./ejemploConContext/hooks/GifProvider";

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
