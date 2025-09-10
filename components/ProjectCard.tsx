import Image from "next/image";

interface ProjectCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export default function ProjectCard({ image, alt, title, description }: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col">
      {/* Image */}
      <div className="w-full aspect-square rounded-tl-[2rem] rounded-tr-[2rem] overflow-hidden relative bg-white">
        <Image src={image} alt={alt} fill className="object-contain" />
      </div>

      {/* Title */}
      <div className="w-full font-workbench text-[#E81E45] text-xl bg-[#000000] pl-6 pt-6">
        <h2>{title}</h2>
      </div>

      {/* Description */}
      <div className="w-full font-vt323 text-[#E81E45] text-base bg-[#000000] pt-1 px-6 pb-10 rounded-bl-[2rem] rounded-br-[2rem] leading-none text-justify hyphens-auto">
        <p>{description}</p>
      </div>
    </div>
  );
}