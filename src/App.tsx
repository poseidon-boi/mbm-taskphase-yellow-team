import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

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
import HP from "./pages/engagement/hp";
import Sustainability from "./pages/engagement/sustainability";
import Education from "./pages/engagement/education";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header />

      {/* IMPORTANT: let BODY scroll */}
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
