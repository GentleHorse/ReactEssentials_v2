import SectionWrapper from "../components/UI/SectionWrapper.jsx";
import TopicWrapper from "../components/UI/TopicWrapper.jsx";

const TOPICS_ARRAY = [
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

export default function InstallationPage() {
  return (
    <>
      <h1 className="font-poiretOneRegular text-right text-9xl mx-6 mt-8 mb-14">
        Installation
      </h1>

      <SectionWrapper>
        <ul>
          <TopicWrapper topics={TOPICS_ARRAY} />
        </ul>
      </SectionWrapper>
    </>
  );
}


