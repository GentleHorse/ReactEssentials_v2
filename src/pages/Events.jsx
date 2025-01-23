import Button from "../components/UI/Button.jsx";
import SectionWrapper from "../components/UI/SectionWrapper.jsx";

const MOUSE_EVENTS = [
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

const DRAG_EVENTS = [
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


export default function EventsPage() {
  return (
    <>
      <h1 className="font-poiretOneRegular text-center text-6xl mx-6 mt-8 mb-14">
        Events
      </h1>

      <h2 className="font-montserrat text-center text-4xl mx-6 my-8 text-stone-500">
        Mouse Events
      </h2>

      <SectionWrapper>
        <ul className="list-none flex flex-wrap gap-4">
          {MOUSE_EVENTS.map((event) => (
            <EventWrapper key={event.id} event={event} />
          ))}
        </ul>
      </SectionWrapper>

      <h2 className="font-montserrat text-center text-4xl mx-6 my-8 text-stone-500">
        Drag Events
      </h2>

      <SectionWrapper>
        <ul className="list-none flex flex-wrap gap-4">
          {DRAG_EVENTS.map((event) => (
            <EventWrapper key={event.id} event={event} />
          ))}
        </ul>
      </SectionWrapper>

    </>
  );
}

function EventWrapper({ event }) {
  return (
    <li
      onClick={() => {
        window.open(event.link, "_blank");
      }}
      className="w-60 h-64 mx-auto px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
    >
      <div>
        <h1 className="font-roboto text-2xl m-4">{event.title}</h1>
        <p className="font-montserrat text-stone-200 mx-4 mb-4">
          {event.texts}
        </p>
      </div>
    </li>
  );
}
