import React, { useContext } from 'react';
import ThemeContext from '../../global/contexts/ThemeContext';
import Logo from '../Logo';
import ProfilePicture from '../ProfilePicture';
import ThemeIcon from '../ThemeIcon';

function MobileNavbar() {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  return (
    <div className={` w-[100%] h-[72px] flex justify-between items-center ${themeValue === 'dark' ? "bg-03" : "bg-[#373B53]"}`}>
      <div className='ml-[10px]'>
        <Logo />
      </div>
      <div className='flex items-center justify-between mr-[10px] gap-[25px]'>
        <ThemeIcon />
        <div className='w-[1px] h-[72px] bg-[#494E6E] '></div>
        <ProfilePicture />
      </div>
    </div>
  )
}

export default MobileNavbar;