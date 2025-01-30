import { useState } from "react";
import SideBar from "../components/sideBar/SideBar.jsx";
import TopicWrapper from "../components/UI/TopicWrapper.jsx";
import Header from "../components/UI/Header.jsx";
import PageTitle from "../components/UI/PageTitle.jsx";
import TableOfContents from "../components/UI/TableOfContents.jsx";
import ScrollToTopButton from "../components/UI/ScrollToTopButton.jsx";
import { AUTHENTICATION_TOPICS_ARRAY } from "../topics-data.js";

export default function AuthenticationPage() {
  const [topicId, setTopicId] = useState("tp1");
  const [topicIndex, setTopicIndex] = useState(0);

  const topicHandler = (topic) => {
    setTopicId(topic.id);

    const selectedTopicId = AUTHENTICATION_TOPICS_ARRAY.findIndex(
      (e) => e.id === topic.id
    );
    setTopicIndex(selectedTopicId);

    window.scrollTo(0, 0); // Move to the top of the page
  };

  return (
    <>
      <Header />

      <PageTitle>Authentication</PageTitle>

      <section className="grid grid-cols-3">
        <div>
          <SideBar
            topicsArray={AUTHENTICATION_TOPICS_ARRAY}
            setTopic={topicHandler}
            topicId={topicId}
          />
        </div>

        <div className="col-span-2 max-w-[600px] lg:max-w-[1200px] mr-10 md:mr-12 lg:mr-20">
          <TableOfContents
            topics={AUTHENTICATION_TOPICS_ARRAY[topicIndex].subTopics}
            textsPosition="left"
          />

          <ul>
            <TopicWrapper
              topics={AUTHENTICATION_TOPICS_ARRAY[topicIndex].subTopics}
            />
          </ul>
        </div>
      </section>

      <ScrollToTopButton />
    </>
  );
}
