import React from 'react';
import Button1 from '../../common/buttons/Button1';

function NewInvoiceButton() {
    return (
        <>
            <div className='mobile:hidden desktop:block'>
                <Button1>New Invoice</Button1>
            </div>
            <div className='mobile:desktop desktop:hidden'>
                <Button1>New</Button1>
            </div>
        </>
    )
}

export default NewInvoiceButton