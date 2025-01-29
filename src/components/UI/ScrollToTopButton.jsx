export default function ScrollToTopButton({buttonPosition="right"}) {
  
  let buttonPositionClassName = "flex flex-col"; 
  
  if(buttonPosition==="center"){
    buttonPositionClassName += " items-center"
  }

  if(buttonPosition==="left"){
    buttonPositionClassName += " items-start ml-8"
  }

  if(buttonPosition==="right"){
    buttonPositionClassName += " items-end mr-8"
  }

  return (
    <section className="fixed bottom-8 w-full">
      <div className={buttonPositionClassName}>
        <button
          className="w-28 h-28 p-2 
          text-sm text-[#1C1C1C]/45 hover:text-[#1C1C1C]/85 hover:font-bold 
          rounded-full backdrop-blur-sm bg-[#FFFFFF]/15 hover:bg-[#FFFFFF]/85
          border-2 border-[#1C1C1C]/15"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Scroll to top
        </button>
      </div>
    </section>
  );
}
