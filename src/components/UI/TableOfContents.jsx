import { HashLink } from "react-router-hash-link";

export default function TableOfContents({ topics, textsPosition = "center" }) {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -window.innerHeight * 0.225;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  let sectionClassName = "w-full flex flex-col";

  if (textsPosition === "center") {
    sectionClassName += " text-center";
  }
  if (textsPosition === "left") {
    sectionClassName += " text-left ml-2";
  } 
  if (textsPosition === "right") {
    sectionClassName += " text-right mr-2";
  } 
  

  return (
    <section className={sectionClassName}>
      {/* <h1 className="text-2xl text-[#C1C1C1] bg-[#1C1C1C]">
        Table of Contents
      </h1> */}
      <ul className="border-b-2 border-[#C1C1C1] pt-4 pb-6 flex flex-col gap-5">
        {topics.map((topic) => (
          <HashLink
            to={`#${topic.id}`}
            key={topic.id}
            scroll={(el) => scrollWithOffset(el)}
            className="hover:font-bold text-4xl text-[#91989F] hover:text-[#2B5F75]"
          >
            <h1>{topic.title}</h1>
          </HashLink>
        ))}
      </ul>
    </section>
  );
}
