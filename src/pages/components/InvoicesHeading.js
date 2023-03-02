import React, { useContext } from 'react'
import Text15px from '../../common/text/Text15px'
import Text24px from '../../common/text/Text24px';
import ThemeContext from '../../global/contexts/ThemeContext';
import NewInvoiceButton from './NewInvoiceButton'

function InvoicesHeading({ amount }) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;
    return (
        <div className='flex justify-between items-center w-[100%]'>
            <div className='flex flex-col'>
                <Text24px>Invoices</Text24px>
                <Text15px color={themeValue === 'dark' ? '05' : '07'}>7 invoices</Text15px>
            </div>
            <div>
                <NewInvoiceButton />
            </div>

        </div>
    )
}

export default InvoicesHeading