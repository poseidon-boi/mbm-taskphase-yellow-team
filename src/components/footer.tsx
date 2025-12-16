import mitlogo from "../assets/mit-mahe-logo.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import linktree from "../assets/linktree.png";
import x from "../assets/x.png";
import web from "../assets/web.png";

function Footer() {
  return (
    <>
      <div className="bg-gray-500 text-[#EEE0C9] py-10">
        <div className="flex justify-around items-center">

          {/* LEFT SECTION */}
          <div className="flex items-center gap-10">

            {/* Large Logo */}
            <a target="_blank" href="https://www.manipalbiomachinesmahe.com/">
              <img src={mitlogo} className="h-40 object-contain" />
            </a>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-3">Contact us</h2>

              <p className="mb-3">
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:manipalbiomachines.igem@gmail.com"
                  className="underline"
                >
                  manipalbiomachines.igem@gmail.com
                </a>
              </p>

              <p className="font-bold">Address:</p>
              <address className="not-italic mb-5">
                Manipal Institute of Technology, Udupi - Karkala Rd,
                <br />
                Eshwar Nagar, Manipal, Karnataka,
                <br />
                PIN code: 576104
              </address>

              {/* Social Icons */}
              <div className="flex gap-6 mt-5">
                <a target="_blank" href="https://www.instagram.com/manipalbiomachines/">
                  <img src={insta} className="h-8 w-8 object-contain" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/company/manipal-biomachines/posts/?feedView=all">
                  <img src={linkedin} className="h-8 w-8 object-contain" />
                </a>

                <a target="_blank" href="https://x.com/m_biomachines">
                  <img src={x} className="h-8 w-8 object-contain" />
                </a>

                <a target="_blank" href="https://linktr.ee/manipal_biomachines">
                  <img src={linktree} className="h-8 w-8 object-contain" />
                </a>

                <a target="_blank" href="https://www.manipalbiomachinesmahe.com/">
                  <img src={web} className="h-8 w-8 object-contain" />
                </a>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-l border-[#C4A267] h-60"></div>

          {/* RIGHT SECTION */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Sponsors</h2>

            <div className="grid grid-cols-3 gap-6">
              {/* Put your sponsor logos here */}
              <img src="logo1.png" className="h-12 object-contain" />
              <img src="logo2.png" className="h-12 object-contain" />
              <img src="logo3.png" className="h-12 object-contain" />
              <img src="logo4.png" className="h-12 object-contain" />
              <img src="logo5.png" className="h-12 object-contain" />
              <img src="logo6.png" className="h-12 object-contain" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;
