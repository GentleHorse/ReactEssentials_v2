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
  },
  {
    id: "s4",
    title: "Advanced",
    path: "/advanced",
  },
  {
    id: "s5",
    title: "Styling",
    path: "/styling",
  },
  {
    id: "s6",
    title: "Events",
    path: "/events",
  },
  {
    id: "s7",
    title: "Redux",
    path: "/redux",
  },
  {
    id: "s8",
    title: "React router",
    path: "/react-router",
  },
  {
    id: "s9",
    title: "Authentication",
    path: "/authentication",
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
        title: "What is it?",
        text: `Class based components are still supported by React, but it is not recommend using them in new code. To define a React component as a class, extend the built-in Component class and define “a render method”. Props are accessible with “this” keywords. In addition, you can not use React hooks with class based components. Here is a comparison to function components.`,
        code: `
      import { Component } from "react";

      class User extends Component {
        render() {
          return <li>{this.props.name}</li>;
        }
      }

      export default User;

      -------------------------------------

      const User = (props) => {
        return <li>{props.name}</li>;
      };

      export default User;
        `,
      },
      {
        id: "sbtp2",
        title: "States and handlers",
        text: `You can not use useState for state management with class based component, thus you need to deal with state management in a different way; constructor(). With class based component, state must be ONE OBJECT and in order to change the value of state, you have to use setState(). This function DOES NOT OVERRIDE state, instead behind the scenes it MERGES old state and new state. When you register the handler function to HTML properties such as onClick(), you MUST USE bind(this) method or arrow function.`,
        code: `
      import { Component } from "react";

      const DUMMY_USERS = [ //... ];

      class Users extends Component {

        // 1) state initialization
        constructor() {

          super();

          this.state = {
            showUsers: true,
          };

        }

        // 2) Handler to manage the state
        toggleUsersHandler() {
          this.setState((curState) => {
            return { showUsers: !curState.showUsers };
          });
        }

        // 3) Render + pass handler to button click
        render() {
          const usersList = (
            <ul>
              {DUMMY_USERS.map((user) => (
                <User key={user.id} name={user.name} />
              ))}
            </ul>
          );

          return (
            <div>
              {/* <button onClick={() => this.toggleUsersHandler()}> */}
              <button onClick={this.toggleUsersHandler.bind(this)}>
                {this.state.showUsers ? "Hide" : "Show"} Users
              </button>
              {this.state.showUsers && usersList}
            </div>
          );
        }
      }

      ------------------------------------------------------------------

      const Users = () => {
        const [showUsers, setShowUsers] = useState(true);

        const toggleUsersHandler = () => {
          setShowUsers((curState) => !curState);
        };

        const usersList = (
          <ul>
            {DUMMY_USERS.map((user) => (
              <User key={user.id} name={user.name} />
            ))}
          </ul>
        );

        return (
          <div>
            <button onClick={toggleUsersHandler}>
              {showUsers ? "Hide" : "Show"} Users
            </button>
            {showUsers && usersList}
          </div>
        );
      };

      export default Users;
        `,
      },
      {
        id: "sbtp3",
        title: "Side effects, replacement functions of useEffect()",
        text: `With class based components, you cannot use useEffect(). Instead you have to use componentDidMount(): when mounted <——> useEffect(…, []), componentDidUpdate(): when updated <——> useEffect(…, [someValue]), componentWillUnmount(): when destroyed <——> useEffect(() ⇒ { return () ⇒ {}}, []). `,
        code: `
      // At initial render
      componentDidMount() {

        // ... Send http request here, for example ...

        this.setState({ filteredUsers: DUMMY_USERS });
      }

      // At every target variable change
      componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
          this.setState({
            filteredUsers: DUMMY_USERS.filter((user) =>
              user.name.includes(this.state.searchTerm)
            ),
          });
        }
      }

      -------------------------------------------------------

      useEffect(() => {
          setFilteredUsers(
            DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
          );
        }, [searchTerm]);
        `,
      },
      {
        id: "sbtp4",
        title: "Context API",
        text: `With class based components, you can still use createContext() to create a context and wrap around child components with SomeContext.Provider to enable them to use the context, however you cannot use useContext() inside child components. Instead you need to define the context with “static contextType = SomeContext”. Then you can access the context value by “this.contex.someValue”.`,
        code: `
      import { createContext } from "react";

      const UsersContext = createContext({
        users: [],
      });

      export default UsersContext;

      ---------------------------------------

      const usersContext = { ... }

      ...

      <UsersContext.Provider value={usersContext}>
          <UserFinder />
      </UsersContext.Provider>

      ---------------------------------------

      class UserFinder extends Component {

        static contextType = UsersContext;
        
        constructor() { ... }
        
        
        componentDidMount() {
        
          this.setState({ filteredUsers: this.context.users });
        }
        
        
        render() {
          return (
            <>
              <div>
                <input type="search" />
              </div>
              <Users />
            </>
          );
        }
      }

      export default UserFinder;
        `,
      },
      {
        id: "sbtp5",
        title: "Error boundary",
        text: `Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.`,
        code: `
      import { Component } from "react";

      class ErrorBoundary extends Component {
        constructor() {
          super();
          this.state = { hasError: false };
        }

        componentDidCatch(error) {
          console.log(error)
          this.setState({ hasError: true });
        }

        render() {
          if (this.state.hasError) {
            return <p>Something went wrong!</p>;
          }

          return this.props.children;
        }
      }

      export default ErrorBoundary;

      ------------------------------------------

      <ErrorBoundary>
        <Users />
      </ErrorBoundary>
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
        title: "With HTTP requests",
        text: `Error handling is a crucial thing not only in React and here's one typical example of error handling in React applications.`,
        code: `
      const [isFetching, setIsFetching] = useState(false);
      const [availablePlaces, setAvailablePlaces] = useState([]);
      const [error, setError] = useState();

      ....

      useEffect(() => {

          /**
           * DEFINE THE HTTP REQUEST FUNCTION WITH ERROR HANDLING
           */
          async function fetchPlaces() {
          setIsFetching(true); // Send a signal of "start fetching"

          try {
              const response = await fetch("http://localhost:3000/places");
              const resData = await response.json();

              // If fail to send http request
              if (!response.ok) {
              throw new Error("Failed to fetch places");
              }

              setAvailablePlaces(resData.places);

          } catch (error) {
              setError({
              message:
                  error.message || "Could not fetch places, please try again later.",
              });
          }

          setIsFetching(false); // Send a signal of "end fetching"

          }

          /**
           * CALL THE FUNCTION
           */
          fetchPlaces();

      }, []);
        `,
      },
      {
        id: "sbtp2",
        title: "Optimistic updating",
        text: `Updating data with RESTful API might takes time and it's not a good user experience to always show loading state. So here's an example of updating data behind the scene with showing something on UI.`,
        code: `
      // Updating user selected places error state
      const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();

      ....

      async function handleSelectPlace(selectedPlace) {

          // 1. Firstly update data on UI
          setUserPlaces((prevPickedPlaces) => { .... });

          // 2. Behind updating UI, sending PUT request via RESTful API
          try {

              // The outsourced function in http.js file
              await updateUserPlaces([selectedPlace, ...userPlaces]);

          } catch (error) {

              // If some errors occur, roll back to previous state
              // Instead of showing loading state to users
              setUserPlaces(userPlaces);

              // Set error message
              setErrorUpdatingPlaces({
                  message: error.message || "Failed to update places",
              });
          }
      }
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
        title: "With HTTP requests",
        text: `By defining your own custom hooks, you can create reusable functions with reusable state management. This means you can use it in multiple components and each time it's in used, it's newly created and its states won't affect other states in other components (they are completely independent). Custom hooks must start with “use” followed by a capital letter. Here's one example of fetching data via HTTP requests. 'fetchFn' is call HTTP requests and fetch data via RESTful API and 'initialValue' is the initial value of response data.`,
        code: `
      ====> useFetch.js <==================================================


      import { useEffect, useState } from "react";

      export function useFetch(fetchFn, initialValue) {
          const [isFetching, setIsFetching] = useState();
          const [error, setError] = useState();
          const [fetchedData, setFetchedData] = useState(initialValue);

          /**
           * LOAD DATA -------------------------------------------------------
           */
          useEffect(() => {
          // 1. DEFINE THE FUNCTION
          async function fetchData() {
              setIsFetching(true); // The signal of start loading

              try {
              const data = await fetchFn();
              setFetchedData(data);
              } catch (error) {
              setError({ message: error.message || "Failed to fetch data." });
              }

              setIsFetching(false); // The signal of finish loading
          }

          // 2. CALL THE FUNCTION
          fetchData();
          }, [fetchFn]);


          /**
           * EXPOSED STATES & SET STATE FUNCTIONS ----------------------------
           */
          return {
          isFetching,         // isFetching: isFetching
          fetchedData,        // fetchedData: fetchedData
          setFetchedData,     // setFetchedData: setFetchedData
          error,              // error: error
          }
      }

      ====> App.js <=========================================================

      const {
        isFetching,
        error,
        fetchedData: userPlaces,          // alias
        setFetchedData: setUserPlaces,    // alias
      } = useFetch(fetchUserPlaces, []);   
        `,
      },
      {
        id: "sbtp2",
        title: "For user input management",
        text: `Managing user inputs is more or less similar to any cases, its logics are quite same, and it requires to keep tracks of user inputs with useState().  Thus, it's a nice case for creating a custom hook for that.`,
        code: `
      import { useState } from "react";

      export default function useInput(initialValue, validationFn) {
        /**
         * State - managing user input
         */
        const [enteredValue, setEnteredValue] = useState(initialValue);

        /**
         * State - tracking editing input
         */
        const [didEdit, setDidEdit] = useState(false);

        /**
         * Validation logic
         */
        const valueIsValid = validationFn(enteredValue);

        /**
         * Handler - tracking input changes
         */
        function handleInputChange(event) {
          setEnteredValue(event.target.value);
          setDidEdit(false); // Reset editing state
        }

        /**
         * Handler - tracking focus or out of focus
         */
        function handleInputBlur() {
          setDidEdit(true);
        }

        /**
         * EXPOSE VALUES, FUNCTIONS
         */
        return {
          value: enteredValue,
          handleInputChange,
          handleInputBlur,
          hasError: didEdit && !valueIsValid,
        };
      }
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
        title: "Prevent default form submission behaviour",
        text: `As default in browser, whichever button is clicked inside <form> tag, a HTTP request is automatically sent to the server. Default type of buttons in <form> tag is 'submit', which means, it triggers reloading a page. To prevent page reload, add 'onSubmit' attribute to <form> tag and use 'event.preventDefault()' in the linked handler.`,
        code: `
      function handleSubmit(event) {
          event.preventDefault();
      }

      return (
          <form onSubmit={handleSubmit}>
                  
              ....
                  
          </form>
        `,
      },
      {
        id: "sbtp2",
        title: "One state and one generic handler for user inputs",
        text: `The more user input are, the more states and handlers are required, which is not ideal for maintaining codes. Thus, it's better to use minimum state managements and handlers, and here's one example.`,
        code: `
      const [enteredValues, setEnteredValues] = useState({
          email: "",
          password: "",
      });

      ....

      function handleInputChange(identifier, value) {
          setEnteredValues((prevValues) => ({
              ...prevValues,
              [identifier]: value,
          }));
      }

      return (
          <form onSubmit={handleSubmit}>

                  ....

              <div className="control-row">
                  <div className="control no-margin">
                      <label htmlFor="email">Email</label>
                      <input
                      id="email"
                      type="email"
                      name="email"
                      onChange={(event) => handleInputChange("email", event.target.value)}
                      value={enteredValues.email}
                      />
                  </div>

                  <div className="control no-margin">
                      <label htmlFor="password">Password</label>
                      <input
                      id="password"
                      type="password"
                      name="password"
                      onChange={(event) =>
                          handleInputChange("password", event.target.value)
                      }
                      value={enteredValues.password}
                      />
                  </div>
              </div>

                  ....
                  
          </form>
        `,
      },
      {
        id: "sbtp3",
        title: "useRef for user inputs",
        text: `For handling user inputs, one alternative way of two way binding (one state + one generic handler) is using useRef() to create links to input values.`,
        code: `
      const emailRef = useRef();
      const passwordRef = useRef();

      function handleSubmit(event) {
          event.preventDefault();

          const enteredEmail = emailRef.current.value;
          const enteredPassword = passwordRef.current.value;

          console.log(enteredEmail, enteredPassword);
      }

      return (
          <form onSubmit={handleSubmit}>
              <h2>Login</h2>

              <div className="control-row">
                  <div className="control no-margin">
                  <label htmlFor="email">Email</label>
                  <input 
                      id="email" 
                      type="email" 
                      name="email" 
                      ref={emailRef}
                      />
                  </div>

                  <div className="control no-margin">
                  <label htmlFor="password">Password</label>
                  <input
                      id="password"
                      type="password"
                      name="password"
                      ref={passwordRef}
                  />
                  </div>
              </div>

              <p className="form-actions">
                  <button className="button button-flat">Reset</button>
                  <button className="button">Login</button>
              </p>
          </form>
        `,
      },
      {
        id: "sbtp4",
        title: "FormData object for user inputs",
        text: `In order to collect user input data, you could use useState() or useRef() for managing it, but it's still cumbersome. A better way is to use “FormData” object. It collects and wraps all user input values inside <form> tag. Be aware, if you want to gather user inputs correctly, you must put “name” attribute to every <input> tag, <select> tag or other input fields. You can withdraw user inputs with Object.fromEntries(fd.entries()).`,
        code: `
      function handleSubmit(event) {
          event.preventDefault();
          
          const fd = new FormData(event.target);
          const acquisitionChannel = fd.getAll("acquisition");  // Get multi selection input
          const data = Object.fromEntries(fd.entries());
          data.acquisition = acquisitionChannel; // Merge multi selection input
          
          console.log(data);
          }
          
          return (
              <form onSubmit={handleSubmit}>
                  
                  ....
              
                  <div>
                      ....
                      <input .... name="email" />
                  </div>
              
                  <div>
                  <div>
                      ....
                      <input .... name="password" />
                  </div>
              
                  <div>
                      ....
                      <input .... name="confirm-password" />
                  </div>
                  </div>
              
                  ....
              
                  <div>
                  <div>
                      ....
                      <input .... name="first-name" />
                  </div>
              
                  <div>
                      ....
                      <input .... name="last-name" />
                  </div>
                  </div>
              
                  <div>
                      ....
                      <select .... name="role">
                          <option> .... </option>
                          <option> .... </option>
                          <option> .... </option>
                          <option> .... </option>
                          <option> .... </option>
                      </select>
                  </div>
              
                  <fieldset>
                      ....
                      <div>
                          <input .... name="acquisition" />
                          <label htmlFor="a"> .... </label>
                      </div>
                  
                      <div>
                          <input .... name="acquisition" />
                          <label htmlFor="b"> .... </label>
                      </div>
                      
                      <div>
                          <input .... name="acquisition" />
                          <label htmlFor="c"> .... </label>
                      </div>
                  
                  </fieldset>
              
                  ....
                  
              </form>
          );
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
        title: "Built-in reset form logic",
        text: `If you set 'type' attribute of <button> inside <form> tag to 'reset', it enables to clear user inputs by clicking.`,
        code: `
      <form onSubmit={handleSubmit}>

          ....
          
          <p ....>
              <button type="reset" ..... >
                  Reset
              </button>
              <button type="submit" .....>
                  Sign up
              </button>
          </p>
          
      </form>
        `,
      },
      {
        id: "sbtp2",
        title: "useState() reset form logic",
        text: `If you manage user inputs with useState(), you can reset by providing states with the initial values.`,
        code: `
      function handleSubmit(event) {
          event.preventDefault();

          ....

          setEnteredValues({
              email: "",        // Clear out email input
              password: "",     // Clear out password input
          })
      }
        `,
      },
      {
        id: "sbtp3",
        title: "useRef() reset form logic",
        text: `If you manage user inputs with useRef(), you can reset by setting null values.`,
        code: `
      function handleSubmit(event) {
          event.preventDefault();

          const enteredEmail = emailRef.current.value;
          const enteredPassword = passwordRef.current.value;

          ....

          emailRef.current.value = "";         // Clear out email input
          passwordRef.current.value = "";      // Clear out password input
      }
        `,
      },
      {
        id: "sbtp4",
        title: "FormData reset form logic",
        text: `If you manage user inputs with FormData, you can reset by reset() method.`,
        code: `
      function handleSubmit(event) {
          event.preventDefault();

          const fd = new FormData(event.target);
          const acquisitionChannel = fd.getAll("acquisition");  // Get multi selection input
          const data = Object.fromEntries(fd.entries());
          data.acquisition = acquisitionChannel; // Merge multi selection input

          ....

          event.target.reset();    // Clear out inputs
      }
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
        title: "Validate on every keystroke",
        text: `If you want to validate every keystroke, you need to use useState() for managing user input. In the below example, an error message shows right after a user type a letter in the input box (= right after the user input is not null).`,
        code: `
      const [enteredValues, setEnteredValues] = useState({
          email: "",
          password: "",
          });

      // Validation
      const emailIsInvalid =
          enteredValues.email !== "" && !enteredValues.email.includes("@");

      ....

      // Two-way binding
      function handleInputChange(identifier, value) {
          setEnteredValues((prevValues) => ({
          ...prevValues,
          [identifier]: value,
          }));
      }

      return (
          <form onSubmit={handleSubmit}>
              ....

              <div ....>
                  <div ....>
                      <label ....> .... </label>
                      <input
                          id="email"
                          type="email"
                          name="email"
                          onChange={(event) => handleInputChange("email", event.target.value)}
                          value={enteredValues.email}
                      />
                      <div .... >
                          {emailIsInvalid && <p>Please enter a valid email address.</p>}
                      </div>
                  </div>
                  
                  ....   
        `,
      },
      {
        id: "sbtp2",
        title: "Validate on lost focus",
        text: `If you want to validate once the input loses focus, you need to use onBlur event listener. And for better user experience, you can combine with keystroke validation (in below example, it's done via 'didEdit' state management).`,
        code: `
      // State - entered values in the inputs
      const [enteredValues, setEnteredValues] = useState({
          email: "",
          password: "",
      });

      // State - focus or lose focus
      const [didEdit, setDidEdit] = useState({
      email: false,
      password: false,
      });

      // Validation - lose focus
      const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

      ....

      // Handler - listen input change + reset 'lose focus' state
      function handleInputChange(identifier, value) {
      setEnteredValues((prevValues) => ({
          ...prevValues,
          [identifier]: value,
      }));

      setDidEdit(prevDidEdit => ({
          ...prevDidEdit,
          [identifier]: false,
      }))
      }

      // Handler - change 'lose focus' state
      function handleInputBlur(identifier) {
      setDidEdit((prevDidEdit) => ({
          ...prevDidEdit,
          [identifier]: true,
      }));
      }

      return (
          <form .... >
              ....

              <div .... >
                  <div .... >
                      <label .... > .... </label>
                      <input
                      id="email"
                      type="email"
                      name="email"
                      onBlur={() => handleInputBlur("email")}
                      onChange={(event) => handleInputChange("email", event.target.value)}
                      value={enteredValues.email}
                      />
                      <div .... >
                          {emailIsInvalid && <p>Please enter a valid email address.</p>}
                      </div>
                  </div>

                  ....
        `,
      },
      {
        id: "sbtp3",
        title: "Validate on submit",
        text: `You can validate input data on submitting a form by using useRef().`,
        code: `
      // State - valid input or not
      const [emailIsInvalid, setEmailIsInvalid] = useState(false);

      // Ref - managing the inputs
      const emailRef = useRef();
      const passwordRef = useRef();

      // Handler - submit + validation
      function handleSubmit(event) {
          event.preventDefault();

          const enteredEmail = emailRef.current.value;
          const enteredPassword = passwordRef.current.value;

          const emailIsValid = enteredEmail.includes("@");

          if (!emailIsValid) {
          setEmailIsInvalid(true);  // The email input is invalid

          // Prevent to execute following codes
          return;
          }

          // If the email input is valid
          // change the state for disappearing the error message 
          setEmailIsInvalid(false);
      }

      return (
          <form .... >
              ....

              <div .... >
                  <div .... >
                      <label .... > .... </label>
                      <input id="email" type="email" name="email" ref={emailRef} />
                      <div .... >
                          {emailIsInvalid && <p>Please enter a valid email address.</p>}
                      </div>
                  </div>
              
              ....
        `,
      },
      {
        id: "sbtp4",
        title: "Validate via built-in props",
        text: `For user input validations, you can use built-in validation props. You can put ‘required’ attribute to <input> tag and other input field tag such as <select> tag. About password validation, you can also set minmum length by adding 'minLength' attribute.`,
        code: `
      <input id="email" type="email" name="email" required />

      <input id="password" type="password" name="password" required minLength={8} />

      <input type="text" id="first-name" name="first-name" required />

      <input type="text" id="last-name" name="last-name" required />

      <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
      </select>

      <input type="checkbox" id="terms-and-conditions" name="terms" required />
        `,
      },
      {
        id: "sbtp5",
        title: "Password match logic",
        text: `Password-match check It's quite normal to ask users to put passwords twice for confirmation, and show a message if two of them don't match with each other. Here's one example of that logic.`,
        code: `
      const [passwordAreNotEqual, setPasswordAreNotEqual] = useState(false);

      function handleSubmit(event) {
          event.preventDefault();

          const fd = new FormData(event.target);
          const acquisitionChannel = fd.getAll("acquisition"); // Get multi selection input
          const data = Object.fromEntries(fd.entries());
          data.acquisition = acquisitionChannel; // Merge multi selection input

          /**
           *
           * PASSWORD MATCH LOGIC
           *
           * You can access specific data via "name" attribute
           * "data.confirm-password" is not valid form
           * thus, use data[confirm-password] instead
           *
           */
          if (data.password !== data[confirm - password]) {
              setPasswordAreNotEqual(true);
              return;
          }

          // If inputs are valid, go to the next action
          console.log(data);
      }

      return (
          <form .... >
              ....

              <div .... >
                  <div .... >
                      <label .... >Password</label>
                      <input
                          id="password"
                          type="password"
                          name="password"
                          required
                          minLength={8}
                      />
                  </div>

                  <div .... >
                      <label .... >Confirm Password</label>
                      <input
                          id="confirm-password"
                          type="password"
                          name="confirm-password"
                          required
                      />
                  <div .... >
                      {passwordAreNotEqual && <p>Password must match.</p>}
                  </div>
                  </div>
              </div>

              ....
        `,
      },
    ],
  },
  {
    id: "tp7",
    title: "Deploying react app",
    subTopics: [
      {
        id: "sbtp1",
        title: "Deploying steps",
        text: `You need to take several steps for deploying a react app:
【Test Code】 Manually & with automated tests
【Optimize Code】 Optimize user experience & performance
【Build App】Run build process to parse, transform & optimize code
【Upload App】Upload production code to hosting server
【Configure Server】Ensure app is served securely & as intended`,
      },
      {
        id: "sbtp2",
        title: "Lazy loading",
        text: `“Lazy loading” is loading code only when it’s needed. In the below example, <BlogPage /> & <PostPage /> are only imported when a user tries to visit the route, then after the page is imported, execute the “loader()” function. And also <BlogPage /> & <PostPage /> should be correctly prepared with “lazy()” method and needs to be wrapped with <Suspense> when it’s rendered. One thing to be noted is that if the page is required dynamic path parameter with “useParams” or other method, you need to pass “meta” to loader() function. `,
        code: `
      // App.js ---------------------------------------------------------------

      import { lazy, Suspense } from "react";

      const BlogPage = lazy(() => import("./pages/Blog"));
      const PostPage = lazy(() => import("./pages/Post"));

      const router = createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          children: [
          
            {
              index: true,
              element: <HomePage />,
            },
            
            {
              path: "posts",
              children: [
              
                {
                  index: true,
                  element: (
                    <Suspense fallback={<p>Loading ... </p>}>
                      <BlogPage />
                    </Suspense>
                  ),
                  loader: () =>
                    import("./pages/Blog").then((module) => module.loader()),
                },
                
                {
                  path: ":id",
                  element: (
                    <Suspense fallback={<p>Loading ... </p>}>
                      <PostPage />
                    </Suspense>
                  ),
                  loader: (meta) =>
                    import("./pages/Post").then((module) => module.loader(meta)),
                },
                
              ],
            },
          ],
        },
      ]);
        `,
      },
      {
        id: "sbtp3",
        title: "Building the code for production",
        text: `To build the code for production, the code should be properly converted for browsers. Thus you need to run below code after killing the local server. The command produces a code bundle which is highly optimized and transformed, ready for uploading. After the execution is successfully finished, you can see the “build” folder.`,
        code: `
      npm run build
        `,
      },
      {
        id: "sbtp4",
        title: "Deployment - firebase hosting",
        text: `A react single page application (SPA) is a “static website”, which means that only containing HTML, CSS and JavaScript and no server-side codes needed to be executed. So a “static site hosting” is needed. Here, use firebase hosting service. Go to firebase hosting website > create a new project > Build > Hosting > Get Started. If you successfully connect your code to firebase, you can see “firebase.json” & “.firebaserc” files. `,
        code: `
      // 1. Install Firebase CLI ----------------------------------------------

      npm install -g firebase-tools

      // 2. Sign in to Google -------------------------------------------------

      firebase login

      // 3. Initiate your project ----------------------------------------------

      firebase init   

      // Choose "Hosting" feature
      // "Use an existing project" for project option
      // Select "build" folder for production
      // Configure as a single-page app ---> Yes
      // Set up automatic builds and deploys with GitHub? ---> No
      // File build/index.html already exists. Overwrite? ---> No

      // 4. Deploy to Firebase hosting -----------------------------------------

      firebase deploy

      // If you want to offline the server -------------------------------------

      firebase hosting:disable
        `,
      },
      {
        id: "sbtp5",
        title: "Server-side routing and required configuration",
        text: `Even you use react router to make it accessible to multiple routes, it’s still a “SPA” because it all happens in client-side, not server-side.  This means the firebase always returns "/index.html" whatever request the client does!`,
        code: `
      // firebase.json --------------------------------------------------------

      {
        "hosting": {
          "public": "build",
          "ignore": [
            "firebase.json",
            "**/.*",
            "**/node_modules/**"
          ],
          "rewrites": [
            {
              "source": "**",
              "destination": "/index.html"
            }
          ]
        }
      }
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
        title: "What’s Redux and why use it",
        text: `“Redux” is a state management system for cross-component or app-wide state. React Context could also play the same role, but there are several disadvantages such as potential deeply nested providers and bad performance.`,
        code: `
      return (
          <AuthContextProvider>
              <ThemeContextProvider>
                  <UIInteractionContextProvider>
                      <MultiStepFormContextProvider>
                          <UserRegistration />
                      </MultiStepFormContextProvider>
                  </UIInteractionContextProvider>
              </ThemeContextProvider>
          </AuthContextProvider>
      );
        `,
      },
      {
        id: "sbtp2",
        title: "How Redux works",
        text: `Managing ONLY ONE central data (state) store and components subscribe it. Components are NOT DIRECTLY related to state changes, instead “Reducer Function” is in charge of mutating data in the store. Reducer Function runs TWICE; first at the initialization, then by dispatched “Action”. The point is that Reducer Function ALWAYS inputs “old state + dispatch action” and outputs “new state object”. `,
        code: `
      /**
       * IMPORT REDUX
       */
      const redux = require("redux");

      /**
       * REDUCER FUNCTION
       */
      const counterReducer = (state = { counter: 0 }, action) => {
          if (action.type === "increment") {
          return {
              counter: state.counter + 1,
          };
          }

          if (action.type === "decrement") {
          return {
              counter: state.counter - 1,
          };
          }

          return state;
      };

      /**
       * STORE
       */
      const store = redux.createStore(counterReducer);

      /**
       * SUBSCRIPTION
       */
      const counterSubscriber = () => {
          const latestState = store.getState();
          console.log(latestState);
      };

      store.subscribe(counterSubscriber);

      /**
       * DISPATCH AN ACTION
       */
      store.dispatch({ type: "increment" }); // Output ---> { counter: 1 }

      store.dispatch({ type: "decrement" }); // Output ---> { counter: 0 }
        `,
      },
    ],
  },
  {
    id: "tp2",
    title: "Redux with React",
    subTopics: [
      {
        id: "sbtp1",
        title: "Getting started",
        text: `In order to use Redux with React, you should install “redux” & “react-redux”.`,
        code: `
      npm install redux
      npm install react-redux
        `,
      },
      {
        id: "sbtp2",
        title: "Create the store",
        text: `You need to create only ONE store for using Redux.`,
        code: `
      import { createStore } from "redux";

      /**
       * REDUCER FUNCTION
       */
      const counterReducer = (state = { counter: 0 }, action) => {
        if (action.type === "increment") {
          return {
            counter: state.counter + 1,
          };
        }

        if (action.type === "decrement") {
          return {
            counter: state.counter - 1,
          };
        }

        return state;
      };

      /**
       * STORE
       */
      const store = createStore(counterReducer);

      /**
       * EXPOSE THE STORE FOR OUTSIDE COMPONENT
       */
      export default store;
        `,
      },
      {
        id: "sbtp3",
        title: "Providing the store",
        text: `In order to use the store, you need to provided it at the highest level.`,
        code: `
      import React from "react";
      import ReactDOM from "react-dom/client";
      import { Provider } from "react-redux";

      import "./index.css";
      import App from "./App";
      import store from "./store/index.js";

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <Provider store={store}>
          <App />
        </Provider>
      );
        `,
      },
      {
        id: "sbtp4",
        title: "Use the store (useSelector)",
        text: `“react-redux” automatically sets up the subscription for the component. This means whenever the component is re-rendered, it automatically fetch the latest state data.`,
        code: `
      import { useSelector } from 'react-redux';

      ....

      const Counter = () => {

        const counter = useSelector(state => state.counter);

        return (
          
          ....
          
            <div className={classes.value}>{counter}</div>
            
          ....
          
        );
      };
        `,
      },
      {
        id: "sbtp5",
        title: "Dispatch actions (useDispatch)",
        text: `To dispatch actions, you need to use “useDispatch” as a dispatch function.`,
        code: `
      import { useSelector, useDispatch } from "react-redux";

      ....

      const Counter = () => {
        
        const dispatch = useDispatch();

        ....

        const incrementHandler = () => {
          dispatch({ type: "increment" });
        };

        const decrementHandler = () => {
          dispatch({ type: "decrement" });
        };

        ....

        return (
          
          ....
          
              <button onClick={incrementHandler}>Increment</button>
              <button onClick={decrementHandler}>Descrement</button>
            
            ....
            
        );
      };
        `,
      },
      {
        id: "sbtp6",
        title: "Redux with class-based component",
        text: `With class-based component, you cannot use hooks, so you need to use “connect” functions for export the component and pass two values: “mapStateToProps” & “mapDispatchToProps”.  To use three props (the counter state, increment dispatch function and decrement dispatch function), you need to add “this.props” in front of them, and for two dispatch functions, don’t forget to “bind” them.`,
        code: `
      import { Component } from "react";
      import { connect } from "react-redux";

      import classes from "./Counter.module.css";

      class CounterClassBasedVer extends Component {

        /**
         * HANDLERS - INCREMENT, DECREMENT, TOGGLE
         */
        incrementHandler() {
          this.props.increment();
        }
        decrementHandler() {
          this.props.decrement();
        }

        toggleCounterHandler() {}

        render() {
          return (
            <main className={classes.counter}>
              <h1>Redux Counter</h1>
              <div className={classes.value}>{this.props.counter}</div>
              <div>
                <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                <button onClick={this.decrementHandler.bind(this)}>Descrement</button>
              </div>
              <button onClick={this.toggleCounterHandler.bind(this)}>
                Toggle Counter
              </button>
            </main>
          );
        }
      }

      /**
       * STATE MAP PROPS FUNTION 
       */
      const mapStateToProps = (state) => {
        return {
          counter: state.counter,
        };
      };

      /**
       * DISPATCH MAP PROPS FUNCTION
       */
      const mapDispatchToProps = (dispatch) => {
        return {
          increment: () => dispatch({ type: "increment" }),
          decrement: () => dispatch({ type: "decrement" }),
        };
      };

      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(CounterClassBasedVer);
        `,
      },
      {
        id: "sbtp7",
        title: "Attaching payloads to actions",
        text: `For reducer functions, you can payload to actions for more flexibility. In the below example, “amount” is the payload for the action.`,
        code: `
      // store > index.js -----------------------------------------

      const counterReducer = (state = { counter: 0 }, action) => {
        
        ....

        if (action.type === "increse") {
          return {
            counter: state.counter + action.amount,
          };
        }

        ....
        
      };

      // the component ----------------------------------------------

      const increaseHandler = () => {
        dispatch({ type: "increse", amount: 5 });
      };

      ....

        <button onClick={increaseHandler}>Increse by 5</button>
        
      ....
        `,
      },
      {
        id: "sbtp8",
        title: "Working with multiple state properties",
        text: `If there’re multiple state properties, you need to return all of them inside the reducer function (in below case, “counter” & “showCounter”) because redux (react) doesn’t merge them automatically for you (technically, it overrides the old state properties instead of merging them).  And you MUST NOT MUTATE THE EXISTING STATE PROPERTIES (which might cause unpredictable behaviours)!!  Note that everytime one of the state properties changes, the component gets re-rendered.`,
        code: `
      // store > index.js -----------------------------------------

      const initialState = { counter: 0, showCounter: true };

      const counterReducer = (state = initialState, action) => {
        if (action.type === "increment") {
          return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
          };
        }

        if (action.type === "increse") {
          return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
          };
        }

        if (action.type === "decrement") {
          return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
          };
        }

        if (action.type === "toggle") {
          return {
            counter: state.counter,
            showCounter: !state.showCounter,
          };
        }

        return state;
      };

      ....


      // the component ----------------------------------------------

      const showCounter = useSelector((state) => state.showCounter);

      ....

        const toggleCounterHandler = () => {
        dispatch({ type: "toggle" });
      };

      ....

        <div className={classes.value}>{showCounter && counter}</div>
        
      ....	
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
        title: "Getting started",
        text: `You need to install extra package for using Redux Toolkit.`,
        code: `
      npm install @reduxjs/toolkit
      npm install react-redux
        `,
      },
      {
        id: "sbtp2",
        title: "Adding state slices",
        text: `Import “createSlice” which expects an object as an argument. So you need to prepare the slice of the global state. You can create mutiple state slices for maintaining an app. One of the great points of Redux Toolkit is that you can handle state properties in “seemingly” mutating way (like state.counter++) because behind the scene, it will automatically detect it and create the clone of state properties to not mutating the existing states.`,
        code: `
      const initialState = { counter: 0, showCounter: true };

      ...

      const counterSlice = createSlice({
        name: "counter",
        initialState: initialState,
        reducers: {
          increment(state) {
            state.counter++;
          },
          decrement(state) {
            state.counter--;
          },
          increase(state, action) {
            state.counter += action.amount;
          },
          toggleCounter(state) {
            state.showCounter = !state.showCounter;
          },
        },
      });
        `,
      },
      {
        id: "sbtp3",
        title: "Connecting Redux Toolkit State",
        text: `Pass the state slice reducer to the store. To do that, use “configureStore” instead of “createStore” because it automatically merges the multiple reducers.`,
        code: `
      const counterSlice = createSlice({

        ....
        
      });

      const store = configureStore({
        reducer: counterSlice.reducer,
      });
        `,
      },
      {
        id: "sbtp4",
        title: "Providing the store",
        text: `In order to use the store, you need to provided it at the highest level.`,
        code: `
      import React from "react";
      import ReactDOM from "react-dom/client";
      import { Provider } from "react-redux";

      import "./index.css";
      import App from "./App";
      import store from "./store/index.js";

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <Provider store={store}>
          <App />
        </Provider>
      );
        `,
      },
      {
        id: "sbtp5",
        title: "Action objects",
        text: `You can access the slice state methods through the “actions” property and it automatically creates and returns the action object. To dispatch the action object methods (increment, decrement, etc), use “useDispatch()”. Not that if you want to payload some values, you need to set through “payload” attribute.`,
        code: `
      // store > index.js -----------------------------------------

      ....

      const counterSlice = createSlice({
        
        ....
        
        reducers: {
          increment(state) {
            state.counter++;
          },
          decrement(state) {
            state.counter--;
          },
          increase(state, action) {
            state.counter += action.payload;
          },
          toggleCounter(state) {
            state.showCounter = !state.showCounter;
          },
        },

      });

      ....

      export const counterActions = counterSlice.actions;



      // the component ----------------------------------------------

      ....

      const dispatch = useDispatch();

      ....

      const incrementHandler = () => {
        dispatch(counterActions.increment());
      };

      const increaseHandler = () => {
        dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
      };

      const decrementHandler = () => {
        dispatch(counterActions.decrement());
      };

      const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
      };

      ....
        `,
      },
      {
        id: "sbtp6",
        title: "Working with multiple slices",
        text: `Even if you work with mutiple slices, you must have the only ONE store and ONE reducer. Note that to access the state, you need to do it via identifiers of the store “reducer” attribute (in the below example, ”counter’ & “auth”).`,
        code: `
      // store > index.js -----------------------------------------

      import { createSlice, configureStore } from "@reduxjs/toolkit";

      /**
       * INITIAL STATE  - COUNTER, AUTHENTICATION
       */
      const initialCounterState = { counter: 0, showCounter: true };

      const initialAuthState = { isAuthenticated: false };

      /**
       * STATE SLICES - COUNTER, AUTHENTICATION
       */
      const counterSlice = createSlice({
        name: "counter",
        initialState: initialCounterState,
        reducers: {
          // They can be accessed via the "action" property
          increment(state) {
            state.counter++;
          },
          decrement(state) {
            state.counter--;
          },
          increase(state, action) {
            state.counter += action.payload;
          },
          toggleCounter(state) {
            state.showCounter = !state.showCounter;
          },
        },
      });

      const authSlice = createSlice({
        name: "authentication",
        initialState: initialAuthState,
        reducers: {
          login(state) {
            state.isAuthenticated = true;
          },
          logout(state) {
            state.isAuthenticated = false;
          },
        },
      });

      /**
       * STORE
       */
      const store = configureStore({
        reducer: {
          counter: counterSlice.reducer,
          auth: authSlice.reducer,
        },
      });

      /**
       * EXPORT
       */
      export const counterActions = counterSlice.actions;
      export const authActions = authSlice.actions;

      export default store;

      // the component - Counter.js -------------------------------

      ....

      const counter = useSelector((state) => state.counter.counter);
      const showCounter = useSelector((state) => state.counter.showCounter);

      ....

      // the component - Header.js --------------------------------

      ....

      const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

      ....
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
        title: "Async code with useEffect",
        text: `You MUST NOT include side-effects and async tasks (ex. http requests) inside reducer functions. One of the TWO places to execute them is inside the components with “useEffect” hook. In the below example, everytime the redux state slice (cart) is updated, the cart data is sent to the backend via http request (The order is FIRST updating the redux state slice (cart) and THEN sending http request to store the data (cart) in the backend server).`,
        code: `
      // App.js ------------------------------------------------------------------------

      let isInitial = true;

      function App() {
        
        ....
        
        const cart = useSelector((state) => state.cart);
        
        ....

        useEffect(() => {
        
        /**
         * DEFINE THE FUNCTION
         */
        const sendCartData = async () => {
          const response = await fetch(
            "https://--<<some firebase database url>>---- /cart.json",
            { method: "PUT", body: JSON.stringify(cart) }
          );
        }
          
        /**
         * PREVENT EXECUTE AT THE INITIAL RENDER
         */  
        if (isInitial){
          isInitial = false;
          return;
          }
          
        /**
         * EXECUTE THE FUNCTION
         */  
        sendCartData(); 
          
        }, [cart]);

        ....
        
      }

      export default App;


      // store > index.js ---------------------------------------------------------------

      import { configureStore } from "@reduxjs/toolkit";
      import uiSlice from "./ui-slice";
      import cartSlice from "./cart-slice";

      const store = configureStore({
        reducer: {
          ui: uiSlice.reducer,
          cart: cartSlice.reducer,
        },
      });

      export default store;
        `,
      },
      {
        id: "sbtp2",
        title: "Aync code with action creator thunk",
        text: `Another place to execute async tasks is inside an action creator thunk.  An action creator function does NOT return the action itself, instead returns ANOTHER FUNCTION which EVENTUALLY returns the action (= it delays the action until later). In the below example, defin e “action creator thunk” inside cart-slice.js file and export to the App component where that action gets dispatched.`,
        code: `
      // store > cart-slice.js -------------------------------------------------------

      export const sendCartData = (cart) => {
        return async (dispatch) => {
          // UI - sending the cart data
          dispatch(
            uiActions.showNotification({
              status: "pending",
              title: "Sending ....",
              message: "Sending cart data!",
            })
          );

          /**
           * DEFINE HTTP REQUEST (PUT)
           */
          const sendRequest = async () => {
            const response = await fetch(
              "https://--<<some firebase database url>>---- /cart.json",
              { method: "PUT", body: JSON.stringify(cart) }
            );

            // Failed
            if (!response.ok) {
              throw new Error("Sending cart data failed.");
            }
          };

          /**
           * SEND HTTP REQUEST (PUT)
           */
          try {
            // Execute sending the request
            await sendRequest();

            // UI - succeeded in sending
            dispatch(
              uiActions.showNotification({
                status: "success",
                title: "Success!",
                message: "Sent cart data successfully!",
              })
            );
          } catch (error) {
            // UI - failed in sending
            dispatch(
              uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending cart data failed!",
              })
            );
          }
        };
      };


      // App.js ------------------------------------------------------------------------

      ....

      import { sendCartData } from "./store/cart-slice.js";

      let isInitial = true;

      function App() {
        const dispatch = useDispatch();

        ....
        
        const cart = useSelector((state) => state.cart);
        
        ....

        useEffect(() => {
        
          // Prevent the code from being executed at the initial render
          if (isInitial) {
            isInitial = false;
            return;
          }

          // Dispatch the http request action
          dispatch(sendCartData(cart));
          
        }, [cart, dispatch]);

        
        ....
        
      }

      export default App;
        `,
      },
      {
        id: "sbtp3",
        title: "Fetching data",
        text: `In the below example, the action creator first fetches the cart data and then updates the slice state of cart in redux.  The action creator is called in App.js component at the initial render.`,
        code: `
      // store > cart-slice.js -------------------------------------------------------

      export const fetchCartData = () => {

        return async (dispatch) => {
          /**
           * DEFINE HTTP REQUEST (GET)
           */
          const fetchData = async () => {
            const response = await fetch("https://--<<some firebase database url>>---- /cart.json");

            if (!response.ok) {
              throw new Error("Could not fetch cart data!");
            }

            const data = await response.json();

            return data;
          };

          /**
           * SEND HTTP REQUEST (GET)
           */
          try {
          
            // Fetch the cart data and set to the cart
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
            
          } catch (error) {
          
            // UI - failed in sending
            dispatch(
              uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Fetching cart data failed!",
              })
            );
            
          }
        };
      };

      // store > cart-actions.js -----------------------------------------------------

      const cartSlice = createSlice({
        
        ....
        
        reducers: {
          
          replaceCart(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
          },

          ....
        },
      });

      // App.js ----------------------------------------------------------------------

      useEffect(() => {
        dispatch(fetchCartData());
      }, [dispatch]);
        `,
      },
    ],
  },
];

export const REACT_ROUTER_TOPICS_ARRAY = [
  {
    id: "tp1",
    title: "Intro",
    subTopics: [
      {
        id: "sbtp1",
        title: "Multiple pages in SPAs",
        text: `In Single Page Applications (SPAs) there is only ONE initial HTML request & response, however page (url) cahnges are handled by client-side React code, not by server-side, so visible content is changed without fetching a new HTML file. `,
      },
      {
        id: "sbtp2",
        title: "Getting started",
        text: `You need to install the package to use React router.`,
        code: `
      npm install react-router-dom
        `,
      },
      {
        id: "sbtp3",
        title: "Defining routes",
        text: `In the root file, use “createBrowserRouter” method and provid it to the “router” attribute of “RouterProvider”.`,
        code: `
      import { createBrowserRouter, RouterProvider } from "react-router-dom";
      import HomePage from "./pages/Home";
      import ProductsPage from "./pages/Products";

      const router = createBrowserRouter([
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <ProductsPage /> },
      ]);

      function App() {
        return <RouterProvider router={router} />;
      }

      export default App;
        `,
      },
      {
        id: "sbtp4",
        title: "Older way of defining routes",
        text: `In React Router v6.4 or older versions, routes are defined in nested JSX codes with “createRoutesFromElements” method and “Route” components.`,
        code: `
      import {
        createBrowserRouter,
        createRoutesFromElements,
        Route,
        RouterProvider,
      } from "react-router-dom";
      import HomePage from "./pages/Home";
      import ProductsPage from "./pages/Products";

      const routesDefinitions = createRoutesFromElements(
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      );

      const router = createBrowserRouter(routesDefinitions);

      function App() {
        return <RouterProvider router={router} />;
      }

      export default App;
        `,
      },
    ],
  },
  {
    id: "tp2",
    title: "Link and NavLink",
    subTopics: [
      {
        id: "sbtp1",
        title: "Navigating between pages with Links",
        text: `With using “Link” component, you can jump to other pages WITHTOUT sending http request to the server (prevent from reloading the whole application again). Note that “Link” only works INSIDE RouterProvider component.`,
        code: `
      import { Link } from "react-router-dom";

      function HomePage() {
      return (
        <>
          <h1>My Home Page</h1>
          <p>
            Go to <Link to="/products">the list of products</Link>.
          </p>
        </>
      );
      }

      export default HomePage;
        `,
      },
      {
        id: "sbtp2",
        title: "Layouts and nested routes",
        text: `To wrap multiple pages, to apply general styling or to implement navigation elements with page links, it’s a pretty standard approach to create “general layout” component and then wrap routes with the “children” attribute. “Outlet” component is the marker of where children components get rendered.`,
        code: `
      // App.js ---------------------------------------------------------------

      const router = createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          children: [
            { path: "/", element: <HomePage /> },
            { path: "/products", element: <ProductsPage /> },
          ],
        },
      ]);

      // Root.js --------------------------------------------------------------

      import { Outlet } from "react-router-dom";
      import MainNavigation from "../components/MainNavigation";

      function RootLayout() {
        return (
          <>
            <MainNavigation />
            <Outlet /> 
          </>
        );
      }

      export default RootLayout;

      // MainNavigation.js ----------------------------------------------------

      import { Link } from "react-router-dom";

      function MainNavigation() {
        return (
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </nav>
          </header>
        );
      }

      export default MainNavigation;
        `,
      },
      {
        id: "sbtp3",
        title: "Showing error page",
        text: `In case the user accidentally entered a wrong url, prepare the error page with “errorElement”. `,
        code: `
      const router = createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [
            { path: "/", element: <HomePage /> },
            { path: "/products", element: <ProductsPage /> },
          ],
        },
      ]);
        `,
      },
      {
        id: "sbtp4",
        title: "Navigation links",
        text: `In “NavLink” component, className can receive a function which can conditionally set the className based on “isActive” prop. As default, className is applied to child elements, so the “end” attribute needs to be set.`,
        code: `
      // MainNavigation.js ----------------------------------------------------

      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      // MainNavigation.module.css --------------------------------------------

      .list a:hover,
      .list a.active {
        color: var(--color-primary-900);  /* css variable */
        text-decoration: underline;
        font-weight: bold;
      }
        `,
      },
    ],
  },
  {
    id: "tp3",
    title: "Navigation and routing",
    subTopics: [
      {
        id: "sbtp1",
        title: "Navigating programmatically",
        text: `In some situcations, you might want to trigger some navigation actions (switching pages) inside components like after sending the form or a certain time passes. This can be done with the “useNavigate” method.`,
        code: `
      import { useNavigate } from "react-router-dom";

      function HomePage() {
        const navigate = useNavigate();

        function navigateHandler() {
          navigate("/products");
        }

        return (
          <>
            
            ....
            
            <p>
              <button onClick={navigateHandler}>Navigate</button>
            </p>
          </>
        );
      }
        `,
      },
      {
        id: "sbtp2",
        title: "Dynamic routes",
        text: `You can set routes dynamically by using “colon + any value” in a path (in the below example, it’s “:productId”), which is technically a placeholder. “useParams” returns params objects which contains every dynamic path segments, so you can load different page based on your custom values in the path.`,
        code: `
      // App.js ---------------------------------------------------------------

      const router = createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [
            
            ....
            
            { path: "/products/:productId", element: <ProductDetailPage /> },
          ],
        },
      ]);

      // Products.js ----------------------------------------------------------

      import { Link } from "react-router-dom";

      const PRODUCTS = [
        { id: "p1", title: "Product 1" },
        { id: "p2", title: "Product 2" },
        { id: "p3", title: "Product 3" },
      ];

      function ProductsPage() {
        return (
          <>
            <h1>The Product Page</h1>
            <ul>
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link to={\`/products/\${product.id}\`}>
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        );
      }

      export default ProductsPage;

      // ProductDetail.js -----------------------------------------------------

      import { useParams } from "react-router-dom";

      function ProductDetailPage() {
        const params = useParams();

        return (
          <>
            
            ....
            
            <p>{params.productId}</p>
          </>
        );
      }
        `,
      },
      {
        id: "sbtp3",
        title: "Relative path vs absolute path",
        text: `Defining paths in a relative way (WITHOUT slash symbol) means following paths are appended after the CURRENT ACTIVE path. In the below example, HomePage url is “/root/”, ProductPage url is “/root/products/”, and ProductDetailPage url is “/root/products/p1”, “/root/products/p2”, “/root/products/p3”. To move up one level with the “Link” component, set “to” attribute to “..” & “relative” attribute to “path” (as default, it’s “route”).`,
        code: `
      // App.js ---------------------------------------------------------------

      const router = createBrowserRouter([
        {
          path: "/root",
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [
            { path: "", element: <HomePage /> },
            { path: "products", element: <ProductsPage /> },
            { path: "products/:productId", element: <ProductDetailPage /> },
          ],
        },
      ]);

      // Products.js ----- /root/products -------------------------------------

      import { Link } from "react-router-dom";

      const PRODUCTS = [
        { id: "p1", title: "Product 1" },
        { id: "p2", title: "Product 2" },
        { id: "p3", title: "Product 3" },
      ];

      function ProductsPage() {
        return (
          <>
            <h1>The Product Page</h1>
            <ul>
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link to={product.id}>
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        );
      }

      export default ProductsPage;

      // ProductDetail.js ----- /root/products/:productId ---------------------

      <p>
        <Link to=".." relative="path">Back</Link>
      </p>
        `,
      },
      {
        id: "sbtp4",
        title: "Index routes",
        text: `Defining the default route, use the “index” attribute.`,
        code: `
      const router = createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <HomePage /> },
            
            ....
            
          ],
        },
      ]);  
        `,
      },
    ],
  },
  {
    id: "tp4",
    title: "Fetch and load data",
    subTopics: [
      {
        id: "sbtp1",
        title: "Data fetching with a loader()",
        text: `By adding the “loader” function to the route, the “loader” function will be executed just before the route is about to be visited (meaning just before the page component which is provided to the “element” attribute gets rendered). Any data which is returned by the function is available in components. In order to access that returned data, use “useLoaderData”. “useLoaderData” returns the loader data for the nearest ancestor Route loader. The data can be accessed inside LOWER routes and components which are used inside these routes, NOT HIGHER level routes.`,
        code: `
      // App.js ---------------------------------------------------------------

      ....

      {
        index: true,
        element: <EventsPage />,
        loader: async () => {
          const response = await fetch("http://localhost:8080/events");

          if (!response.ok) {

            // ..... error handling

          } else {
            const resData = await response.json();

            return resData.events;   // Returns promise
          }
        },
      },

      ....

      // Events.js ------------------------------------------------------------

      import { useLoaderData } from "react-router-dom";
      import EventsList from "../components/EventsList.js";

      function EventsPage() {
        const events = useLoaderData();

        return <EventsList events={events} />;
      }

      export default EventsPage;
        `,
      },
      {
        id: "sbtp2",
        title: "Store the loader() code inside the component",
        text: `It’s a common senario to store loader() code inside the component and exported it to the components where it’s set to the “loader” function of the route.`,
        code: `
      // App.js ---------------------------------------------------------------

      import EventsPage, { loader as eventsLoader } from "./pages/Events.js";

      ....

      {
        index: true,
        element: <EventsPage />,
        loader: eventsLoader
      },

      ....

      // Events.js ------------------------------------------------------------

      import { useLoaderData } from "react-router-dom";
      import EventsList from "../components/EventsList.js";

      /**
       * EVENTS PAGE
       */
      function EventsPage() {
        const events = useLoaderData();

        return <EventsList events={events} />;
      }

      export default EventsPage;

      /**
       * LOADER FUNCTION
       */
      export async function loader() {
        const response = await fetch("http://localhost:8080/events");

          if (!response.ok) {
            // ..... error handling
          } else {
            const resData = await response.json();
        
            return resData.events;
          }
        }

      }
        `,
      },
      {
        id: "sbtp3",
        title: "Fetching the route action state",
        text: `“useNavigation” returns a navigation object which has a property to access the route action state such as “idle”, “loading”, “submitting”. Note that the loading indicator will NOT BE ADDED ON THE PAGE A USER IS CURRENTLY TRANSITIONIONG TO.`,
        code: `
      import { useNavigation } from "react-router-dom";

      function RootLayout() {

        const navigation = useNavigation();  // navitation object

        return (
          <>
            ....

            <main>
            
              {navigation.state === 'loading' && <p>Loading ..... </p>}

              ....
              
              
            </main>
          </>
        );
      }

      export default RootLayout;
        `,
      },
      {
        id: "sbtp4",
        title: "Returning Response object in loader()",
        text: `You can return anything inside the loader function so that “Response” objects can be returned (in the below code, “response” is the Response object). Behind the scene, the react router handles properly extracting data from a returned Promise and that’s why you don’t need to use the “json()” method of Response to extract data manually.`,
        code: `
      // App.js ---------------------------------------------------------------

      import EventsPage, { loader as eventsLoader } from "./pages/Events.js";

      ....

      {
        index: true,
        element: <EventsPage />,
        loader: eventsLoader
      },

      ....

      // Events.js ------------------------------------------------------------

      import { useLoaderData } from "react-router-dom";
      import EventsList from "../components/EventsList.js";

      /**
       * EVENTS PAGE
       */
      function EventsPage() {
        const data = useLoaderData(); // fetch all data in Promise
        const events = data.events; // extract the events data

        return <EventsList events={events} />;
      }

      export default EventsPage;

      /**
       * LOADER FUNCTION
       */
      export async function loader() {
        const response = await fetch("http://localhost:8080/events");

        if (!response.ok) {
          // ..... error handling
        } else {
          return response; // returns Promise (Response object)
        }
      } 
        `,
      },
      {
        id: "sbtp5",
        title: "Generic error handling",
        text: `By creating the generic error page and set to the “errorElement” attribute of the root route, you can handle errors in a generic way. “useRouteError()” returns the nearest ancestor Route error, which could be a loader/action error or a render error. This is intended to be called from your ErrorBoundary/errorElement to display a proper error message. “json()” creates a Response object including data in the JSON format.`,
        code: `
      // App.js ---------------------------------------------------------------

      ....

      const router = createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          
          ....
          
        },
      ]);

      ....

      // Error.js -------------------------------------------------------------

      import { useRouteError } from "react-router-dom";
      import MainNavigation from "../components/MainNavigation.js";
      import PageContent from "../components/PageContent.js";

      function ErrorPage() {
        // Fetch route error 
        const error = useRouteError();

        // Title & message
        let title = "An error occurred!";
        let message = "Something went wrong!";

        // Server error (throwed by the loader function in Events.js)
        if (error.status === 500) {
          message = error.data.message;
        }

        // Default error status set by react router
        if (error.status === 404) {
          title = "Not found!";
          message = "Could not find resource or page.";
        }

        return (
          <>
            <MainNavigation />

            <PageContent title={title}>
              <p>{message}</p>
            </PageContent>
          </>
        );
      }

      export default ErrorPage;

      // Events.js ------------------------------------------------------------

      import { json } from "react-router-dom";

      ....

      export async function loader() {
        const response = await fetch("http://localhost:8080/events");

        if (!response.ok) {
          throw json({ message: "Could not fetch events." }, { status: 500 });
        } else {
          return response; // returns Promise (Response object)
        }
      }
        `,
      },
      {
        id: "sbtp6",
        title: "Fetch data of dynamic routes",
        text: `To fetch data of dynamic routes with “loader” function, you need to access dynamic segments (starting with “:” symbol). The “loader” function can accept two elements: “request” & “params” and with “params”, you can access it.`,
        code: `
      // App.js ---------------------------------------------------------------

      import EventDetailPage, { loader as eventDetailLoader } from "./pages/EventDetail.js";

      ....

        {
          path: ":eventId",
          element: <EventDetailPage />,
          loader: eventDetailLoader,
        },
        
      ....


      // EventDetail.js -------------------------------------------------------

      import { json, useLoaderData } from "react-router-dom";
      import EventItem from "../components/EventItem.js";

      /**
       * EVENT DETAIL PAGE
       */
      function EventDetailPage() {
        const data = useLoaderData();
        const event = data.event;

        return <EventItem event={event} />;
      }

      export default EventDetailPage;

      /**
       * LOADER FUNCTION
       */
      export async function loader({ request, params }) {
        const id = params.eventId;    // access the dynamic segment

        const response = await fetch("http://localhost:8080/events/" + id);

        if (!response.ok) {
          throw json(
            { message: "Could not fetch details for selected events." },
            { status: 500 }
          );
        } else {
          return response;
        }
      }
        `,
      },
      {
        id: "sbtp7",
        title: "Share a loader by muliplte routes",
        text: `By setting loaders in root routes, loaders can be shared by multiple routes (in the below example, “eventDetailLoader”). However you cannot access that data with “useLoaderData” hook because the loader function is set at the higher route. In that case, you have to set the “id” attribute of the root route and use “useRouteLoaderData” to fetch data.`,
        code: `
      // App.js ---------------------------------------------------------------

      ....

        {
          path: ":eventId",
          id: "event-detail",
          loader: eventDetailLoader,
          children: [
            {
              index: true,
              element: <EventDetailPage />,
            },
            { path: "edit", element: <EditEventPage /> },
          ],
        },

      .....

      // EventDetail.js & EditEvent.js ----------------------------------------

      ....

        const data = useRouteLoaderData("event-detail");
        const event = data.event;

      ....
        `,
      },
    ],
  },
  {
    id: "tp5",
    title: "Submitting data",
    subTopics: [
      {
        id: "sbtp1",
        title: "Data submission with <Form> & action()",
        text: `On working with action() functions, you need to make sure that all inputs have “name” attributes and they are wrapped with the “Form” element which react-router-dom provides. In the “Form” element, you need to specify the method (in the below example, it’s “post”). “Form” element doesn’t send the data immediately to the backend, instead send it to the ACTION (meaning that it triggers the action function).`,
        code: `
      // App.js ---------------------------------------------------------------

      import NewEventPage, { action as newEventAction } from "./pages/NewEvent.js";

      ....

        { path: "new", element: <NewEventPage />, action: newEventAction },

      ....

      // NewEvent.js ----------------------------------------------------------

      import { json, redirect } from "react-router-dom";
      import EventForm from "../components/EventForm.js";

      /**
       * NEW EVENT PAGE
       */
      function NewEventPage() {
        return <EventForm />;
      }

      export default NewEventPage;

      /**
       * ACTION FUNCTION
       */
      export async function action({ request, params }) {
        // 1. Receive entered data in the <Form>
        const data = await request.formData();

        // 2. Prepare sending data
        const eventData = {
          title: data.get("title"),
          image: data.get("image"),
          date: data.get("date"),
          description: data.get("description"),
        };

        // 3. Post data
        const response = await fetch("http://localhost:8080/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        });

        // 4. Error handing
        if (!response.ok) {
          throw json({ message: "Could not save event." }, { status: 500 });
        }

        // 5. Redirect to home 
        return redirect("/");
      }

      // EventForm.js ---------------------------------------------------------

      import { Form } from "react-router-dom";

      import classes from "./EventForm.module.css";

      function EventForm({ method, event }) {

        return (
          <Form method="post" className={classes.form}>
            <p>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                name="title"
                required
                defaultValue={event ? event.title : ""}
              />
            </p>
            <p>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="url"
                name="image"
                required
                defaultValue={event ? event.image : ""}
              />
            </p>
            <p>
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                name="date"
                required
                defaultValue={event ? event.date : ""}
              />
            </p>
            <p>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows="5"
                required
                defaultValue={event ? event.description : ""}
              />
            </p>
            <div className={classes.actions}>
              <button type="button" onClick={cancelHandler}>
                Cancel
              </button>
              <button>Save</button>
            </div>
          </Form>
        );
      }

      export default EventForm;
        `,
      },
      {
        id: "sbtp2",
        title: "Submitting data in a imperative way",
        text: `The “Form” element which react-router-dom provides automatically triggers the action function but there is another way of triggering the action. “useSubmit” lets programmers to do so manually thus it’s useful for example when it comes to implement a confirmation step just before submitting the data. In below example, the action function is defined in the “EventDetail.js” file and triggered by “startDeleteHandler”  in the “EventItem.js” file.  In the “EventItem.js” file,  “submit” function which is created by “useSubmit” method receives the “delete” method, and it’s passed to the action function in the “EventDetail.js” file with “request.method”.`,
        code: `
      // App.js ---------------------------------------------------------------

      import EventDetailPage, { action as deleteEventAction } from "./pages/EventDetail.js";

      ....

        {
          index: true,
          element: <EventDetailPage />,
          action: deleteEventAction,
        },


      // EventDetail.js -------------------------------------------------------

      ....

      export async function action({ params, request }) {
        const eventId = params.eventId;
        const response = await fetch("http://localhost:8080/events/" + eventId, {
          method: request.method
        });

        if (!response.ok) {
          throw json({ message: "Could not delete event." }, { status: 500 });
        }

        return redirect("/");
      }

      // EventItem.js ---------------------------------------------------------

      import { useSubmit } from "react-router-dom";

      import classes from "./EventItem.module.css";

      function EventItem({ event }) {
        const submit = useSubmit();

        function startDeleteHandler() {
          const proceed = window.confirm("Are you sure?");

          if (proceed) {
            submit(null, { method: "delete" });  // triggers the action
          }
        }

        return (

            ....

              <button onClick={startDeleteHandler}>Delete</button>
            
            ....
        );
      }

      export default EventItem;
        `,
      },
      {
        id: "sbtp3",
        title: "Reflect submission status to UI",
        text: `Show submission status in UI and disable buttons while submitting data with “useNavigation” hook.`,
        code: `
      import { Form, useNavigation } from "react-router-dom";

      function EventForm({ method, event }) {

        // Check status - "submitting"
        const navigation = useNavigation();
        const isSubmitting = navigation.state === "submitting";

        return (
          <Form method="post".... >
            
            ....
            

              <button .... disabled={isSubmitting}>
                Cancel
              </button>
              
              <button disabled={isSubmitting}>
                {isSubmitting ? "Submitting ...." : "Save"}
              </button>
              
              ....

          </Form>
        );
      }
        `,
      },
      {
        id: "sbtp4",
        title: "Output validation errors",
        text: `It’s often a good practice to show validation errors just after a user tries to submit data WITHOUT directing to the error page.  “useActionData” hook returns the action data for the nearest ancestor Route action. In the below example, input validation error is defined on backend under the status code 422.`,
        code: `
      // NewEvent.js ----------------------------------------------------------

      export async function action({ request, params }) {
        // 1. Receive entered data in the <Form>
        const data = await request.formData();

        // 2. Prepare sending data
        const eventData = {
          title: data.get("title"),
          image: data.get("image"),
          date: data.get("date"),
          description: data.get("description"),
        };

        // 3. Post data
        const response = await fetch("http://localhost:8080/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        });

        // 4. Custom error defined in events.js in the backend folder
        if (response.status === 422){
          return response;
        }

        // 5. Error handing
        if (!response.ok) {
          throw json({ message: "Could not save event." }, { status: 500 });
        }

        // 6. Redirect to events 
        return redirect("/events");
      }


      // EventForm.js ---------------------------------------------------------

      import { useActionData } from "react-router-dom";

      function EventForm({ method, event }) {

        // Data from the route action (in NewEvents.js)
        const data = useActionData();

        ....

        return (
          <Form .... >
            {data && data.errors && (
              <ul>
                {Object.values(data.errors).map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            )}

            ....
            
          </Form>
        );
      }

      // event.js (dummy backend) ---------------------------------------------

      ....

      router.post("/", async (req, res, next) => {
        const data = req.body;

        let errors = {};

        if (!isValidText(data.title)) {
          errors.title = "Invalid title.";
        }

        if (!isValidText(data.description)) {
          errors.description = "Invalid description.";
        }

        if (!isValidDate(data.date)) {
          errors.date = "Invalid date.";
        }

        if (!isValidImageUrl(data.image)) {
          errors.image = "Invalid image.";
        }

        if (Object.keys(errors).length > 0) {
          return res.status(422).json({
            message: "Adding the event failed due to validation errors.",
            errors,
          });
        }

        try {
          await add(data);
          res.status(201).json({ message: "Event saved.", event: data });
        } catch (error) {
          next(error);
        }
      });
        `,
      },
      {
        id: "sbtp5",
        title: "Reusing actions",
        text: `If an app has functions of both submitting new data & modifying existing data, there is probably a chance to utilize a data submitting action and let it used both for “POST” & “PATCH” http requests. In the below example, the utilized action function is defined in the “EventForm.js” file and used for both “new” event route & “edit” event route.  Note that the action which is reused ans shared by multiple routes MUST BE DEFINED INSIDE the component which is used in these routes. In the below case, it’s the EventForm component.`,
        code: `
      // App.js ---------------------------------------------------------------

      import { action as manipulateEventAction } from "./components/EventForm.js";

        ....
        
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              
              ....
              
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        
        ....
        
      // EventForm.js ---------------------------------------------------------
        
      export async function action({ request, params }) {
        // 1. Receive method & entered data in the <Form>
        const method = request.method;
        const data = await request.formData();

        // 2. Prepare sending data
        const eventData = {
          title: data.get("title"),
          image: data.get("image"),
          date: data.get("date"),
          description: data.get("description"),
        };

        // 3. Submit data - POST / PATCH
        let url = "http://localhost:8080/events/";

        if (method === "PATCH"){
          const eventId = params.eventId;
          url += eventId;
        }

        const response = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        });

        // 4. Custom error defined in events.js in the backend folder
        if (response.status === 422) {
          return response;
        }

        // 5. Default error handing
        if (!response.ok) {
          throw json({ message: "Could not save event." }, { status: 500 });
        }

        // 6. Redirect to events
        return redirect("/events");
      }

      // NewEvent.js ----------------------------------------------------------

      import EventForm from "../components/EventForm.js";

      function NewEventPage() {
        return <EventForm method="post" />;
      }

      export default NewEventPage;

      // EditEvent.js ---------------------------------------------------------

      import { useRouteLoaderData } from "react-router-dom";

      import EventForm from "../components/EventForm.js";

      function EditEventPage() {
        const data = useRouteLoaderData("event-detail");
        const event = data.event;

        return <EventForm method="patch" event={event} />;
      }

      export default EditEventPage;
        `,
      },
    ],
  },
  {
    id: "tp6",
    title: "Advanced",
    subTopics: [
      {
        id: "sbtp1",
        title: "Behind-the-scenes work with useFetcher()",
        text: `If an action function might possibly get triggered on multiple routes, it’s a perfect case to execute it behind the scene with “useFetcher” hook. “useFetcher” interacts with route loaders and actions without causing a navigation (= without transitions to any pages). Thus, it’s great for any interaction that stays on the same page.`,
        code: `
      import { useFetcher } from "react-router-dom";

      ....

        const fetcher = useFetcher();
        const { data, state } = fetcher;
        
        useEffect(() => {
          if (state === "idle" && data && data.message) {
            window.alert("Successfully signed up the newsletter!!");
          }
        }, [data, state]);
        
        return (
          <fetcher.Form
            method="post"
            action="/newsletter"
            className={classes.newsletter}
          >
            <input
              type="email"
              placeholder="Sign up for newsletter..."
              aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
          </fetcher.Form>
        );

      ....
        `,
      },
      {
        id: "sbtp2",
        title: "Differring data fetching",
        text: `For better user experiences, something should be showed while loading contents with http requests. In such cases, use “defer()” method, “Await” element and “Suspense” element. Note that the loading function returns “defer()” method instead of Promise (”response”), “loadEvents” function shouldn’t return Promise, but must return a resolved Promise with “json()” method.`,
        code: `
      import { Suspense } from "react";
      import { useLoaderData, json, defer, Await } from "react-router-dom";
      import EventsList from "../components/EventsList.js";

      /**
       * EVENTS PAGE
       */
      function EventsPage() {
        const { events } = useLoaderData(); // fetch all data in Promise

        return (
          <Suspense fallback={<p style={{ textAlign: "center" }}>Loading ....</p>}>
            <Await resolve={events}>
              {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
          </Suspense>
        );
      }

      export default EventsPage;

      /**
       * LOAD EVENTS FUNCTION
       */
      async function loadEvents() {
        const response = await fetch("http://localhost:8080/events");

        if (!response.ok) {
          throw json({ message: "Could not fetch events." }, { status: 500 });
        } else {
          const resData = await response.json();
          return resData.events;
        }
      }

      /**
       * LOADER FUNCTION
       */
      export function loader() {
        return defer({
          events: loadEvents(),
        });
      }  
        `,
      },
      {
        id: "sbtp3",
        title: "Show data while loading other data",
        text: `“defer()” helps to show data whilst other data is still loading. You can also add “await” to defer() inside the “loader” function to tell react-router-dom not to move to the page until data gets loaded. The order is 1) “loadEvent” function gets executed and returns data, 2) move to the event detail page, 3) “loadEvents” function gets executed and returns data.`,
        code: `
      import {
        json,
        useRouteLoaderData,
        redirect,
        defer,
        Await,
      } from "react-router-dom";
      import EventItem from "../components/EventItem.js";
      import EventsList from "../components/EventsList.js";
      import { Suspense } from "react";

      /**
       * EVENT DETAIL PAGE
       */
      function EventDetailPage() {
        const { event, events } = useRouteLoaderData("event-detail");

        return (
          <>
            <Suspense fallback={<p style={{ textAlign: "center" }}>Loading ....</p>}>
              <Await resolve={event}>
                {(loadedEvent) => <EventItem event={loadedEvent} />}
              </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: "center" }}>Loading ....</p>}>
              <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
              </Await>
            </Suspense>
          </>
        );
      }

      export default EventDetailPage;

      /**
       * LOAD EVENT FUNCTION
       */
      async function loadEvent(id) {
        const response = await fetch("http://localhost:8080/events/" + id);

        if (!response.ok) {
          throw json(
            { message: "Could not fetch details for selected events." },
            { status: 500 }
          );
        } else {
          const resData = await response.json();
          return resData.event;
        }
      }

      /**
       * LOAD EVENTS FUNCTION
       */
      async function loadEvents() {
        const response = await fetch("http://localhost:8080/events");

        if (!response.ok) {
          throw json({ message: "Could not fetch events." }, { status: 500 });
        } else {
          const resData = await response.json();
          return resData.events;
        }
      }

      /**
       * LOADER FUNCTION
       */
      export async function loader({ request, params }) {
        const id = params.eventId; // access the dynamic segment

        return defer({
          event: await loadEvent(id), // await before moving to the page
          events: loadEvents(),
        });
      }

      /**
       * ACTION FUNCTION
       */
      export async function action({ params, request }) {
        const eventId = params.eventId;
        const response = await fetch("http://localhost:8080/events/" + eventId, {
          method: request.method,
        });

        if (!response.ok) {
          throw json({ message: "Could not delete event." }, { status: 500 });
        }

        return redirect("/events");
      } 
        `,
      },
      {
        id: "sbtp4",
        title: "Query parameters",
        text: `Query parameters are elements inserted in your URLs to help you filter and organize content. To identify a query parameter, look at the portion of the URL that comes after a question mark (?). Query parameters include a key and a value that are separated by an equals sign (=). Multiple parameters are then separated by an ampersand (&).`,
        code: `
      https//www.domain.com/page?key1=value1&key2=value2
        `,
      },
      {
        id: "sbtp5",
        title: "Working with query parameters",
        text: `In order to use query parameters in react router, you need to use <Link> component to switch routes with query parameters and “useSearchParams()” function to get query parameters, which returns an array of the current URL's query parameters and a function to update them.`,
        code: `
      import { Form, Link, useSearchParams } from "react-router-dom";

      export default function AuthForm() {
        const [searchParams, setSearchParams] = useSearchParams();
        const isLogin = searchParams.get("mode") === "login";

        return (
          <>
            <Form>
              
                ....
                  
                <Link to={\`?mode=\${isLogin ? "signup" : "login"}\`}>
                  {isLogin ? "Create new user" : "Login"}
                </Link>

                ....
                
            </Form>
          </>
        );
      }
        `,
      },
    ],
  },
];

export const AUTHENTICATION_TOPICS_ARRAY = [
  {
    id: "tp1",
    title: "Intro",
    subTopics: [
      {
        id: "sbtp1",
        title: "Server-side Sessions",
        text: `One of the way to authenticate a user is using “Server-side Sessions”. 1) The server stores the unique identifier and sends the same identifier to the client.  2) The client sends the identifier along with requests to protected resources. 3) The server can then check if the identifier which is previously issued by server to the client is valied. Server-side Session is the great way of authentications, however it requires the tight “coupling” between backend & frontend.`,
      },
      {
        id: "sbtp2",
        title: "Authentication Tokens",
        text: `Another way of authentication is using “Authentication Tokens”.  Most React apps are SPAs (Single Page Applications) that are served by a server that’s “decoupled from the backend”. The SPA “handles routing on the client side” and only talks to the backend in case there needs data (or needs data to change).  In that case, “Authentication Tokens” is coming to play.  How is works is: 1) create (but not store) the “permission” token on the server and send it to the client, 2) the client attaches the token to future requests for protected resources, 3) the server can then verify the attached token.`,
      },
    ],
  },
  {
    id: "tp2",
    title: "Auth action and validation",
    subTopics: [
      {
        id: "sbtp1",
        title: "Implementing auth action",
        text: `Since “login” or “signup” data is submitted with <Form> component,  you can get the submitted data by “formData()” method and access individual elements by their names through “get()” method. And in order to get the query parameters, use “new URL().searchParams” and use ‘get()” method to access them.`,
        code: `
      // APP.js ----------------------------------------------------------------------------

            {
              path: "auth",
              element: <AuthenticationPage />,
              action: authAction,
            },

      // Authentication.js -----------------------------------------------------------------

      import { json, redirect } from "react-router-dom";
      import AuthForm from "../components/AuthForm";

      function AuthenticationPage() {
        return <AuthForm />;
      }

      export default AuthenticationPage;

      export async function action({ request }) {
        const searchParams = new URL(request.url).searchParams;
        const mode = searchParams.get("mode") || "login";

        if (mode !== "login" && mode !== "signup") {
          throw json({ message: "Unsupported mode." }, { status: 422 });
        }

        const data = await request.formData();
        const authData = {
          email: data.get("email"),
          password: data.get("password"),
        };

        const response = await fetch("http://localhost:8080/" + mode, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(authData),
        });

        if (response.status === 422 || response.status === 401) {
          return response;
        }

        if (!response.ok) {
          throw json({ message: "Could not authenticate user." }, { status: 500 });
        }

        // Here, code for managing that token

        return redirect("/");
      }

      // AuthForm.js -----------------------------------------------------------------------

      export default function AuthForm() {

        ....

        return (
          <>
            <Form method="post" className={classes.form}>
              
              ....
              
            </Form>
          </>
        );
      }
        `,
      },
      {
        id: "sbtp2",
        title: "Output validation errors",
        text: `By using “useActionData()” hook, you can get something if an action returns something (in below case, “response” under the condition of status code 422 or 401).`,
        code: `
      // Authentication.js -----------------------------------------------------------------

      export async function action({ request }) {
        
        ....

        if (response.status === 422 || response.status === 401) {
          return response;
        }

        ....
        
      }


      // AuthForm.js -----------------------------------------------------------------------

      import { useActionData } from "react-router-dom";

      export default function AuthForm() {
        
        const data = useActionData();

        ....

        return (
          <>
            <Form method="post" className={classes.form}>
              
              ....
              
              {data && data.errors && (
                <ul>
                  {Object.values(data.errors).map((err) => (
                    <li key={err}>{err}</li>
                  ))}
                </ul>
              )}
              
              {data && data.message && <p>{data.message}</p>}
              
              ....
              
            </Form>
          </>
        );
      }
        `,
      },
    ],
  },
  {
    id: "tp3",
    title: "Auth token",
    subTopics: [
      {
        id: "sbtp1",
        title: "Get the auth token and store it locally",
        text: `(Suppose the backend issues and returns a token under the name of “token” everytime a user submits a signup request.) First, you need to extract the token and then store it properly.`,
        code: `
      // Authentication.js -----------------------------------------------------------------

      export async function action({ request }) {
        
        ....

        const resData = await response.json();
        const token = resData.token;

        localStorage.setItem("token", token);

        ....
        
      }
        `,
      },
      {
        id: "sbtp2",
        title: "Attaching auth tokens to outgoing requests",
        text: `To attach the auth token to outgoing requests,  include it to “headers” in actions. `,
        code: `
      // auth.js ---------------------------------------------------------------------------

      export function getAuthToken() {
          const token = localStorage.getItem("token");
          return token;
      }

      // EventDetails.js -------------------------------------------------------------------

      export async function action({ params, request }) {
        const eventId = params.eventId;

        const token = getAuthToken();
        
        const response = await fetch('http://localhost:8080/events/' + eventId, {
          method: request.method,
          headers: {
            "Authorization": "Bearer " + token
          }
        });

        ....
        
      }

      // EventForm.js ----------------------------------------------------------------------

      export async function action({ request, params }) {
        
        ....
        
        const token = getAuthToken();

        const response = await fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
          },
          body: JSON.stringify(eventData),
        });

        ....
        
      }
        `,
      },
      {
        id: "sbtp3",
        title: "User logout",
        text: `(Suppose an auth token is stored in browser local storage.) In the below example, when a user clicks the “logout” button in the main navigation, the auth token in the local storage will be removed.`,
        code: `
      // APP.js ----------------------------------------------------------------------------

      import { action as logoutAction } from "./pages/Logout.js";

          ....

            {
              path: "logout",
              action: logoutAction
            },

      // pages > Logout.js -----------------------------------------------------------------

      import { redirect } from "react-router-dom";

      export function action() {
        localStorage.removeItem("token");
        return redirect("/");
      }

      // MainNavigation.js -----------------------------------------------------------------

        ....
            
              <li>
                <Form action="/logout" method="post">
                  <button>Logout</button>
                </Form>
              </li>
        `,
      },
      {
        id: "sbtp4",
        title: "Updating the UI based on auth status",
        text: `(Suppose an auth token is stored in browser local storage.) In order to update the UI based on auth status, you need to keep updating the auth token status in the local storage and let the react router to refresh the page based on that auth token status. And to let other route access to the latest auth token, add “id” property to the root route.`,
        code: `
      // auth.js ---------------------------------------------------------------------------

      export function getAuthToken() {
          const token = localStorage.getItem("token");
          return token;
      }

      export function tokenLoader() {
          return getAuthToken();
      }

      // APP.js ----------------------------------------------------------------------------

      const router = createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          id: 'root',
          loader: tokenLoader,
          children: [ ... ],
        },
        
        ....
        
      ]);

      // MainNavigation.js -----------------------------------------------------------------

      export default function MainNavigation() {
        const token = useRouteLoaderData("root");

        return (
          <header className={classes.header}>
            
              ....

                {!token && (
                  <li>
                    <NavLink
                      to="/auth?mode=login"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                      Authentication
                    </NavLink>
                  </li>
                )}

                {token && (
                  <li>
                    <Form action="/logout" method="post">
                      <button>Logout</button>
                    </Form>
                  </li>
                )}

              ....
              
          </header>
        );
      }

      // EventsNavigation.js ---------------------------------------------------------------

      export default function EventsNavigation() {
        const token = useRouteLoaderData("root");

        return (
          <header className={classes.header}>
            <nav>
              <ul className={classes.list}>

                ....

                {token && (
                  <li>
                    <NavLink
                      to="/events/new"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                      New Event
                    </NavLink>
                  </li>
                )}
                
              </ul>
            </nav>
          </header>
        );
      }

      // EventItem.js ----------------------------------------------------------------------

      export default function EventItem({ event }) {
        const token = useRouteLoaderData("root");

        ....

        return (
          <article className={classes.event}>
            
            ....
            
            {token && (
              <menu className={classes.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={startDeleteHandler}>Delete</button>
              </menu>
            )}
            
          </article>
        );
      }
        `,
      },
      {
        id: "sbtp5",
        title: "Route protection",
        text: `Even if the UI is updated based on the auth token status, a use can access to route by entering the url manually (for instance, “https:// …. /new” or “https:// …. /edit”) even though a user cannot submit the data to backend. To prevent this, create a auth token check loader and implement to routes you want to protect (in the below example, it’s “edit” and “new”).`,
        code: `
      // auth.js ---------------------------------------------------------------------------

      export function checkAuthLoader() {
        const token = getAuthToken();

        if (!token) {
          return redirect("/auth");
        }

        return null;
      }

      // APP.js ----------------------------------------------------------------------------

          .....
              
                {
                  index: true,
                  element: <EventsPage />,
                  loader: eventsLoader,
                },
                {
                  path: ":eventId",
                  id: "event-detail",
                  loader: eventDetailLoader,
                  children: [
                    {
                      index: true,
                      element: <EventDetailPage />,
                      action: deleteEventAction,
                    },
                    {
                      path: "edit",
                      element: <EditEventPage />,
                      action: manipulateEventAction,
                      loader: checkAuthLoader
                    },
                  ],
                },
                {
                  path: "new",
                  element: <NewEventPage />,
                  action: manipulateEventAction,
                  loader: checkAuthLoader
                },
                
          .....
        `,
      },
      {
        id: "sbtp6",
        title: "Automatic user logout",
        text: `You can implement automatic user logout logic with clearing an auth token when certain time passes by calling a “logout” action in RootLayout component.`,
        code: `
      // Root.js ---------------------------------------------------------------------------

      function RootLayout() {

        // Get the token
        const token = useLoaderData();
        
        // Submit data to backend manually
        const submit = useSubmit();

        // Clear out the auth token in one hour
        useEffect(() => {
        
          // No token, then do nothing
          if (!token) {
            return;
          }

          // If there's token, initiate the action (no data send)
          setTimeout(() => {
            submit(null, { action: "/logout", method: "post" });
          }, 1 * 60 * 60 * 1000);
          
        }, [token, submit]);

        return (
          <>
            <MainNavigation />
            <main>
              <Outlet />
            </main>
          </>
        );
      }

      export default RootLayout;
        `,
      },
      {
        id: "sbtp7",
        title: "Managing the token expiration",
        text: `With only automatic user logout logic, it’s not sufficient because the timer can easily reset when a user reload the page. Thus, it’s important to set the expiration logic for an auth token. The logis is: 1) register the expiration when a user logs in, 2) set the “EXPIRED” flag based on the duration, 3) if the token is expired, make a user log out automatically and clear the token data.`,
        code: `
      // Authentication.js -----------------------------------------------------------------

      export async function action({ request }) {
        
        ....

        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 1);
        localStorage.setItem("expiration", expiration.toISOString());

        ....
        
      }

      // auth.js ---------------------------------------------------------------------------

      export function getTokenDuration() {
        const storedExpirationDate = localStorage.getItem("expiration");
        const expirationDate = new Date(storedExpirationDate);
        const now = new Date();
        const duration = expirationDate.getTime() - now.getTime();
        return duration;
      }

      export function getAuthToken() {
        const token = localStorage.getItem("token");

        if (!token){
          return null;
        }

        const tokenDuration = getTokenDuration();

        if (tokenDuration < 0) {
          return "EXPIRED";
        }

        return token;
      }

      // Root.js ---------------------------------------------------------------------------

        useEffect(() => {
          if (!token) {
            return;
          }

          if (token === "EXPIRED") {
            submit(null, { action: "/logout", method: "post" });
            return;
          }

          const tokenDuration = getTokenDuration();
          console.log(tokenDuration);

          setTimeout(() => {
            submit(null, { action: "/logout", method: "post" });
          }, tokenDuration);
        }, [token, submit]);
        
      // Logout.js -------------------------------------------------------------------------

      import { redirect } from "react-router-dom";

      export function action() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        return redirect("/");
      }
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
