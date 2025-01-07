export default function SideBar({ topicsArray, setTopic, topicId }) {
  return (
    <aside className="fixed w-1/5 px-6 py-12 bg-stone-400 text-stone-50 md:w-56 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Topics
      </h2>
      <ul className="mt-8">
        {topicsArray.map((topic) => {
          let cssClasses =
            "w-full text-left text-sm font-montserrat px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (topic.id === topicId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-300";
          }

          return (
            <li key={topic.id}>
              <button
                className={cssClasses}
                onClick={() => setTopic(topic)}
              >
                {topic.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
