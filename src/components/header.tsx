import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-500 text-white">
      <div className="flex justify-between p-5">
        <Link to='/home' className="text-xl">Yellow Team</Link>

        <div className="flex gap-5">

          {/* PROJECT */}
          <div className="relative group">
            <p className="cursor-pointer">Project ▾</p>
            <div className="absolute hidden group-hover:flex flex-col bg-gray-400 border p-3 items-center w-40 rounded-lg gap-2">
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
            <p className="cursor-pointer">Wet Lab ▾</p>
            <div className="absolute hidden group-hover:flex flex-col bg-gray-400 border p-3 items-center w-37 rounded-lg gap-2">
              <Link to="/wetlab/experiments">Experiments</Link>
              <Link to="/wetlab/notebook">Notebook</Link>
              <Link to="/wetlab/measurement">Measurement</Link>
              <Link to="/wetlab/labsafety">Lab Safety</Link>
            </div>
          </div>

          {/* DRY LAB */}
          <div className="relative group">
            <p className="cursor-pointer">Dry Lab ▾</p>
            <div className="absolute hidden group-hover:flex flex-col bg-gray-400 border p-3 items-center w-25 rounded-lg gap-2">
              <Link to="/drylab/model">Model</Link>
              <Link to="/drylab/software">Software</Link>
            </div>
          </div>

          {/* ENGAGEMENT */}
          <div className="relative group">
            <p className="cursor-pointer">Engagement ▾</p>
            <div className="absolute hidden group-hover:flex flex-col bg-gray-400 border p-3 items-center w-39 rounded-lg gap-2">
              <Link to="/engagement/hp">Human Practices</Link>
              <Link to="/engagement/collab">Collaboration</Link>
              <Link to="/engagement/sustainability">Sustainability</Link>
              <Link to="/engagement/education">Education</Link>
            </div>
          </div>

          {/* TEAM */}
          <div className="relative group">
            <p className="cursor-pointer">Team ▾</p>
            <div className="absolute hidden group-hover:flex flex-col bg-gray-400 border p-3 items-center w-35 rounded-lg gap-2">
              <Link to="/team/members">Members</Link>
              <Link to="/team/attributions">Attributions</Link>
              <Link to="/team/medals">Medals</Link>
              <Link to="/team/sponsers">Sponsers</Link>
            </div>
          </div>

          <Link to="/awards">Awards</Link>

        </div>
      </div>
    </div>
  );
}

export default Header;
