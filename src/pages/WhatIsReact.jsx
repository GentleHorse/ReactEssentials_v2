import Card from "../components/UI/Card.jsx";
import Header from "../components/UI/Header.jsx";
import PageTitle from "../components/UI/PageTitle.jsx";
import SectionWrapper from "../components/UI/SectionWrapper.jsx";

const CORE_CONCEPTS = [
  {
    id: "cc1",
    title: "Components",
    imgPath: "/images/components.png",
    texts:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    id: "cc2",
    title: "JSX",
    imgPath: "/images/jsx.png",
    texts:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    id: "cc3",
    title: "Props",
    imgPath: "/images/props.png",
    texts:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    id: "cc4",
    title: "State",
    imgPath: "/images/state.png",
    texts:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

export default function WhatIsReactPage() {
  return (
    <>
      <Header />

      <PageTitle>What is React?</PageTitle>

      <SectionWrapper>
        <ul className="mt-10 flex flex-col gap-16">
          {CORE_CONCEPTS.map((concept) => (
            <CoreConceptWrapper key={concept.id} coreConcept={concept} />
          ))}
        </ul>
      </SectionWrapper>
    </>
  );
}

function CoreConceptWrapper({ coreConcept }) {
  return (
    <li className="w-4/5 mx-auto">
      <div>
        <h1 className="font-roboto text-4xl text-center mb-2">
          {coreConcept.title}
        </h1>
        <p className="font-montserrat text-2xl text-center text-stone-600 mb-4">
          {coreConcept.texts}
        </p>
      </div>
    </li>
  );
}
