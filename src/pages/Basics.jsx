import { useState } from "react";
import SideBar from "../components/sideBar/SideBar.jsx";
import TopicWrapper from "../components/UI/TopicWrapper.jsx";
import { BASICS_TOPICS_ARRAY } from "../topics-data.js";

export default function BasicsPage() {
  const [topicId, setTopicId] = useState("tp1");
  const [topicIndex, setTopicIndex] = useState(0);

  const topicHandler = (topic) => {
    setTopicId(topic.id);

    const selectedTopicId = BASICS_TOPICS_ARRAY.findIndex(
      (e) => e.id === topic.id
    );
    setTopicIndex(selectedTopicId);
  };

  return (
    <>
      <h1 className="font-poiretOneRegular text-center text-6xl mx-6 mt-8 mb-14">
        Basics
      </h1>

      <section className="grid grid-cols-3">
        <div>
          <SideBar
            topicsArray={BASICS_TOPICS_ARRAY}
            setTopic={topicHandler}
            topicId={topicId}
          />
        </div>

        <ul className="col-span-2 max-w-[600px] lg:max-w-[1200px] mr-10 md:mr-12 lg:mr-20">
          <TopicWrapper topics={BASICS_TOPICS_ARRAY[topicIndex].subTopics} />
        </ul>
      </section>
    </>
  );
}
