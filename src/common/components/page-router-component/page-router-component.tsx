import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { WriteupsPage } from "../../../features/writeupspage/components/writeupspage-component/writeupspage-component";
import { AboutMePage } from "../../../features/aboutmepage/components/aboutmepage-component/aboutmepage-component";
import { HomePage } from "../../../features/homepage/components/homepage-component/homepage-component";
import { GamePage } from "../../../features/gamepage/components/gamepage-component/gamepage-component";
import { NavBar } from "../../../features/navbar/components/navbar-component/navbar-component";
import { ContactPage } from "./contactpage-component";

import "./page-router-component.scss";

export const PageRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="c-navbar__page-wrapper">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/writeups" element={<WriteupsPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
