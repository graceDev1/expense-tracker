import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';
import Transaction from '../transaction/transaction.component';

function TransactionList() {
    const { transactions } = useContext(GlobalContext)
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                { transactions.map((transaction, index)=>(
                    <Transaction
                    key={index}
                    text={transaction.text}
                    amount={transaction.amount}
                    id={transaction.id}
                    />
                ))}
                
            </ul>
        </>
    )
}

export default TransactionList
