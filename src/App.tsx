import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";

// PROJECT
import Description from "./pages/project/description";
import Design from "./pages/project/design";
import POC from "./pages/project/poc";
import Engineering from "./pages/project/engineering";
import Results from "./pages/project/results";
import Implementation from "./pages/project/implementation";
import Safety from "./pages/project/safety";
import Contribution from "./pages/project/contribution";

// WET LAB
import Experiments from "./pages/wetlab/experiments";
import Notebook from "./pages/wetlab/notebook";
import Measurement from "./pages/wetlab/measurement";
import LabSafety from "./pages/wetlab/labsafety";

// DRY LAB
import Model from "./pages/drylab/model";
import Software from "./pages/drylab/software";

// TEAM
import Members from "./pages/team/members";
import Attributions from "./pages/team/attributions";
import Medals from "./pages/team/medals";
import Sponsers from "./pages/team/sponsers";

// ENGAGEMENT
import HP from "./pages/engagement/hp";
import Collaboration from "./pages/engagement/collab";
import Sustainability from "./pages/engagement/sustainability";
import Education from "./pages/engagement/edu";

function App() {
  return (
    <Router>
      {/* APP SHELL — NO BACKGROUND, NO CENTERING */}
      <div className="min-h-screen flex flex-col">

        <Header />

        {/* ROUTES — FULL WIDTH */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            {/* PROJECT */}
            <Route path="/project/description" element={<Description />} />
            <Route path="/project/design" element={<Design />} />
            <Route path="/project/poc" element={<POC />} />
            <Route path="/project/engineering" element={<Engineering />} />
            <Route path="/project/results" element={<Results />} />
            <Route path="/project/implementation" element={<Implementation />} />
            <Route path="/project/safety" element={<Safety />} />
            <Route path="/project/contribution" element={<Contribution />} />

            {/* WET LAB */}
            <Route path="/wetlab/experiments" element={<Experiments />} />
            <Route path="/wetlab/notebook" element={<Notebook />} />
            <Route path="/wetlab/measurement" element={<Measurement />} />
            <Route path="/wetlab/labsafety" element={<LabSafety />} />

            {/* DRY LAB */}
            <Route path="/drylab/model" element={<Model />} />
            <Route path="/drylab/software" element={<Software />} />

            {/* TEAM */}
            <Route path="/team/members" element={<Members />} />
            <Route path="/team/attributions" element={<Attributions />} />
            <Route path="/team/medals" element={<Medals />} />
            <Route path="/team/sponsers" element={<Sponsers />} />

            {/* ENGAGEMENT */}
            <Route path="/engagement/hp" element={<HP />} />
            <Route path="/engagement/collab" element={<Collaboration />} />
            <Route path="/engagement/sustainability" element={<Sustainability />} />
            <Route path="/engagement/education" element={<Education />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
