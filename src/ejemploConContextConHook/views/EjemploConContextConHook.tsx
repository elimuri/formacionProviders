import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./_components/HomePage";
import { LoginPage } from "./_components/LoginPage";
import { AboutPage } from "./_components/AboutPage";
import { Navbar } from "./_components/Navbar";
import { GifProvider } from "../providers/GifProvider";

export const EjemploConContextConHook = () => {
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
