export default function Card({ children }) {
    return (
      <div className="flex flex-row items-center p-5 rounded-2xl backdrop-blur-md bg-[#6E75A4]/15">
        {children}
      </div>
    );
  }