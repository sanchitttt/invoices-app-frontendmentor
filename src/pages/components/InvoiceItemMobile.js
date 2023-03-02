import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Text15px from '../../common/text/Text15px';
import Text24px from '../../common/text/Text24px';
import ThemeContext from '../../global/contexts/ThemeContext';
import PaymentStatus from './paymentStatus';


function InvoiceItemMobile({ id, clientName, paymentDue, total, status }) {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;
  const navigate = useNavigate();

  return (
    <div className={`w-[327px] h-[134px] flex items-center justify-center ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} rounded-[10px]`}
      role='button'
      onClick={() => navigate(`view/${id}`)}
    >
      <div className='w-[279px] h-[93px] flex flex-col gap-[15px]'>

        <div className='topRow flex justify-between items-center'>
          <div className='flex'>
            <Text15px color={themeValue === 'dark' ? '05' : '07'}>#</Text15px>
            <Text15px bold>{id}</Text15px>
          </div>
          <div>
            <Text15px>{clientName}</Text15px>
          </div>
        </div>

        <div className='bottomRow flex items-center justify-between'>
          <div className='flex flex-col justify-between'>
            <div className='flex gap-[5px]'>
              <Text15px color={themeValue === 'dark' ? '05' : '07'}>Due</Text15px>
              <Text15px color={themeValue === 'dark' ? '05' : '07'}>{paymentDue}</Text15px>
            </div>
            <Text24px>$ {total}</Text24px>
          </div>
          <div>
            <PaymentStatus status={status} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceItemMobile;