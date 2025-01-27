import Card from "./Card.jsx";
import MonoTextsWrapper from "./MonoTextsWrapper.jsx";

export default function TopicWrapper({ topics }) {
  return (
    <>
      {topics.map((topic) => (
        <li key={topic.id}>
          <h1 className="font-roboto text-xl mx-2 mt-8 mb-2">{topic.title}</h1>
          <p className="whitespace-pre text-wrap font-montserrat text-stone-600 mx-2 mb-4">
            {topic.text}
          </p>
          <Card>
            <MonoTextsWrapper>{topic.code}</MonoTextsWrapper>
          </Card>
        </li>
      ))}
    </>
  );
}
