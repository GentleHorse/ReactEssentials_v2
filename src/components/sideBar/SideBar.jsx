import { motion } from "framer-motion";

export default function SideBar({ topicsArray, setTopic, topicId }) {
  return (
    <aside className="fixed w-1/4 px-8">
      <ul className="mt-8">
        {topicsArray.map((topic) => {
          let cssClasses = "w-full text-left text-xl font-montserrat px-2 py-1 rounded-sm my-1";

          // if (topic.id === topicId) {
          //   cssClasses += " bg-stone-800 text-[#FFB11B]/75";
          // } else {
          //   cssClasses += " text-stone-800";
          // }

          return (
            <li key={topic.id}>
              <motion.button
                className={cssClasses}
                onClick={() => setTopic(topic)}
                animate={{color: (topic.id === topicId) ? "#FFB11B85" : "#373C38", backgroundColor: (topic.id === topicId) ? "#1C1C1C" : "#FFFFFF00"}}
                whileHover={{ color: "#FFB11B85", backgroundColor: "#1C1C1C" }}
              >
                {topic.title}
              </motion.button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
