type CardProps = {
  image: string;
  name: string;
  subsystem: string;
  fuel: string;
};

function Card({ image, name, subsystem, fuel }: CardProps) {
  return (
    <div className="w-full h-full flex rounded-3xl shadow-2xl overflow-hidden">
      {/* LEFT: IMAGE */}
      <div className="w-1/2 h-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* RIGHT: TEXT */}
      <div className="w-1/2 h-full p-10 flex flex-col justify-center gap-4 text-black">
        <h3 className="text-4xl font-bold">{name}</h3>
        <p className="text-xl opacity-70">{subsystem}</p>
        <p className="text-lg leading-relaxed opacity-80">
          What is your IGem fuel?
        </p>
        <p>{fuel}</p>
      </div>
    </div>
  );
}

export default Card;
