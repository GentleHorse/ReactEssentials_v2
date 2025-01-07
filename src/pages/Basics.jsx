import { useState } from "react";
import SideBar from "../components/sideBar/SideBar.jsx";
import TopicWrapper from "../components/UI/TopicWrapper.jsx";

const BASICS_TOPICS_ARRAY = [
  {
    id: "tp1",
    title: "useEffect",
    subTopics: [
      {
        id: "sbtp1",
        title: "Call at every render",
        text: `Called at the initial render + every render. 
(* useEffect execution timing is right after the component is rendered.)`,
        code: `
      useEffect(() => {
        console.log("useEffect is called");
      });
        `,
      },
      {
        id: "sbtp2",
        title: "Call at initial render only",
        text: `Called at only the initial render.
(* useEffect execution timing is right after the component is rendered.)`,
        code: `
      useEffect(() => {
        console.log("useEffect is called");
      }, []);


      /**
       * 
       *  the function inside return of useEffect hook gets executed
       *  when a component is disposed (removed),
       *  or only when right before the next time useEffect is called
       * 
       * / 
       
      useEffect(() => {
        console.log("useEffect is called");

        return () => {
            console.log("component disposed")
        }
      }, []);
        `,
      },
      {
        id: "sbtp3",
        title: "Called at dependency changes",
        text: `Called at the initial render and everytime depenancies are changed.
(* useEffect execution timing is right after the component is rendered.)`,
        code: `
      /**
       * 
       *  As for dependencies, 
       *  DO NOT PASS FUNCTIONS(S) WIHTOUT USECALLBACK HOOK!
       *  Normally function objects get newly re-created
       *  every component renders,
       *  which triggers infinite loop to crash the app,
       *  and useCallback hook prevent to re-creating functions.
       * 
       * / 

      useEffect(() => {
        console.log("useEffect is called");
      }, [a, b]);
        `,
      },
      {
        id: "sbtp4",
        title: "Store in localStorage",
        text: `Store data in localStorage with useEffect.`,
        code: `
      useEffect(() => {
        localStorage.setItem("count", count);
      }, [count]);


      /**
       *  Practical usage is below
       * / 

      import { useEffect, useState } from "react";

      function Clicker() {
        const [count, setCount] = useState(0);

        // Set the initial value
        useEffect(() => {
          const savedCount = parseInt(localStorage.getItem("count") ?? 0);
          setCount(savedCount);
        }, []);

        // Update the value
        useEffect(() => {
          localStorage.setItem("count", count);
        }, [count]);

        // Click handler
        const buttonClick = () => {
          setCount((value) => value + 1);
        };

        return (
          <div>
            <div>Click count: {count}</div>
            <button onClick={buttonClick}>Click me</button>
          </div>
        );
      }

      export default Clicker;
        
        `,
      },
      {
        id: "sbtp5",
        title: "Not execute at the intial render",
        text: `If you don’t want to run the code at the initial render, 
define the “isInitial” flag outside the component, 
and use it to prevent the code from being executed.`,
        code: `        
      let isInitial = true;

      export default function SomeComponent() {

        useEffect(() => {
        
          if (isInitial){
            isInitial = false;
            return;
          }
        
          // ---- some code to execute -----
        
        }, [a, b])
        
        ....

      }
        `,
      },
    ],
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

        <ul className="max-w-[600px] mx-auto">
          <TopicWrapper topics={BASICS_TOPICS_ARRAY[topicIndex].subTopics} />
        </ul>
      </section>
    </>
  );
}
