import { useState } from "react";
import Card from "../../components/card";

import aaryan from "../../assets/aaryan.png";
import aniket from "../../assets/aniket.png";
import dheekshidhaa from "../../assets/dheekshidhaa.png";
import fiona from "../../assets/fiona.png";
import jatin from "../../assets/jatin.png";
import johanna from "../../assets/johanna.png";
import joshua from "../../assets/joshua.png";
import nandan from "../../assets/nandan.png";
import nivedita from "../../assets/nivedita.png";
import reeya from "../../assets/reeya.png";
import ruchi from "../../assets/ruchi.jpeg";
import sharon from "../../assets/sharon.png";
import shreyas from "../../assets/shreyas.png";

const membersData = [
  {
    image: aaryan,
    name: "Aaryan Joshi",
    subsystem: "Dry Lab",
    fuel: "Copious amounts of food",
  },
  {
    image: aniket,
    name: "Aniket Mohapatra",
    subsystem: "Research, Wet Lab",
    fuel: "10% science, 90% 'we're already too deep to quit'",
  },
  {
    image: dheekshidhaa,
    name: "Dheekshidhaa A.",
    subsystem: "Wet Lab",
    fuel: "The three Cs- Caffeine, Chaos, Curiosity",
  },
  {
    image: fiona,
    name: "Fiona Pinto",
    subsystem: "Research",
    fuel: "Caffeine and panic",
  },
  {
    image: jatin,
    name: "Jatin Rudraswamymath",
    subsystem: "HnS",
    fuel: "The crushing weight of existence",
  },
  {
    image: johanna,
    name: "Johanna Dsouza",
    subsystem: "Wet Lab",
    fuel: "Powered by extra theekhi pani-puri and good company - not necessarily human",
  },
  {
    image: joshua,
    name: "Joshua Monteiro",
    subsystem: "Dry Lab, HnS",
    fuel: "Water and shawarma",
  },
  {
    image: nandan,
    name: "Nandan P Nair",
    subsystem: "Wet Lab",
    fuel: "Late night caffeinated drinks for all nighters and deadline pressure",
  },
  {
    image: nivedita,
    name: "Nivedita Pai",
    subsystem: "HP",
    fuel: "Staying optimistic while everything else crashed down",
  },
  {
    image: reeya,
    name: "Reeya Wani",
    subsystem: "Wet Lab, Research",
    fuel: "A rotation of diet Coke, coffee and monster",
  },
  {
    image: ruchi,
    name: "Ruchi Pawar",
    subsystem: "Wiki, SMGD",
    fuel: "Chicken biryani & Diet Coke",
  },
  {
    image: sharon,
    name: "Sharon Liz Thomas",
    subsystem: "Research",
    fuel: "The belief that science suffering builds character",
  },
  {
    image: shreyas,
    name: "Shreyas Seshadri",
    subsystem: "Dry Lab",
    fuel: "Om Xerox chai",
  },
];

const renderTitleHover = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block transition-colors duration-200 hover:text-[#dda15e]"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

function Members() {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const total = membersData.length;

  const prev = () => {
    setTransition(true);
    setIndex((i) => i - 1);
  };

  const next = () => {
    setTransition(true);
    setIndex((i) => i + 1);
  };

  return (
    <section className="bg-[#1F2A13] min-h-screen pb-32 px-16 relative">
      {/* Header fade buffer */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1F2A13] to-transparent pointer-events-none z-40" />

      {/* Title */}
      <div className="pt-32 pb-24 flex justify-center">
        <h1 className="text-6xl text-white font-bold">
          {renderTitleHover("Meet the Team!")}
        </h1>
      </div>

      {/* Carousel */}
      <div className="w-full flex items-center justify-center relative overflow-hidden">
        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-0 text-6xl font-bold z-50 text-[#F4F6F3] hover:opacity-80 transition"
        >
          ‹
        </button>

        {/* VIEWPORT */}
        <div className="w-[65vw] h-[70vh] overflow-hidden">
          <div
            className={`flex h-full ${
              transition ? "transition-transform duration-500 ease-linear" : ""
            }`}
            style={{ transform: `translateX(-${index * 100}%)` }}
            onTransitionEnd={() => {
              if (index === 0) {
                setTransition(false);
                setIndex(total);
              }
              if (index === total + 1) {
                setTransition(false);
                setIndex(1);
              }
            }}
          >
            {/* CLONE: LAST */}
            <div className="w-[65vw] h-full flex-shrink-0 flex items-center justify-center">
              <div className="bg-[#FEFAE0] border-2 border-[#1F3D2B] rounded-2xl w-full h-full overflow-hidden text-black">
                <Card {...membersData[total - 1]} />
              </div>
            </div>

            {/* REAL SLIDES */}
            {membersData.map((member, i) => (
              <div
                key={i}
                className="w-[65vw] h-full flex-shrink-0 flex items-center justify-center"
              >
                <div className="bg-[#FEFAE0] border-2 border-[#1F3D2B] rounded-2xl w-full h-full overflow-hidden text-black">
                  <Card {...member} />
                </div>
              </div>
            ))}

            {/* CLONE: FIRST */}
            <div className="w-[65vw] h-full flex-shrink-0 flex items-center justify-center">
              <div className="bg-[#FEFAE0] border-2 border-[#1F3D2B] rounded-2xl w-full h-full overflow-hidden text-black">
                <Card {...membersData[0]} />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-0 text-6xl font-bold z-50 text-[#F4F6F3] hover:opacity-80 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Members;
