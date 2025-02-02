import { Link } from "react-router-dom";
import { HOME_SECTIONS_ARRAY } from "../topics-data.js";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <SectionCard sectionsArray={HOME_SECTIONS_ARRAY} />
    </div>
  );
}

function SectionCard({ sectionsArray }) {
  return (
    <>
      {sectionsArray.map((section) => (
        <Link
          to={section.path}
          key={section.id}
          className="p-4 border-t-2 border-[#C1C1C1] text-center hover:bg-[#1C1C1C]"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <h1 className="mb-4 font-poiretOneRegular text-6xl text-[#C1C1C1] hover:text-[#FFFFFF]">
            {section.title}
          </h1>
        </Link>
      ))}
    </>
  );
}
