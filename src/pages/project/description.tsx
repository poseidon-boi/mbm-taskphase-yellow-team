function Description() {
  return (
    <section className="bg-[#1F2A13] min-h-screen pt-32 px-16 text-white">
      
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-10 flex justify-center p-75">
        Description
      </h1>

      <div className="flex gap-16">

        {/* LEFT: REFERENCE LINKS (10%) */}
        <div className="w-[10%] flex flex-col gap-6 text-xl">

          <a
            href="#hello"
            className="relative group w-fit"
          >
            hello
            <span
              className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#EAC49A]
                         transition-all duration-300 group-hover:w-full"
            />
          </a>

          <a
            href="#bye"
            className="relative group w-fit"
          >
            bye
            <span
              className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#EAC49A]
                         transition-all duration-300 group-hover:w-full"
            />
          </a>

        </div>

        {/* RIGHT: CONTENT (70%) */}
        <div className="w-[90%] bg-[#FEFAE0] text-black p-10 rounded">

          {/* SECTION: HELLO */}
          <h1 id="hello" className="text-5xl scroll-mt-32">
            hello
          </h1>

          <div className="py-3">
            <hr className="border-0 h-[2px] bg-[#1F2A13]" />
          </div>

          <p className="text-lg p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex ut
            officia reiciendis omnis odio quae beatae accusantium consequuntur,
            at commodi culpa, rerum repudiandae, velit corrupti autem.
            Assumenda, totam. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Odit, illo? Eligendi enim natus delectus fugiat. Animi dolorum
            voluptatem culpa sit illum rerum, magnam aperiam? Veniam nam
            repellendus facere omnis voluptate!
          </p>

          {/* SECTION: BYE */}
          <h1 id="bye" className="text-3xl my-6 scroll-mt-32">
            bye
          </h1>

          <p className="text-lg p-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem nulla, sit architecto modi molestiae nobis a esse
            consequuntur. Tenetur in sapiente eaque quis id iste et explicabo
            velit quibusdam perspiciatis. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Error quam similique aut.
          </p>

        </div>
      </div>
    </section>
  );
}

export default Description;
