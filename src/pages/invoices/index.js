import React, { useEffect, useState } from 'react'
import InvoicesDesktop from './desktop';
import InvoicesMobile from './mobile';
import dataJSON from '../../assets/data/data.json';

function InvoicesPage() {
    const [data, setData] = useState(dataJSON);


    return (
        <div>
            <div className='desktop:hidden mobile:block'>
                <InvoicesMobile invoices={data} />
            </div>
            <div className='desktop:block mobile:hidden'>
                <InvoicesDesktop invoices={data} />
            </div>
        </div>
    )
}

export default InvoicesPage;