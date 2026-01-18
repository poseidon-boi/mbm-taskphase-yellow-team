import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/home";

// PROJECT
import Background from "./pages/project/background";
import Description from "./pages/project/description";
import Design from "./pages/project/design";
import Engineering from "./pages/project/engineering";

// WET LAB
import Experiments from "./pages/wetlab/experiments";
import Notebook from "./pages/wetlab/notebook";
import LabSafety from "./pages/wetlab/labsafety";

// DRY LAB
import Model from "./pages/drylab/model";
import Software from "./pages/drylab/software";

// TEAM
import Members from "./pages/team/members";
import Attributions from "./pages/team/attributions";
import Medals from "./pages/team/medals";

// ENGAGEMENT
import HP from "./pages/engagement/humanpractices";
import Sustainability from "./pages/engagement/sustainability";
import Education from "./pages/engagement/education";
import IHP from "./pages/engagement/integratedhumanpractices";


import bgvid from "./assets/bg-vid.mp4";
import plastic from "./assets/plastic.png";
import compound from "./assets/compound.png";
import loadingVideo from "./assets/loading.mp4";

export default function AppContent() {
  const location = useLocation();

  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);

  /* =========================
     1️⃣ INITIAL LOAD (ONCE)
  ========================== */
  useEffect(() => {
    let loaded = 0;
    const total = 4;

    const done = () => {
      loaded += 1;
      if (loaded === total) {
        setTimeout(() => {
          setInitialLoading(false);
          document.body.classList.add("loaded");
        }, 1000);
      }
    };

    [plastic, compound].forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = done;
    });

    const heroVideo = document.createElement("video");
    heroVideo.src = bgvid;
    heroVideo.onloadeddata = done;

    const loaderVideo = document.createElement("video");
    loaderVideo.src = loadingVideo;
    loaderVideo.onloadeddata = done;
  }, []);

  /* =========================
     2️⃣ ROUTE CHANGE LOADER
  ========================== */
  useEffect(() => {
    if (initialLoading) return;

    setRouteLoading(true);

    const timer = setTimeout(() => {
      setRouteLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname, initialLoading]);

  /* =========================
     RENDER LOGIC
  ========================== */
  if (initialLoading || routeLoading) {
    return <Loader onComplete={() => {}} />;
  }

  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* PROJECT */}
        <Route path="/project/background" element={<Background />} />
        <Route path="/project/description" element={<Description />} />
        <Route path="/project/design" element={<Design />} />
        <Route path="/project/engineering" element={<Engineering />} />

        {/* WET LAB */}
        <Route path="/wetlab/experiments" element={<Experiments />} />
        <Route path="/wetlab/notebook" element={<Notebook />} />
        <Route path="/wetlab/labsafety" element={<LabSafety />} />

        {/* DRY LAB */}
        <Route path="/drylab/model" element={<Model />} />
        <Route path="/drylab/software" element={<Software />} />

        {/* TEAM */}
        <Route path="/team/members" element={<Members />} />
        <Route path="/team/attributions" element={<Attributions />} />
        <Route path="/team/medals" element={<Medals />} />

        {/* ENGAGEMENT */}
        <Route path="/engagement/hp" element={<HP />} />
        <Route path="/engagement/ihp" element={<IHP />} />
        <Route path="/engagement/sustainability" element={<Sustainability />} />
        <Route path="/engagement/education" element={<Education />} />
      </Routes>

      <Footer />
    </>
  );
}
