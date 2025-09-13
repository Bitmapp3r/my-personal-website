import Image from "next/image";

interface ProjectCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  onClickStateChangeFunction?: () => void;
}

export default function ProjectCard({
  image,
  alt,
  title,
  description,
  onClickStateChangeFunction,
}: ProjectCardProps) {
  return (
    <div
      className="relative py-2 w-full flex flex-col cursor-pointer hover:scale-105 hover:z-1 duration-200 ease-out break-inside-avoid-column"
      onClick={onClickStateChangeFunction}
    >
      <div className="border-2 border-[#E81E45] border-solid rounded-[2rem] overflow-hidden">
        {/* Image */}
        <div className="w-full aspect-square  overflow-hidden relative bg-white">
          <Image src={image} alt={alt} fill className="object-contain" />
        </div>

        {/* Title */}
        <div className="w-full font-workbench text-[#E81E45] text-xl sm:text-2xl 2xl:text-3xl bg-[#0f1015] px-6 pt-6">
          <h2>{title}</h2>
        </div>

        {/* Description */}
        <div className="w-full font-vt323 text-[#E81E45] text-base sm:text-lg lg:text-xl 2xl:text-2xl bg-[#0f1015] pt-1 px-6 pb-10  leading-none text-justify hyphens-auto">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
