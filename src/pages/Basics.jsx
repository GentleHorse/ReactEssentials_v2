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
        text: `Called at the initial render + every render. (* useEffect execution timing is right after the component is rendered.)`,
        code: `
      useEffect(() => {
        console.log("useEffect is called");
      });
        `,
      },
      {
        id: "sbtp2",
        title: "Call at initial render only",
        text: `Called at only the initial render. (* useEffect execution timing is right after the component is rendered.)`,
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
        text: `Called at the initial render and everytime depenancies are changed. (* useEffect execution timing is right after the component is rendered.)`,
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
        text: `If you don’t want to run the code at the initial render, define the “isInitial” flag outside the component, and use it to prevent the code from being executed.`,
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
    subTopics: [
      {
        id: "sbtp1",
        title: "Base rule",
        text: `Calling the set function does not change the current state immediately. It only affects what useState will return starting from the next render.`,
        code: `
      const [name, setName] = useState('Taylor');

      function handleClick() {
        setName('Robin');
        console.log(name); // Still "Taylor"!
      }
        `,
      },
      {
        id: "sbtp2",
        title: "Use case: switching tab buttons",
        text: `Passing an identifier('selectedButton') to clickEventHandler('selectHandler') to control the tab content and css styles by monitoring the selected button.`,
        code: `
      App.jsx --------------------------------------------------

      function App() {
        const [selectedTopic, setSelectedTopic] = useState();

        const selectHandler = (selectedButton) => {
          setSelectedTopic(selectedButton);
        };

        ...

        return (

              ...

              <menu>
                <TabButton
                  isSelected={selectedTopic === "components"}
                  onClick={() => selectHandler("components")}
                >
                  Components
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "jsx"}
                  onClick={() => selectHandler("jsx")}
                >
                  JSX
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "props"}
                  onClick={() => selectHandler("props")}
                >
                  Props
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "state"}
                  onClick={() => selectHandler("state")}
                >
                  State
                </TabButton>
              </menu>

              ...

      TabButton.jsx --------------------------------------------      

      export default function TabButton({ children, onSelect, ...props }) {
        return (
          <li>
            <button className={isSelected ? "active" : undefined} {...props}>
              {children}
            </button>
          </li>
        );
      }

      index.css ------------------------------------------------

      #examples menu button.active {
        background-color: #25d325;
        color: #e7eaef;
      }
        `,
      },
      {
        id: "sbtp3",
        title: "Updating state based on old state",
        text: `Pass a function to the state updating function. This function will automatically be called by React and will receive the guranteed latest state value. You need to call a function inside the state updating function(= setIsToggle()) because state WILL NOT INSTANTLY BE UPDATED since React set scheduling. Thus, 'setIsToggle(!isToggle)' is wrong!!`,
        code: `
      export default function App() {
        const [isToggle, setIsToggle] = React.useState(false);
        
        const toggleHandler = () => {
            setIsToggle(isToggle => !isToggle);
        }
        
        return (
            <div>
                <p className={isToggle ? "active" : ""}>Style me!</p>
                <button onClick={toggleHandler}>Toggle style</button>
            </div>
        );
      }
        `,
      },
      {
        id: "sbtp4",
        title: "Two-way binding",
        text: `Two-way binding gives components in your application a way to share data. Use two-way binding to listen for events and update values simultaneously between parent and child components.`,
        code: `
      function App() {
          const [feedback, setFeedback] = React.useState();

          const feedbackHandler = (event) => {
              setFeedback(event.target.value);
          }
          
        return (
          <>

              ....

                <textarea value={feedback} onChange={feedbackHandler}/>
              
              ....  

          </>
        );
      }

      export default App
        `,
      },
      {
        id: "sbtp5",
        title: "Update object and array state immutably",
        text: `Objects & arrays (which technically are objects) are reference values in JavaScript. Therefore you should not mutate them directly, instead create a (deep) copy first! In below example, inside the selectSquarehandler function, ‘prevGameBoard’ is not mutated instead using its copy ‘updatedBoard’ for updating the state.`,
        code: `
      const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];

      export default function GameBoard() {
        const [gameBoard, setGameBoard] = useState(initialGameBoard);

        const selectSquareHandler = (rowIndex, colIndex) => {
          setGameBoard((prevGameBoard) => {
            const updatedBoard = [
              ...prevGameBoard.map((innerArray) => [...innerArray]),
            ];
            updatedBoard[rowIndex][colIndex] = "X";

            return updatedBoard;
          });
        };

        return (
          <> ... </>
        );
      }
        `,
      },
      {
        id: "sbtp6",
        title: "Lifting state up",
        text: `Lift the state up to the closest ancestor component (= App.jsx) that has access to all components (= Player.jsx, GameBoard.jsx) that need to work with that state (= activePlayer). Player.jsx uses that state for css styling and GameBoard.jsx does for game logic (switching symbols between 'X' and 'O' + fetching current active player symbol).`,
        code: `
        App.jsx --------------------------------------------------

        const [activePlayer, setActivePlayer] = useState("X");

          const selectSquareHandler = () => {
            setActivePlayer((currentActivePlayer) =>
              currentActivePlayer === "X" ? "O" : "X"
            );
          };

          return (
            <main>
              <div id="game-container">
                <ol id="players" className="highlight-player">
                  <Player
                    initialName="Player-1"
                    symbol="X"
                    isActive={activePlayer === "X"}
                  />
                  <Player
                    initialName="Player-2"
                    symbol="O"
                    isActive={activePlayer === "O"}
                  />
                </ol>
                <GameBoard
                  onSelectSquare={selectSquareHandler}
                  activePlayerSymbol={activePlayer}
                />
              </div>
              LOG
            </main>

        Player.jsx -----------------------------------------------

        return (
          <li className={isActive ? "active" : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editNameHandler}>
              {isEditing ? "Save" : "Edit"}
            </button>
          </li>
        );

        GameBoard.jsx --------------------------------------------

        export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
          const [gameBoard, setGameBoard] = useState(initialGameBoard);

          const selectSquareHandler = (rowIndex, colIndex) => {
            setGameBoard((prevGameBoard) => {
              const updatedBoard = [
                ...prevGameBoard.map((innerArray) => [...innerArray]),
              ];
              updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

              return updatedBoard;
            });

            onSelectSquare();
          };

          return (
            <ol id="game-board">
              {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                  <ol>
                    {row.map((playerSymbol, colIndex) => (
                      <li key={colIndex}>
                        <button onClick={() => selectSquareHandler(rowIndex, colIndex)}>
                          {playerSymbol}
                        </button>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ol>
          );
        }
        `,
      },
      {
        id: "sbtp7",
        title: "One object state and one change handler",
        text: `There's one object state which contains multiple 'key-value' pairs and one change handler, and if you want to update only one 'key-value' pair in correspondence with one of the identifiers, here's the answer.`,
        code: `
      /**
       * Object State
       */
        const [userInput, setUserInput] = useState({
            initialInvestment: 10000,
            annualInvestment: 1200,
            expectedReturn: 6,
            duration: 10,
          });
        
      /**
       * Change Handler
       */
        const changeHandler = (inputIdentifier, newValue) => {
          setUserInput((prevUseInput) => {
            return {
              ...prevUseInput,
              [inputIdentifier]: +newValue,  // "+" > string to number
            };
          });
        };
        
      /**
       * JSX Renderer
       */
        return (
          <section id="user-input">
            <div className="input-group">
              <p>
                <label>intial investment</label>
                <input
                  type="number"
                  required
                  value={userInput.initialInvestment}
                  onChange={(event) =>
                    changeHandler("initialInvestment", event.target.value)
                  }
                />
              </p>
              <p>
                <label>annual investment</label>
                <input
                  type="number"
                  required
                  value={userInput.annualInvestment}
                  onChange={(event) =>
                    changeHandler("annualInvestment", event.target.value)
                  }
                />
              </p>
            </div>
            <div className="input-group">
              <p>
                <label>expected return</label>
                <input
                  type="number"
                  required
                  value={userInput.expectedReturn}
                  onChange={(event) =>
                    changeHandler("expectedReturn", event.target.value)
                  }
                />
              </p>
              <p>
                <label>duration</label>
                <input
                  type="number"
                  required
                  value={userInput.duration}
                  onChange={(event) =>
                    changeHandler("duration", event.target.value)
                  }
                />
              </p>
            </div>
          </section>
        );
        `,
      },
    ]
  },
  {
    id: "tp3",
    title: "useRef",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: ``,
      },
    ]
  },
  {
    id: "tp4",
    title: "props",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: ``,
      },
    ]
  },
  {
    id: "tp5",
    title: "useCallback",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: ``,
      },
    ]
  },
  {
    id: "tp6",
    title: "contextAPI",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: ``,
      },
    ]
  },
  {
    id: "tp7",
    title: "useReducer",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: ``,
      },
    ]
  },
  {
    id: "tp8",
    title: "useMemo",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: ``,
      },
    ]
  },
  {
    id: "tp9",
    title: "Built-in React components",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: ``,
      },
    ]
  },
  {
    id: "tp10",
    title: "Tips",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: ``,
      },
    ]
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
