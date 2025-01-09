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
        title: "",
        text: ``,
        code: ``,
      },
    ],
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
    ],
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
    ],
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

        <ul className="col-span-2 max-w-[600px] lg:max-w-[1200px] mr-10 md:mr-12 lg:mr-20">
          <TopicWrapper topics={BASICS_TOPICS_ARRAY[topicIndex].subTopics} />
        </ul>
      </section>
    </>
  );
}
