export default function SideBar({ topicsArray, setTopic, topicId }) {
  return (
    <aside className="fixed w-1/4 px-8">
      <ul className="mt-8">
        {topicsArray.map((topic) => {
          let cssClasses =
            "w-full text-left text-xl font-montserrat px-2 py-1 rounded-sm my-1 hover:text-[#FFB11B]/75 hover:bg-stone-800";

          if (topic.id === topicId) {
            cssClasses += " bg-stone-800 text-[#FFB11B]/75";
          } else {
            cssClasses += " text-stone-800";
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
