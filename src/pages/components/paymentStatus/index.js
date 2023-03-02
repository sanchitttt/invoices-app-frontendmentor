import React from 'react'
import DraftStatus from './DraftStatus';
import PaidStatus from './PaidStatus';
import PendingStatus from './PendingStatus';

function PaymentStatus({ status }) {
    if(status === 'paid'){
        return <PaidStatus />
    }
    if(status === 'pending'){
        return <PendingStatus />
    }
    return <DraftStatus />
}

export default PaymentStatus;