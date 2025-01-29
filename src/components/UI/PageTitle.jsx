export default function PageTitle({ children }) {
  return (
    <h1
      className="
      sticky top-0 z-10 h-[20vh] 
      px-6 pb-10 mb-4
      border-b-2 border-[#C1C1C1] 
      backdrop-blur-md 
      bg-[#FFFFFF]/15 
      font-poiretOneRegular text-center text-[12vh] 
      "
    >
      {children}
    </h1>
  );
}
