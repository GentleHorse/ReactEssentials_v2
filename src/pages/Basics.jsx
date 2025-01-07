const TOPICS_ARRAY = [
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
];

export default function BasicsPage() {
  return (
    <>
      <h1 className="font-poiretOneRegular text-center text-6xl mx-6 mt-8 mb-14">
        Basics
      </h1>

      <SideBar topicsArray={TOPICS_ARRAY} />

      
    </>
  );
}

function SideBar({ topicsArray }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-400 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Topics
      </h2>
      <ul className="mt-8">
        {topicsArray.map((topic) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          return (
            <li key={topic.id}>
              <button className={cssClasses}>{topic.title}</button>
            </li>
          );
        })}

        {/* {projects.map((project) => {
        let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

        if (project.id === selectedProjectId){
          cssClasses += ' bg-stone-800 text-stone-200'
        } else {
          cssClasses += ' text-stone-400'
        }

        return (
          <li key={project.id}>
            <button
              className={cssClasses}
              onClick={() => onSelectProject(project.id)}
            >
              {project.title}
            </button>
          </li>
        );
      })} */}
      </ul>
    </aside>
  );
}
