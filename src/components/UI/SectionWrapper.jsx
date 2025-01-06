export default function SectionWrapper({ children }) {
  return (
    <section className="pb-10 max-w-[800px] w-3/4 flex flex-col mx-auto">
      {children}
    </section>
  );
}
