import Card from "./Card.jsx";
import MonoTextsWrapper from "./MonoTextsWrapper.jsx";

export default function TopicWrapper({ topics }) {
  return (
    <>
      {topics.map((topic) => (
        <li key={topic.id} id={topic.id} className="my-10">
          <h1 className="font-roboto text-3xl mx-2 mt-8 mb-4">{topic.title}</h1>
          <p className="whitespace-pre text-wrap font-montserrat text-xl text-stone-600 mx-2 mb-8">
            {topic.text}
          </p>
          {!!topic.code && (
            <Card>
              <MonoTextsWrapper>{topic.code}</MonoTextsWrapper>
            </Card>
          )}
        </li>
      ))}
    </>
  );
}
