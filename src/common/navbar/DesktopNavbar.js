import React, { useContext } from 'react';
import ThemeContext from '../../global/contexts/ThemeContext';
import Logo from '../Logo';
import ProfilePicture from '../ProfilePicture';
import ThemeIcon from '../ThemeIcon';

function DesktopNavbar() {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  return (
    <div className={`w-[103px] h-[100vh] flex flex-col justify-between items-center ${themeValue === 'dark' ? "bg-03" : "bg-[#373B53]"}`}>
      <div className='mt-[15px]'>
        <Logo />
      </div>
      <div className='flex flex-col gap-[25px] justify-between items-center mb-[25px]'>
        <ThemeIcon />
        <div className='w-[103px] h-[1px] bg-[#494E6E]'></div>
        <div>
          <ProfilePicture />
        </div>
      </div>
    </div>
  )
}

export default DesktopNavbar;