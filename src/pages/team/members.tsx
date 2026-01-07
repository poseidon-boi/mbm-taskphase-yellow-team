import { useState } from "react"
import Card from "../../components/card"

import aaryan from "../../assets/aaryan.png"
import aniket from "../../assets/aniket.png"
import dheekshidhaa from "../../assets/dheekshidhaa.png"
import fiona from "../../assets/fiona.png"
import jatin from "../../assets/jatin.png"
import johanna from "../../assets/johanna.png"
import joshua from "../../assets/joshua.png"
import nandan from "../../assets/nandan.png"
import nivedita from "../../assets/nivedita.png"
import reeya from "../../assets/reeya.png"
import ruchi from "../../assets/ruchi.jpeg"
import sharon from "../../assets/sharon.png"
import shreyas from "../../assets/shreyas.png"
import tanushree from "../../assets/tanushree.png"

const membersData = [
  { image: aaryan, name: "Aaryan Joshi", subsystem: "Dry Lab", fuel: "Copious amounts of food" },
  { image: aniket, name: "Aniket Mohapatra", subsystem: "Research, Wet Lab", fuel: "10% science, 90% 'we're already too deep to quit'" },
  { image: dheekshidhaa, name: "Dheekshidhaa A.", subsystem: "Wet Lab", fuel: "The three Cs- Caffeine, Chaos, Curiosity" },
  { image: fiona, name: "Fiona Pinto", subsystem: "Research", fuel: "Caffeine and panic" },
  { image: jatin, name: "Jatin Rudraswamymath", subsystem: "Dry Lab", fuel: "The crushing weight of existence" },
  { image: johanna, name: "Johanna Dsouza", subsystem: "Wet Lab", fuel: "Powered by extra theekhi pani-puri and good company - not necessarily human" },
  { image: joshua, name: "Joshua Monteiro", subsystem: "Dry Lab, HnS", fuel: "Water and shawarma" },
  { image: nandan, name: "Nandan P Nair", subsystem: "Wet Lab", fuel: "Late night caffeinated drinks for all nighters and deadline pressure" },
  { image: nivedita, name: "Nivedita Pai", subsystem: "HP", fuel: "Staying optimistic while everything else crashed down" },
  { image: reeya, name: "Reeya Wani", subsystem: "Wet Lab, Research", fuel: "A rotation of diet Coke, coffee and monster" },
  { image: ruchi, name: "Ruchi Pawar", subsystem: "Wiki, SMGD", fuel: "Chicken biryani & Diet Coke" },
  { image: sharon, name: "Sharon Liz Thomas", subsystem: "Research", fuel: "The belief that science suffering builds character" },
  { image: shreyas, name: "Shreyas Seshadri", subsystem: "Dry Lab", fuel: "Om Xerox chai" },
  { image: tanushree, name: "Tanushree Dhirendra Trivedi", subsystem: "HP, HnS", fuel: "Caffine, repeated attempts and questionable optimism" },
]

function Members() {
  const [index, setIndex] = useState(1)
  const [transition, setTransition] = useState(true)

  const total = membersData.length

  const prev = () => {
    setTransition(true)
    setIndex((i) => i - 1)
  }

  const next = () => {
    setTransition(true)
    setIndex((i) => i + 1)
  }

  return (
  <div className="bg-gray-300 min-h-screen">
    <div className="flex justify-center font-bold text-4xl py-4 my-10">
      Meet the team!
    </div>

    <div className="w-screen flex items-center justify-center relative overflow-hidden bg-gray-300">

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-12 text-6xl font-bold z-50"
      >
        ‹
      </button>

      {/* VIEWPORT */}
      <div className="w-[60vw] h-[70vh] overflow-hidden">
        <div
          className={`flex h-full ${
            transition ? "transition-transform duration-500 ease-linear" : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTransitionEnd={() => {
            if (index === 0) {
              setTransition(false)
              setIndex(total)
            }
            if (index === total + 1) {
              setTransition(false)
              setIndex(1)
            }
          }}
        >
          {/* CLONE: LAST */}
          <div className="w-[60vw] h-full flex-shrink-0">
            <Card {...membersData[total - 1]} />
          </div>

          {/* REAL SLIDES */}
          {membersData.map((member, i) => (
            <div key={i} className="w-[60vw] h-full flex-shrink-0">
              <Card {...member} />
            </div>
          ))}

          {/* CLONE: FIRST */}
          <div className="w-[60vw] h-full flex-shrink-0">
            <Card {...membersData[0]} />
          </div>
        </div>
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-12 text-6xl font-bold z-50"
      >
        ›
      </button>
    </div>
    </div>
  )
}


export default Members
