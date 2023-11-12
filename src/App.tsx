import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Home from './components/home';
import Benefits from './components/benefits';
import OurClasses from './components/our-classes';
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isOnTopOfScreen, setIsOnTopOfScreen] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsOnTopOfScreen(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsOnTopOfScreen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isOnTopOfScreen} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
