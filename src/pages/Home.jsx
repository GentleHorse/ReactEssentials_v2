import { Link } from "react-router-dom";
import SectionWrapper from "../components/UI/SectionWrapper.jsx";

const SECTIONS_ARRAY = [
  {
    id: "s1",
    title: "What is React?",
    path: "/what-is-react",
  },
  {
    id: "s2",
    title: "Installation",
    path: "/installation",
  },
  {
    id: "s3",
    title: "Basics",
    path: "/basics",
    topics: [
      {
        id: "tp1",
        title: "useEffect",
      },
      {
        id: "tp2",
        title: "useState",
      },
      {
        id: "tp3",
        title: "useRef",
      },
      {
        id: "tp4",
        title: "props",
      },
      {
        id: "tp5",
        title: "useCallback",
      },
      {
        id: "tp6",
        title: "contextAPI",
      },
      {
        id: "tp7",
        title: "useReducer",
      },
      {
        id: "tp8",
        title: "useMemo",
      },
      {
        id: "tp9",
        title: "Built-in React components",
      },
      {
        id: "tp10",
        title: "Tips",
      },
    ],
  },
  {
    id: "s4",
    title: "Styling",
    path: "/styling",
    topics: [
      {
        id: "tp1",
        title: "CSS styling",
      },
      {
        id: "tp2",
        title: "styled components",
      },
      {
        id: "tp3",
        title: "Tailwind CSS",
      },
    ],
  },
  {
    id: "s5",
    title: "Events",
    path: "/events",
    topics: [
      {
        id: "tp1",
        title: "Mouse events",
      },
      {
        id: "tp2",
        title: "Drag events",
      },
    ],
  },
  {
    id: "s6",
    title: "Advanced",
    path: "/advanced",
    topics: [
      {
        id: "tp1",
        title: "Class based components",
      },
      {
        id: "tp2",
        title: "Error handling",
      },
      {
        id: "tp3",
        title: "Custom hooks",
      },
      {
        id: "tp4",
        title: "Forms and user inputs",
      },
      {
        id: "tp5",
        title: "Reset user inputs",
      },
      {
        id: "tp6",
        title: "Input validation",
      },
    ],
  },
  {
    id: "s7",
    title: "Redux",
    path: "/redux",
    topics: [
      {
        id: "tp1",
        title: "Redux intro",
      },
      {
        id: "tp2",
        title: "Redux with React - 1",
      },
      {
        id: "tp3",
        title: "Redux with React - 2",
      },
      {
        id: "tp4",
        title: "Redux Toolkit",
      },
      {
        id: "tp5",
        title: "Redux advanced",
      },
    ],
  },
  {
    id: "s8",
    title: "React router",
    path: "/react-router",
    topics: [
      {
        id: "tp1",
        title: "React router - 1",
      },
      {
        id: "tp2",
        title: "React router - 2",
      },
      {
        id: "tp3",
        title: "React router - 3",
      },
      {
        id: "tp4",
        title: "React router - 4",
      },
      {
        id: "tp5",
        title: "React router - 5",
      },
      {
        id: "tp6",
        title: "React router - 6",
      },
      {
        id: "t7",
        title: "React router - 7",
      },
    ],
  },
  {
    id: "s9",
    title: "Authentication",
    path: "/authentication",
    topics: [
      {
        id: "tp1",
        title: "Authentication - 1",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <SectionWrapper className="max-w-[800px] w-3/4 flex flex-col mx-auto">
      <SectionCard sectionsArray={SECTIONS_ARRAY} />
    </SectionWrapper>
  );
}

function SectionCard({ sectionsArray }) {
  return (
    <>
      {sectionsArray.map((section) => (
        <Link
          to={section.path}
          key={section.id}
          className="p-4 m-5 rounded-2xl backdrop-blur-md bg-[#6E75A4]/15 hover:bg-[#6E75A4]/45"
        >
          <h1 className="font-poiretOneRegular text-6xl mb-4">
            {section.title}
          </h1>
          {!!section.topics && (
            <ul>
              {section.topics.map((topic) => (
                <li key={topic.id}>
                  <p className="font-montserrat text-xl text-stone-600 ml-4">
                    {topic.title}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </Link>
      ))}
    </>
  );
}
