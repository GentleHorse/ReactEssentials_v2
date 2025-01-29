export const HOME_SECTIONS_ARRAY = [
  {
    id: "s1",
    title: "What is React?",
    path: "/what-is-react",
  },
  {
    id: "s2",
    title: "Installation",
    path: "/installation",
  },
  {
    id: "s3",
    title: "Basics",
    path: "/basics",
    topics: [
      {
        id: "tp1",
        title: "useEffect",
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
    ],
  },
  {
    id: "s4",
    title: "Styling",
    path: "/styling",
    topics: [
      {
        id: "tp1",
        title: "CSS styling",
      },
      {
        id: "tp2",
        title: "styled components",
      },
      {
        id: "tp3",
        title: "Tailwind CSS",
      },
    ],
  },
  {
    id: "s5",
    title: "Events",
    path: "/events",
    topics: [
      {
        id: "tp1",
        title: "Mouse events",
      },
      {
        id: "tp2",
        title: "Drag events",
      },
    ],
  },
  {
    id: "s6",
    title: "Advanced",
    path: "/advanced",
    topics: [
      {
        id: "tp1",
        title: "Class based components",
      },
      {
        id: "tp2",
        title: "Error handling",
      },
      {
        id: "tp3",
        title: "Custom hooks",
      },
      {
        id: "tp4",
        title: "Forms and user inputs",
      },
      {
        id: "tp5",
        title: "Reset user inputs",
      },
      {
        id: "tp6",
        title: "Input validation",
      },
    ],
  },
  {
    id: "s7",
    title: "Redux",
    path: "/redux",
    topics: [
      {
        id: "tp1",
        title: "Redux intro",
      },
      {
        id: "tp2",
        title: "Redux with React - 1",
      },
      {
        id: "tp3",
        title: "Redux with React - 2",
      },
      {
        id: "tp4",
        title: "Redux Toolkit",
      },
      {
        id: "tp5",
        title: "Redux advanced",
      },
    ],
  },
  {
    id: "s8",
    title: "React router",
    path: "/react-router",
    topics: [
      {
        id: "tp1",
        title: "React router - 1",
      },
      {
        id: "tp2",
        title: "React router - 2",
      },
      {
        id: "tp3",
        title: "React router - 3",
      },
      {
        id: "tp4",
        title: "React router - 4",
      },
      {
        id: "tp5",
        title: "React router - 5",
      },
      {
        id: "tp6",
        title: "React router - 6",
      },
      {
        id: "t7",
        title: "React router - 7",
      },
    ],
  },
  {
    id: "s9",
    title: "Authentication",
    path: "/authentication",
    topics: [
      {
        id: "tp1",
        title: "Authentication - 1",
      },
    ],
  },
];

export const INSTALLATION_TOPICS_ARRAY = [
  {
    id: "tp1",
    title: "npx",
    text: `Using npx to create a react application.`,
    code: `
    npx create-react-app
    `,
  },
  {
    id: "tp2",
    title: "from Scratch",
    text: `Creating a react application from scratch by following these steps:
  1. Initializing 'package.json' file
  2. Installing 'react' & 'react-dom' & 'react-scripts'
  3. Cleaning up 'package.json'
  4. Creating 'public' folder
  5. Create 'index.html' inside of it by typing shortcut key 'i'
  6. Adding <div id='root'> inside <body>
  7. Creating 'src' folder
  8. Creating 'index.jsx' inside of it`,
    code: `
    terminal -------------------------------------------------

      npm init -y

      npm install react@latest react-dom@latest react-scripts@latest

    package.json ---------------------------------------------

      "scripts": {
        "dev": "react-scripts start",
        "build": "react-scripts build"
      },

    src/index.html ----------------------------------------

      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta 
            name="viewport" 
            content="width=device-width, 
            initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <div id="root"></div>
      </body>
      </html>

    src/index.jsx -----------------------------------------

      import { createRoot } from "react-dom/client";

      const root = createRoot(document.querySelector("#root"));

      root.render(
        <h1>Hello React</h1>
      );
    `,
  },
  {
    id: "tp3",
    title: "with Vite",
    text: `Using Vite to create a application.
You need to select 'React' framework and 'JavaScript' variant.`,
    code: `
    npm create vite@latest

    cd <project name>

    npm install

    npm run dev
    `,
  },
];

export const BASICS_TOPICS_ARRAY = [
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
    ],
  },
  {
    id: "tp3",
    title: "useRef",
    subTopics: [
      {
        id: "sbtp1",
        title: "Use case: inside useEffect",
        text: `It lets you reference a value that's not needed for rendering. You can access DOM element ONLY AFTER JSX is rendered (more precisely, the ref connection is created at the second render time), that's why playing inside useEffect (the initial render).`,
        code: `
      const buttonRef = useRef();

      useEffect(() => {
        buttonRef.current.style.backgroundColor = 'papayawhip';
        buttonRef.current.style.color = 'salmon';

        return () => {
          localStorage.removeItem(keyName);
        };
      }, []);

      ...

      return (
        ...
          <button ref={buttonRef} onClick={buttonClick}>
            Click me
          </button>
        ...
      );        
      `,
      },
      {
        id: "sbtp2",
        title: "Use case: timer",
        text: `useRef doesn't call re-render the component, so it's good to control the value which doesn't need to be rendered such as starting and stopping a timer.`,
        code: `
      const timer = useRef();

      const [timerStarted, setTimerStarted] = useState(false);
      const [timerExpired, setTimerExpired] = useState(false);

      const startHandler = () => {
        setTimerStarted(true);

        timer.current = setTimeout(() => {
          setTimerExpired(true);
        }, targetTime * 1000);
      };

      const stopHandler = () => {
        clearTimeout(timer.current);
      };

      ...

      <button
        className={challengeButtonClasses}
        onClick={timerStarted ? stopHandler : startHandler}
      >
        {timerStarted ? "Stop" : "Start"} Chanllenge
      </button>
      `,
      },
      {
        id: "sbtp3",
        title: "Forwarding ref",
        text: `Call 'forwardRef()' to let your component receive a ref and forward it to a child component.`,
        code: `
        Parent component -----------------------------------------

        const dialog = useRef();

        ...

        return (
          <>
            <ResultModal ref={dialog} result="lost" targetTime={targetTime} />


        Child component ------------------------------------------

        import { forwardRef } from "react";

        const ResultModal = forwardRef(function ResultModal(props, ref) {
          return (
            <dialog ref={ref}>
              
              ...
              
            </dialog>
          );
        })

        export default ResultModal;
      `,
      },
      {
        id: "sbtp4",
        title: "Exposing function",
        text: `Creating and exposing a function which can be called from a parent component.`,
        code: `
      Parent component -----------------------------------------

      const dialog = useRef();

      ...

      dialog.current.open();

      ...

      return (
        <>
          <ResultModal ref={dialog} result="lost" targetTime={targetTime} />


      Child component ------------------------------------------

      import { forwardRef, useImperativeHandle, useRef } from "react";

      const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
        const dialog = useRef();

        useImperativeHandle(ref, () => {
          return {
            open() {
              dialog.current.showModal();
            },
          };
        });

        return (
          <dialog ref={dialog} id="result-modal" className={resultModalClasses}>
          
          ...      

          </dialog>
        );
      });

      export default ResultModal;
      `,
      },
      {
        id: "sbtp5",
        title: "Create a portal",
        text: `To create a portal, call createPortal, passing some JSX, and the DOM node where it should be rendered.`,
        code: `
      index.html -----------------------------------------------

      <body>
        <div id="modal"></div>
        <div id="content">
          <div id="root"></div>
        </div>
        <script type="module" src="/src/main.jsx"></script>
      </body>


      SomeComponent.jsx ----------------------------------------

      import { createPortal } from "react-dom";

      return createPortal(
          <dialog>

          ....

          </dialog>,

          document.getElementById("modal")
        );
      `,
      },
    ],
  },
  {
    id: "tp4",
    title: "props",
    subTopics: [
      {
        id: "sbtp1",
        title: "Forwarding existing props - id",
        text: `If you create a wrapper component and want to use it with existing properties such as 'id', 'className' or 'onClick', you have to forward props by using …props to make them available.`,
        code: `
      export default function Foo({ title, children, ...props }) {
        return (
          <section {...props}>
            <h2>{title}</h2>
            {children}
          </section>
        );
      }
      `,
      },
      {
        id: "sbtp2",
        title: "Forwarding existing props - onClick",
        text: `If you create a wrapper component and want to use it with existing properties such as 'id', 'className' or 'onClick', you have to forward props by using …props to make them available.`,
        code: `
      export default function Foo({ children, isSelected, ...props }) {
        return (
          <li>
            <button className={isSelected ? "active" : undefined} {...props}>
              {children}
            </button>
          </li>
        );
      }         
      `,
      },
      {
        id: "sbtp3",
        title: "Creating additional slot in addition to props.child",
        text: `Adding an additional slot to a wrapper component in addtion to 'props.child', you need to create custom props (in below example, it's 'buttons'). In this way, you can create as much slots as you want.`,
        code: `
      App.jsx --------------------------------------------------

      <Tabs
        buttons={
          <>
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
          </>
        }
      >
        {tabContent}
      </Tabs>

      Tabs.jsx -------------------------------------------------
      
      export default function Tabs({ children, buttons }) {
        return (
          <>
            <menu>{buttons}</menu>
            {children}
          </>
        );
      }        
      `,
      },
      {
        id: "sbtp4",
        title: "Dynamically change html elements",
        text: `Dynamically changable html elements to a wrapper component, you have to create custom props starting with a capital letter (in this case, it's 'ButtonsContainer) otherwise React treats it as a built-in html element and couse errors.`,
        code: `
      App.jsx --------------------------------------------------

      <Tabs 
        ButtonsContainer="menu"
        buttons={
          <>
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
          </>
        }
      >
        {tabContent}
      </Tabs>

      Tabs.jsx -------------------------------------------------

      export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
        return (
          <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
          </>
        );
      }      
      `,
      },
      {
        id: "sbtp5",
        title: "Dynamically change className for css styling",
        text: `In order to change className dynamically, create a className variable and add className in correspondance to props.`,
        code: `
      export default function Button({children, mode="filled", Icon, ...props}) {
      
        let cssClasses = "button " + mode + "-button";
        
        if (Icon) {
            cssClasses += ' icon-button'
        }
        
        if (props.className) {
            cssClasses += ' ' + props.className;
        }
      
        
        return (
            <button className={cssClasses} {...props}>
            {Icon && (
                <span className="button-icon"><Icon/></span>
          )}
            <span>{children}</span>
            </button>
            );
      }        
      `,
      },
      {
        id: "sbtp6",
        title: "Gather extra props",
        text: `If you want to pass many props to children components, sometime it's cumbersome to write all props. Instead you can use '…props' to gather and distribute props properly.`,
        code: `
      export default function Input({ id, ...props }) {
        return (
          <div .... >
            <label ...> .... </label>
            <input id={id} {...props} />
            
            ...
            
          </div>
        );
      }
      `,
      },
    ],
  },
  {
    id: "tp5",
    title: "useCallback",
    subTopics: [
      {
        id: "sbtp1",
        title: "What is it?",
        text: `useCallback is a React Hook that lets you cache a function definition between re-renders. Normally function objects get automatically newly re-created every component(s) render cycles, but useCallback prevents this automatic re-creation. Using useCallback hook is a good practice for preventing undesired infinite loops.`,
        code: `
      const memoizedCallback = useCallback(
        () => {
          doSomething(a, b);
        },
        [a, b],
      );        
      `,
      },
      {
        id: "sbtp2",
        title: "Use with memo()",
        text: `When you use memo() and pass functions as dependencies, you should wrap these functions with useCallback() to prevent creating function newly otherwise memo() cannot prevent re-renderinng components. (= because new creation means passing new props to child components).`,
        code: `
      const incrementHandler = useCallback(function incrementHandler() {
        setCounter((prevCounter) => prevCounter + 1);
      }, []);

      return (

          ...

            <IconButton icon={PlusIcon} onClick={incrementHandler}>
              Increment
            </IconButton>


      ----------------------------------------------------------------------

      import { memo } from "react";

      const IconButton = memo(function IconButton({ children, icon, ...props }) {

        return (
          <button {...props} className="button">
            
            ...

          </button>
        );
      });

      export default IconButton;        
      `,
      },
    ],
  },
  {
    id: "tp6",
    title: "contextAPI",
    subTopics: [
      {
        id: "sbtp1",
        title: "How to use",
        text: `Call createContext outside of any components to create a context, wrap your components into a context provider to specify the value of this context for all components inside and then call useContext at the top level of your component to read and subscribe to context.`,
        code: `
      shopping-cart-context.jsx --------------------------------

      import { createContext } from "react";

      export const CartContext = createContext({
          items: []
      });

      App.jsx --------------------------------------------------

      import { CartContext } from "./store/shopping-cart-context.jsx";

      function App() {
        
        ...

        return (
          <CartContext.Provider value={{ items: [] }}>
            
            ...	

          </CartContext.Provider>
        );
      }

      Cart.jsx -------------------------------------------------

      import { useContext } from "react";
      import { CartContext } from "../../../store/shopping-cart-context";

      ...
        
      const cartCtx = useContext(CartContext);
      `,
      },
      {
        id: "sbtp2",
        title: "SomeContext.Consumer (Legacy)",
        text: `Before useContext existed, there was an older way to read context (in this example, you can access the value through variable, cartCtx). Although this older way still works, but newly written code should read context with useContext() instead.`,
        code: `
      import { CartContext } from "./store/shopping-cart-context.jsx";

      return (
        <CartContext.Consumer>
          {(cartCtx) => {
              return (
                <div id="cart">
      
                  ...
      
                </div>
            );
          }
        </CartContext.Consumer>
      );        
      `,
      },
      {
        id: "sbtp3",
        title: "Link state",
        text: `In order to link context to state, you need to provide value of context provider with state. (It is better to State be the same format as value of default context for auto completion. In this case, { items: [ ] } ).`,
        code: `
      import { CartContext } from "./store/shopping-cart-context.jsx";

      function App() {
        const [shoppingCart, setShoppingCart] = useState({
          items: [],
        });

        ...

        return (
          <CartContext.Provider value={shoppingCart}>
            
            ...	

          </CartContext.Provider>
        );
      }
      `,
      },
      {
        id: "sbtp4",
        title: "Link state and handlers",
        text: `You can not only link state value but also its handler functions. In that case, you should update default context value for auto completion.`,
        code: `
      shopping-cart-context.jsx --------------------------------

      import { createContext } from "react";

      export const CartContext = createContext({
          items: [],
          addItemToCart: () => {},
          updateItemQuantity: () => {}
      });

      App.jsx --------------------------------------------------

      import { CartContext } from "./store/shopping-cart-context.jsx";

      function App() {
        const [shoppingCart, setShoppingCart] = useState({
          items: [],
        });

        const itemAddHandler = (id) => {
          setShoppingCart( ... );
        };

        const updateCartItemQuantityHandler = (productId, amount) => {
          setShoppingCart( ... );
        };

      ...

        const ctxValue = {
          items: shoppingCart.items,
          addItemToCart: itemAddHandler,
          updateItemQuantity: updateCartItemQuantityHandler
        };

        return (
          <CartContext.Provider value={ctxValue}>

          ...

          </CartContext.Provider>  
      `,
      },
      {
        id: "sbtp5",
        title: "Outsourcing context",
        text: `You can outsource all context related values and functions by creating a custom context provider wrapper inside the file where context is created and stored.`,
        code: `
      export const CartContext = createContext({
        items: [],
        addItemToCart: () => {},
        updateItemQuantity: () => {},
      });

      export default function CartContextProvider({ children }) {
        const [shoppingCart, setShoppingCart] = useState({
          items: [],
        });

        const itemAddHandler = (id) => {
          setShoppingCart( ... );
        };

        const updateCartItemQuantityHandler = (productId, amount) => {
          setShoppingCart( ... );
        };

        const ctxValue = {
          items: shoppingCart.items,
          addItemToCart: itemAddHandler,
          updateItemQuantity: updateCartItemQuantityHandler,
        };

        return (
          <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
        );
      }

      ------------------------------

      function App() {
        return (
          <CartContextProvider>
              
            ...			

          </CartContextProvider>
        );
      }

      export default App;
      `,
      },
    ],
  },
  {
    id: "tp7",
    title: "useReducer",
    subTopics: [
      {
        id: "sbtp1",
        title: "What is it?",
        text: `useReducer is a React Hook that lets you add a reducer to your component. useReducer is normally used as a replacement of useState for better organized code structure. It requires reducer function and initial value of state.`,
        code: `
      import { useReducer } from 'react';

      function reducer(state, action) {
        if (action.type === 'INCREMENT'){
          return { count: state.count + 1 }
        }

        ...

        return state;
      }

      function MyComponent() {
        const [state, dispatch] = useReducer(reducer, { counter: 0 });

        const incrementHandler = () => {
              dispatch({ type: 'INCREMENT' });
          }

        ...  
      `,
      },
      {
        id: "sbtp2",
        title: "Use with context API",
        text: `Sometimes useReducer is used combined with context API because the file where context value and context provider are stored often gets bigger and hard to read. useReducer makes the code more readable and reusable by outsourcing handler functions outside provider function.`,
        code: `
      import { createContext, useReducer } from "react";

      /**
      * 1) Context 
      */
      export const CartContext = createContext({
        items: [],
        addItemToCart: () => {},
        updateItemQuantity: () => {},
      });

      /**
      * 2) Reducer 
      */
      function shoppingCartReducer(state, action) {
        if (action.type === "ADD_ITEM") {
          
          ...

          return {
            ...state, 
            items: updatedItems,
          };
        }

        if (action.type === "UPDATE_ITEM") {
              
          ...

          return {
            ...state,
            items: updatedItems,
          };
        }

        return state;
      }

      /**
      * 3) Context Provider 
      */
      export default function CartContextProvider({ children }) {
        const [shoppingCartState, shoppingCartDispatch] = useReducer(
          shoppingCartReducer,
          {
            items: [],
          }
        );

        const itemAddHandler = (id) => {
          shoppingCartDispatch({
            type: "ADD_ITEM",
            payload: id,
          });
        };

        const updateCartItemQuantityHandler = (productId, amount) => {
          shoppingCartDispatch({
            type: "UPDATE_ITEM",
            payload: {
              productId: productId,
              amount: amount,
            },
          });
        };

        const ctxValue = {
          items: shoppingCartState.items,
          addItemToCart: itemAddHandler,
          updateItemQuantity: updateCartItemQuantityHandler,
        };

        return (
          <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
        );
      }  
      `,
      },
    ],
  },
  {
    id: "tp8",
    title: "useMemo",
    subTopics: [
      {
        id: "sbtp1",
        title: "What is it?",
        text: `useMemo needs a function as the first parameter and an array of dependencies as the second parameter (a bit like useEffect). In the function we need to return the desired value (in below case the colors array). If useMemo is being called again (when the App is being re-rendered), but the values in the dependencies array haven't changed, useMemo will return the previous array. And if one of the dependency values has changed, then useMemo will call the function again. In a way, useMemo works like a cache, and only a dependency value change can break it.`,
        code: `
      const colors = useMemo(() => {
        const colors = [];
        for (let i = 0; i < clickersCount; i++) {
          colors.push(\`hsl(\${Math.random() * 360}deg, 100%, 70%)\`);
        }

        return colors;

      }, [clickersCount]);  
      `,
      },
      {
        id: "sbtp2",
        title: "Use case: complex calculations",
        text: `Like memo() for components, useMemo() for functions also costs a performance, but if a function requires complex calculations and you do not want to re-calculate at every render time, it’s the best way to use useMemo().`,
        code: `
      import { useMemo } from "react";

      function complexCalculation(number) {

          ...
          
          // some complex calculations 

          ...
          
      }

      export default function Counter({ initialCount }) {

        const initialCountIsPrime = useMemo(
          () => complexCalculation(initialCount), 
          [initialCount]
        );

        ...

      }
      `,
      },
    ],
  },
  {
    id: "tp9",
    title: "Built-in React components",
    subTopics: [
      {
        id: "sbtp1",
        title: "Suspense",
        text: `<Suspense> lets you display a fallback until its children have finished loading.`,
        code: `
      <Suspense fallback={<Loading />}>
        <SomeComponent />
      </Suspense>        
      `,
      },
      {
        id: "sbtp2",
        title: "StrictMode",
        text: `<StrictMode> lets you find common bugs in your components early during development. Behind the scene, <StrictMode> executes wrapped every components twice.`,
        code: `
      <StrictMode>
        <App />
      </StrictMode>  
      `,
      },
    ],
  },
  {
    id: "tp10",
    title: "Tips",
    subTopics: [
      {
        id: "sbtp1",
        title: "Syncronise child components in render cycles",
        text: `The parent component has child conponents and when the parent component gets re-rendered based on states changes, child components does not get re-rendered at the same time. If you want to put them in the syncronised render cycle of parent one, let them share the parent variables which drive from state by adding key property. In this case, the parent component is Quiz, the child component is QuestionTimer, and the key is activeQuestionIndex.`,
        code: `
      import QuestionTimer from "./QuestionTimer.jsx";

      export default function Quiz() {
        const [userAnswers, setUserAnswers] = useState([]);
      
        const activeQuestionIndex = userAnswers.length;
        
        ...
      
        return (
          <div> 
              <QuestionTimer ... key={activeQuestionIndex} />
              
              ...
                
          </div>
        );
      }  
      `,
      },
      {
        id: "sbtp2",
        title: "Preventing unnecessary rendering",
        text: `Using memo() enables to prevent unnecessary child components rendering when the parent component renders because memo() lets you skip re-rendering a component when its props are unchanged by comparing old props with current props. But DO NOT OVERUSE memo() and use it AS HIGH UP IN THE COMPONENT TREE AS POSSIBLE because checking props with memo() costs a performance. Therefore, do not use it on components where props will change frequently.`,
        code: `
      import { memo } from 'react';

      const SomeComponent = memo(function SomeComponent(props) {
        // ...
      });

      export default SomeComponent;
      `,
      },
    ],
  },
];

export const STYLING_TOPICS_ARRAY = [
  {
    id: "tp1",
    title: "CSS Styling",
    subTopics: [
      {
        id: "sbtp1",
        title: "Inline styling",
        text: `For inline styling, you need to pass value as a format of OBJECT to style property. You can also use ternary expression inside the property.`,
        code: `
      <input
        type="email"
        style={{ backgroundColor: emailNotValid ? '#f87171' : '#d1d5db' }}
        onChange={(event) => handleInputChange('email', event.target.value)}
      />
      `,
      },
      {
        id: "sbtp2",
        title: "Adding className conditionally",
        text: `For adding styles from a separated file conditionally to html elements, you need to use BACKTICKS + DOLLAR SIGN.`,
        code: `
      <label className={\`label \${emailNotValid ? "invalid" : ""}\`}>Email</label>
      `,
      },
      {
        id: "sbtp3",
        title: "CSS modules",
        text: `Vanilla CSS with file-specific scoping.`,
        code: `
      Header.jsx -----------------------------------------------

      import logo from "../assets/logo.png";
      import classes from "./Header.module.css";

      export default function Header() {
        return (
          <header>
            <img src={logo} alt="A canvas" />
            <h1>ReactArt</h1>
            <p className={classes.paragraph}>A community of artists and art-lovers.</p>
          </header>
        );
      }

      Header.module.css ----------------------------------------

      header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      header img {
        object-fit: contain;
        margin-bottom: 2rem;
        width: 11rem;
        height: 11rem;
      }

      header h1 {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.4em;
        text-align: center;
        text-transform: uppercase;
        color: #9a3412;
        font-family: 'Pacifico', cursive;
        margin: 0;
      }

      .paragraph {
        text-align: center;
        color: #a39191;
        margin: 0;
      }

      @media (min-width: 768px) {
        header {
          margin-bottom: 4rem;
        }

        header h1 {
          font-size: 2.25rem;
        }
      }
      `,
      },
    ],
  },
  {
    id: "tp2",
    title: "Styled components",
    subTopics: [
      {
        id: "sbtp1",
        title: "Installation",
        text: `To download styled-components run:`,
        code: `
      npm install styled-components
      `,
      },
      {
        id: "sbtp2",
        title: "Use dynamic values",
        text: `styled-components lets you write actual CSS in your JavaScript and it automatically forwards props, which means you can wrap child elements inside styled-components, add built-in props such as 'className', 'onChange', 'type', etc. You can also dynamically inject values inside styled-components by passing custom props (in below case, it is '$invalid={emailNotValid} & $invalid={passwordNotValid}'). You had better to add '$' in front of custom props when its name conflicts built-in props.`,
        code: `
      import { styled } from "styled-components";

      const ControlContainer = styled.div\`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
      \`;

      const Label = styled.label\`
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: \${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
      \`;

      const Input = styled.input\`
        width: 100%;
        padding: 0.75rem 1rem;
        line-height: 1.5;
        background-color: \${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
        color: \${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
        border: 1px solid \${({ $invalid }) => ($invalid ? "#f73f3f" : "transparent")};
        border-radius: 0.25rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      \`;

      <ControlContainer>
        <p className="paragraph">
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            $invalid={emailNotValid}
            type="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            $invalid={passwordNotValid}
            type="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>  
      `,
      },
      {
        id: "sbtp3",
        title: "Pseudo Selectors, Nested Rules, Media Queries",
        text: `For pseudo selectors, nested rules, media queries, you need to replace 'className' with '&'.`,
        code: `
      import { styled } from "styled-components";

      import logo from "../assets/logo.png";

      const StyledHeader = styled.header\`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;

        & img {
          object-fit: contain;
          margin-bottom: 2rem;
          width: 11rem;
          height: 11rem;
        }
        
        & h1 {
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.4em;
          text-align: center;
          text-transform: uppercase;
          color: #9a3412;
          font-family: 'Pacifico', cursive;
          margin: 0;
        }
        
        & p {
          text-align: center;
          color: #a39191;
          margin: 0;
        }
        
        @media (min-width: 768px) {
          margin-bottom: 4rem;
        
          & h1 {
            font-size: 2.25rem;
          }
        }
      \`;

      export default function Header() {
        return (
          <StyledHeader>
            <img src={logo} alt="A canvas" />
            <h1>ReactArt</h1>
            <p>A community of artists and art-lovers.</p>
          </StyledHeader>
        );
      }
      `,
      },
      {
        id: "sbtp4",
        title: "Reusable style components",
        text: `syled-components are components like React components, so you can make it reusable style component.`,
        code: `
      App.jsx --------------------------------------------------

      import Button from "./UI/Button.jsx";
      import Input from "./UI/Input.jsx";

      const ControlContainer = styled.div\`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
      \`;

      ...

      return (
          <div id="auth-inputs">
            <ControlContainer>
              <Input
                label="Email"
                invalid={emailNotValid}
                type="email"
                onChange={(event) => handleInputChange("email", event.target.value)}
              />
              <Input
                label="Password"
                invalid={passwordNotValid}
                type="password"
                onChange={(event) =>
                  handleInputChange("password", event.target.value)
                }
              />
            </ControlContainer>
            <div className="actions">
              <button type="button" className="text-button">
                Create a new account
              </button>
              <Button onClick={handleLogin}>Sign In</Button>
            </div>
          </div>
        );

      Button.jsx -----------------------------------------------

      import { styled } from "styled-components";

      const Button = styled.button\`
        padding: 1rem 2rem;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 0.25rem;
        color: #1f2937;
        background-color: #f0b322;
        border-radius: 6px;
        border: none;

        &:hover {
          background-color: #f0920e;
        }
      \`;

      export default Button;

      Input.jsx ------------------------------------------------

      import { styled } from "styled-components";

      const Label = styled.label\`
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: ({$invalid:t})=>t?"#f87171":"#6b7280";
      \`;

      const Input = styled.input\`
        width: 100%;
        padding: 0.75rem 1rem;
        line-height: 1.5;
        background-color: ({$invalid:t})=>t?"#fed2d2":"#d1d5db";
        color: ({$invalid:t})=>t?"#ef4444":"#374151";
        border: 1px solid ({$invalid:t})=>t?"#f73f3f":"transparent";
        border-radius: 0.25rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      \`;

      export default function CustomInput({label, invalid, ...props}) {
          return (
              <p>
                  <Label $invalid={invalid} >{label}</Label>
                  <Input $invalid={invalid} {...props} />
              </p>
          );
      }
      `,
      },
    ],
  },
  {
    id: "tp3",
    title: "Tailwind CSS",
    subTopics: [
      {
        id: "sbtp1",
        title: "Installation with Vite",
        text: `You need to install Tailwind CSS, configure your template paths and add the Tailwind directives to your CSS. It iften requires re-initializing the server.`,
        code: `
      terminal -------------------------------------------------

      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p

      tailwind.config.js ---------------------------------------

      /** @type {import('tailwindcss').Config} */
      export default {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }

      index.css ------------------------------------------------

      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      `,
      },
      {
        id: "sbtp2",
        title: "How to use",
        text: `You can use tailwind CSS by adding various className.`,
        code: `
      <header className="flex flex-col items-center mt-8 mb-16">
        <img src={logo} alt="A canvas" className="mb-8 w-44 h-44" />
        <h1 className="
            text-4xl 
            font-semibold 
            tracking-widest 
            text-center 
            uppercase 
            text-amber-800 
          "
        >
          ReactArt
        </h1>
        <p className="text-stone-500">
          A community of artists and art-lovers.
        </p>
      </header>
      `,
      },
      {
        id: "sbtp3",
        title: "Using custom font",
        text: `Set up in tailwind.config.js by extending fontFamily property. One-word name should be wrapped with single quotation marks and two-words name should be with double quotation marks. Sometimes it requires re-initializing the server.`,
        code: `
      tailwind.config.js ---------------------------------------

      /** @type {import('tailwindcss').Config} */
      export default {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {
            fontFamily: {
              'roboto': ['"Roboto"', "sans-serif"],
              "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
              "bricolage-grotesque": ['"Bricolage Grotesque"', "sans-serif"],
              'raleway': ['"Raleway"', "sans-serif"],
            }
          },
        },
        plugins: [],
      }

      index.html -----------------------------------------------

      <head>
        ...

        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>

      App.jsx --------------------------------------------------

      <h1
        className="
          ...

          font-title
        "
      >
        ReactArt
      </h1>
      `,
      },
      {
        id: "sbtp4",
        title: "Media queries",
        text: `Adding className such as 'sm: ', 'md: ', 'lg: ', 'xl: ', '2xl: '.`,
        code: `
      <header className=" ... mb-8 md:mb-16">

      ...

      <h1
        className="
          text-xl
          md:text-4xl 
          
          ...
        "
      >
        ReactArt
      </h1>
      `,
      },
      {
        id: "sbtp5",
        title: "Hover state",
        text: `Adding className 'hover: '.`,
        code: `
      <button className=" ... bg-amber-400 hover:bg-amber-500" {...props}>
        {children}
      </button>
      `,
      },
      {
        id: "sbtp6",
        title: "Dynamic styling",
        text: `Good use example is feeding classNames based on conditions.`,
        code: `
      export default function Input({ label, invalid, ...props }) {
        let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
        let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";

        if (invalid) {
          labelClasses += " text-red-400";
          inputClasses += " text-red-500 bg-red-100 border-red-300";
        } else {
          labelClasses += " text-stone-300";
          inputClasses += " text-gray-700 bg-stone-300";
        }

        return (
          <p>
            <label className={labelClasses}>{label}</label>
            <input className={inputClasses} {...props} />
          </p>
        );
      }
      `,
      },
    ],
  },
];

export const ADVANCED_TOPICS_ARRAY = [
  {
    id: "tp1",
    title: "Class based components",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
  {
    id: "tp2",
    title: "Error handling",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
  {
    id: "tp3",
    title: "Custom hooks",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
  {
    id: "tp4",
    title: "Forms and user inputs",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
  {
    id: "tp5",
    title: "Reset user inputs",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
  {
    id: "tp6",
    title: "Input validation",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
];

export const REDUX_TOPICS_ARRAY = [
  {
    id: "tp1",
    title: "Redux intro",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
  {
    id: "tp2",
    title: "Redux with React - 1",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
  {
    id: "tp3",
    title: "Redux Toolkit",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
  {
    id: "tp4",
    title: "Redux advanced",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
];

export const REACT_ROUTER_TOPICS_ARRAY = [
  {
    id: "tp1",
    title: "React router intro",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
  {
    id: "tp2",
    title: "",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
];

export const AUTHENTICATION_TOPICS_ARRAY = [
  {
    id: "tp1",
    title: "",
    subTopics: [
      {
        id: "sbtp1",
        title: "",
        text: ``,
        code: `
  
        `,
      },
    ],
  },
];

export const MOUSE_EVENTS = [
  {
    id: "e1",
    title: "onCLick",
    link: "https://www.w3schools.com/jsref/event_onclick.asp",
    texts: "Clicks on an element",
  },
  {
    id: "e2",
    title: "onContextMenu",
    link: "https://www.w3schools.com/jsref/event_oncontextmenu.asp",
    texts: "Right-clicks on an element",
  },
  {
    id: "e3",
    title: "onDoubleClick",
    link: "https://www.w3schools.com/jsref/event_ondblclick.asp",
    texts: "Double-clicks on an element",
  },
  {
    id: "e4",
    title: "onMouseDown",
    link: "https://www.w3schools.com/jsref/event_onmousedown.asp",
    texts: "A mouse button is pressed over an element",
  },
  {
    id: "e5",
    title: "onMouseEnter",
    link: "https://www.w3schools.com/jsref/event_onmouseenter.asp",
    texts: "The pointer is moved onto an element",
  },
  {
    id: "e6",
    title: "onMouseLeave",
    link: "https://www.w3schools.com/jsref/event_onmouseleave.asp",
    texts: "The pointer is moved out of an element",
  },
  {
    id: "e7",
    title: "onMouseMove",
    link: "https://www.w3schools.com/jsref/event_onmousemove.asp",
    texts: "The pointer is moving over an element",
  },
  {
    id: "e8",
    title: "onMouseOut",
    link: "https://www.w3schools.com/jsref/event_onmouseout.asp",
    texts: "The mouse pointer moves out of an element",
  },
  {
    id: "e9",
    title: "onMouseOver",
    link: "https://www.w3schools.com/jsref/event_onmouseover.asp",
    texts: "The mouse pointer is moved over an element",
  },
  {
    id: "e10",
    title: "onMouseUp",
    link: "https://www.w3schools.com/jsref/event_onmouseup.asp",
    texts: "The mouse button is released over an element",
  },
];

export const DRAG_EVENTS = [
  {
    id: "e1",
    title: "onDrag",
    link: "https://www.w3schools.com/jsref/event_ondrag.asp",
    texts: "An element is being dragged",
  },
  {
    id: "e2",
    title: "onDragStart",
    link: "https://www.w3schools.com/jsref/event_ondragstart.asp",
    texts: "The user starts to drag an element",
  },
  {
    id: "e3",
    title: "onDragEnd",
    link: "https://www.w3schools.com/jsref/event_ondragend.asp",
    texts: "Finished dragging an element",
  },
  {
    id: "e4",
    title: "onDragEnter",
    link: "https://www.w3schools.com/jsref/event_ondragenter.asp",
    texts: "A dragged element enters the drop target",
  },
  {
    id: "e5",
    title: "onDragLeave",
    link: "https://www.w3schools.com/jsref/event_ondragleave.asp",
    texts: "A dragged element leaves the drop target",
  },
  {
    id: "e6",
    title: "onDragOver",
    link: "https://www.w3schools.com/jsref/event_ondragover.asp",
    texts: "A dragged element is over the drop target",
  },
  {
    id: "e7",
    title: "onDrop",
    link: "https://www.w3schools.com/jsref/event_ondrop.asp",
    texts: "A dragged element is dropped on the target",
  },
];
