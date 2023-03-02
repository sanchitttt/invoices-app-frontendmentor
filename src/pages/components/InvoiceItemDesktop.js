import React, { useContext } from 'react';
import RightArrow from '../../common/RightArrow';
import Text15px from '../../common/text/Text15px';
import Text24px from '../../common/text/Text24px';
import ThemeContext from '../../global/contexts/ThemeContext';
import PaymentStatus from './paymentStatus';

function InvoiceItemDesktop({ id, clientName, paymentDue, total, status }) {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  return (
    <div className={`flex desktop:w-[730px] biggerDesktops:w-[900px] rounded-[8px] justify-between mt-[20px] items-center bg-03 gap-[100px] h-[72px] ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"}`} style={{ boxShadow: '0px 10px 10px -10px rgba(72, 84, 159, 0.100397)' }}>
      <div className='flex gap-[40px] ml-[30px]'>
        <div className='flex items-center'>
          <Text15px color={themeValue === 'dark' ? '05' : '07'}>#</Text15px>
          <Text15px bold>{id}</Text15px>
        </div>
        <div className='flex gap-[5px]'>
          <Text15px color={themeValue === 'dark' ? '05' : '07'}>Due</Text15px>
          <Text15px color={themeValue === 'dark' ? '05' : '07'}>{paymentDue}</Text15px>
        </div>
        <div>
          <Text15px>{clientName}</Text15px>
        </div>
      </div>

      <div className='flex gap-[40px] items-center'>
        <Text15px>${total}</Text15px>
        <div>
          <PaymentStatus status={status} />
        </div>
        <div className='mr-[15px]'>
          <RightArrow />
        </div>

      </div>

    </div>
  )
}

export default InvoiceItemDesktop;