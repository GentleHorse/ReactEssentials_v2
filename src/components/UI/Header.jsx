import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="fixed my-auto z-20 h-[20vh]">
        <Link to="/">
          <img
            src="/icons/react-mono.svg"
            className="mx-6 my-[5vh] w-[10vh] h-[10vh] hover:animate-tilt"
          />
        </Link>
      </section>
    </>
  );
}
