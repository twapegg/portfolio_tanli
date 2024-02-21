import SkillTag from "@/components/Keyword";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";

export default function Hero() {
  const skills = [
    "C/C++",
    "Python",
    "Java",
    "HTML/CSS",
    "Javascript",
    "SQL",
    "Tailwind",
    "React (Next.js)",
    "MongoDB",
    "Express.js",
    "Node.js",
  ];

  return (
    <section className="mb-24 lg:mb-0 lg:min-h-screen flex flex-col items-center pt-24">
      <h5 className="text-white text-3xl">Stanley Altonaga</h5>
      <p className="text-purple-500 text-xl">Full-stack Web Developer</p>
      <div className="mt-12 flex flex-row gap-3 items-center justify-center flex-wrap max-w-lg md:max-w-xl ">
        {skills.map((skill) => (
          <SkillTag key={skill} skill={skill}>
            {skill}
          </SkillTag>
        ))}
      </div>
      <div className="mt-10 flex gap-4 flex-wrap justify-center max-w-sm md:max-w-xl">
        <Link href="#contact">
          <button className="py-2 px-16 w-fit font-medium bg-purple-500 hover:bg-purple-400 shadow-purple text-midnight ">
            contact me
          </button>
        </Link>
        <Link href="#works">
          <button className="flex items-center gap-2 py-2 px-16 font-medium border border-white text-white hover:bg-white hover:text-midnight">
            works <AiOutlineDown />
          </button>
        </Link>
      </div>
    </section>
  );
}
