import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isHome =
    location.pathname === "/" || location.pathname === "/home";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${isHome ? "bg-transparent" : "bg-[#1F2A13]"}
      `}
    >
      <div className="flex justify-between items-center px-8 py-5 text-[#F4F6F3]">

        {/* LOGO */}
        <Link to="/home" className="text-4xl font-medium tracking-wide">
          <h1>Yellow Team</h1>
        </Link>

        {/* NAV */}
        <nav className="flex gap-6 text-2xl">

          {/* PROJECT */}
          <div className="relative group">
            <h1 className="cursor-pointer">Project ▾</h1>
            <div
              className="absolute top-full left-1/2 -translate-x-1/2
              hidden group-hover:flex flex-col
              bg-[#101317]
              p-3
              items-center w-44 rounded-lg gap-2
              text-sm"
            >
              <Link to="/project/description">Description</Link>
              <Link to="/project/design">Design</Link>
              <Link to="/project/poc">Proof of Concept</Link>
              <Link to="/project/engineering">Engineering</Link>
              <Link to="/project/results">Results</Link>
              <Link to="/project/implementation">Implementation</Link>
              <Link to="/project/safety">Safety</Link>
              <Link to="/project/contribution">Contribution</Link>
            </div>
          </div>

          {/* WET LAB */}
          <div className="relative group">
            <h1 className="cursor-pointer">Wet Lab ▾</h1>
            <div className="absolute top-full left-1/2 -translate-x-1/2
              hidden group-hover:flex flex-col
              bg-[#101317]
              p-3
              items-center w-44 rounded-lg gap-2
              text-sm"
            >
              <Link to="/wetlab/experiments">Experiments</Link>
              <Link to="/wetlab/notebook">Notebook</Link>
              <Link to="/wetlab/measurement">Measurement</Link>
              <Link to="/wetlab/labsafety">Lab Safety</Link>
            </div>
          </div>

          {/* DRY LAB */}
          <div className="relative group">
            <h1 className="cursor-pointer">Dry Lab ▾</h1>
            <div className="absolute top-full left-1/2 -translate-x-1/2
              hidden group-hover:flex flex-col
              bg-[#101317]
              p-3
              items-center w-44 rounded-lg gap-2
              text-sm"
            >
              <Link to="/drylab/model">Model</Link>
              <Link to="/drylab/software">Software</Link>
            </div>
          </div>

          {/* ENGAGEMENT */}
          <div className="relative group">
            <h1 className="cursor-pointer">Engagement ▾</h1>
            <div className="absolute top-full left-1/2 -translate-x-1/2
              hidden group-hover:flex flex-col
              bg-[#101317]
              p-3
              items-center w-44 rounded-lg gap-2
              text-sm"
            >
              <Link to="/engagement/hp">Human Practices</Link>
              <Link to="/engagement/collab">Collaboration</Link>
              <Link to="/engagement/sustainability">Sustainability</Link>
              <Link to="/engagement/education">Education</Link>
            </div>
          </div>

          {/* TEAM */}
          <div className="relative group">
            <h1 className="cursor-pointer">Team ▾</h1>
            <div className="absolute top-full left-1/2 -translate-x-1/2
              hidden group-hover:flex flex-col
              bg-[#101317]
              p-3
              items-center w-44 rounded-lg gap-2
              text-sm"
            >
              <Link to="/team/members">Members</Link>
              <Link to="/team/attributions">Attributions</Link>
              <Link to="/team/medals">Medals</Link>
              <Link to="/team/sponsers">Sponsors</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
