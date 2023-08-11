import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Links from './Links';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import ActionButton from '@/shared/ActionButton';

type Props = {
  isTopOfPage : boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage,isTopOfPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  // As the width crosses 1060px , the isAboveMediumScreen becomes true;
  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');
  
  
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const navbarBackgroundTop = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div className={`${navbarBackgroundTop}${flexBetween} fixed top-0 z-30 w-full py-6 `}>
        <div className={`${flexBetween} w-5/6 mx-auto`}>
          <div className={`${flexBetween} gap-16 w-full`}>
            {/* Left side */}
            <img src={Logo} alt="logo" />
            {/*Right side */}
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Links page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Links page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Links page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Links page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                </div>
              </div>
            ) : (
              <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggle(!isMenuToggle)}>
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {!isAboveMediumScreen && isMenuToggle && 
      <div className="fixed bg-primary-100 drop-shadow-xl right-0 bottom-0 z-40 h-full w-[300px]">
            {/* Close icon */}
            <div className='flex justify-end mr-14 mt-6'>
            <button
            className='rounded-full bg-secondary-500 p-2' 
            onClick={()=>setIsMenuToggle(!isMenuToggle)}>
            <XMarkIcon className='h-6 w-6 '/>
            </button>
            </div>
            {/* Menu items */}
            <div className='flex flex-col ml-[33%] gap-10 text-xl'>
                  <Links page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Links page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Links page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Links page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
        </div>}
    </nav>
  );
};

export default Navbar;
