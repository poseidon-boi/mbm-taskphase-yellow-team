import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from './pages/home';
// IMPORT ALL YOUR PAGES HERE
import Description from "./pages/project/description";
import Design from "./pages/project/design";
import POC from "./pages/project/poc";
import Engineering from "./pages/project/engineering";
import Results from "./pages/project/results";
import Implementation from "./pages/project/implementation";
import Safety from "./pages/project/safety";
import Contribution from "./pages/project/contribution";

import Experiments from "./pages/wetlab/experiments";
import Notebook from "./pages/wetlab/notebook";
import Measurement from "./pages/wetlab/measurement";
import LabSafety from "./pages/wetlab/labsafety";

import Model from "./pages/drylab/model";
import Software from "./pages/drylab/software";

import Members from "./pages/team/members";
import Attributions from "./pages/team/attributions";
import Medals from "./pages/team/medals";
import Sponsers from "./pages/team/sponsers";

import HP from "./pages/engagement/hp";
import Collaboration from "./pages/engagement/collab";
import Sustainability from "./pages/engagement/sustainability";
import Education from "./pages/engagement/edu";

import Awards from "./pages/awards";

function App() {
  return (
    <Router>
      <div className="bg-gray-300 min-h-screen flex flex-col">

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="flex flex-1 justify-center items-center p-5">
          <Routes>
            {/* PROJECT */}
            <Route path='/home' element={<Home/>}/>
            <Route path="/project/description" element={<Description />} />
            <Route path="/project/design" element={<Design />} />
            <Route path="/project/poc" element={<POC />} />
            <Route path="/project/engineering" element={<Engineering />} />
            <Route path="/project/results" element={<Results />} />
            <Route path="/project/implementation" element={<Implementation />} />
            <Route path="/project/safety" element={<Safety />} />
            <Route path="/project/contribution" element={<Contribution />} />

            {/* WETLAB */}
            <Route path="/wetlab/experiments" element={<Experiments />} />
            <Route path="/wetlab/notebook" element={<Notebook />} />
            <Route path="/wetlab/measurement" element={<Measurement />} />
            <Route path="/wetlab/labsafety" element={<LabSafety />} />

            {/* DRYLAB */}
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

            {/* AWARDS */}
            <Route path="/awards" element={<Awards />} />

            {/* DEFAULT ROUTE */}
            <Route path="/" element={<div>Welcome to Yellow Team!</div>} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
