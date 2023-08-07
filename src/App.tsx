import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
function App() {

  const[selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const[isOnTopOfScreen,setIsOnTopOfScreen] = useState<boolean>(true);
  
  useEffect(() => {
    const handleScroll = () =>{
      if(window.scrollY === 0){
        setIsOnTopOfScreen(true);
        setSelectedPage(SelectedPage.Home);
      }else{
        setIsOnTopOfScreen(false);
      }
    }

    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll); 
  },[])

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage = {isOnTopOfScreen}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
