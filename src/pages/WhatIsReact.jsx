import Card from "../components/UI/Card.jsx";
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
      <h1 className="font-poiretOneRegular text-center text-6xl mx-6 mt-8 mb-14">
        What is React?
      </h1>

      <SectionWrapper>
        <section className="flex flex-col gap-6">
          {CORE_CONCEPTS.map((concept) => (
            <CoreConceptWrapper key={concept.id} coreConcept={concept} />
          ))}
        </section>
      </SectionWrapper>
    </>
  );
}

function CoreConceptWrapper({ coreConcept }) {
  return (
    <Card className="flex flex-row items-center p-5 rounded-2xl backdrop-blur-md bg-[#FFFFFF]/15">
      <img src={coreConcept.imgPath} className="w-[30vw] h-[30vw]" />
      <div>
        <h1 className="font-roboto text-xl m-2">{coreConcept.title}</h1>
        <p className="font-montserrat text-stone-600 mx-4 mb-4">
          {coreConcept.texts}
        </p>
      </div>
    </Card>
  );
}
