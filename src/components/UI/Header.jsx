import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="fixed top-0 z-20">
        <Link>
          <img
            src="/icons/react.svg"
            className="m-6 w-14 h-14 hover:animate-tilt"
          />
        </Link>
      </section>
    </>
  );
}
