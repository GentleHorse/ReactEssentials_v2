import Header from "../components/UI/Header.jsx";
import SectionWrapper from "../components/UI/SectionWrapper.jsx";
import { MOUSE_EVENTS, DRAG_EVENTS } from "../topics-data.js";
import PageTitle from "../components/UI/PageTitle.jsx";
import ScrollToTopButton from "../components/UI/ScrollToTopButton.jsx";

export default function EventsPage() {
  return (
    <>
      <Header />

      <PageTitle>Events</PageTitle>

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

      <ScrollToTopButton />
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
