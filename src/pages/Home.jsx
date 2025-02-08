import { Link } from "react-router-dom";
import { HOME_SECTIONS_ARRAY } from "../topics-data.js";
import { motion } from "framer-motion";

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
          className="border-t-2 border-[#C1C1C1] text-center"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <motion.h1
            className="py-8 font-poiretOneRegular text-6xl text-[#C1C1C1]"
            whileHover={{ color: "#FFFFFF", background: "#C1C1C1" }}
          >
            {section.title}
          </motion.h1>
        </Link>
      ))}
    </>
  );
}
