import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

import loadingVideo from "./assets/loading.mp4";
import bgvid from "./assets/bg-vid.mp4";
import plastic from "./assets/plastic.png";
import compound from "./assets/compound.png";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";

// PROJECT
import Background from "./pages/project/background";
import Description from "./pages/project/description";
import Design from "./pages/project/design";
import Engineering from "./pages/project/engineering";

// WET LAB
import Experiments from "./pages/wetlab/experiments";
import Notebook from "./pages/wetlab/notebook";

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

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  let loaded = 0;
  const total = 4; // 👈 MUST match assets below

  const done = () => {
    loaded += 1;

    if (loaded === total) {
      setTimeout(() => {
        setLoading(false);
        document.body.classList.add("loaded");
      }, 1000); // purposeful 1s delay
    }
  };

  // preload images
  [plastic, compound].forEach(src => {
    const img = new Image();
    img.src = src;
    img.onload = done;
  });

  // preload hero video
  const heroVideo = document.createElement("video");
  heroVideo.src = bgvid;
  heroVideo.onloadeddata = done;

  // preload loader video
  const loaderVideo = document.createElement("video");
  loaderVideo.src = loadingVideo;
  loaderVideo.onloadeddata = done;
}, []);

  if (loading) {
    return <Loader onComplete={() => {}} />;
  }

  return (
    <Router>
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

        {/* DRY LAB */}
        <Route path="/drylab/model" element={<Model />} />
        <Route path="/drylab/software" element={<Software />} />

        {/* TEAM */}
        <Route path="/team/members" element={<Members />} />
        <Route path="/team/attributions" element={<Attributions />} />
        <Route path="/team/medals" element={<Medals />} />

        {/* ENGAGEMENT */}
        <Route path="/engagement/hp" element={<HP />} />
        <Route path="/engagement/sustainability" element={<Sustainability />} />
        <Route path="/engagement/education" element={<Education />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
