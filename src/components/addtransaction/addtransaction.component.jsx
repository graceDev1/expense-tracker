import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTrans = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        }

        addTransaction(newTrans)

    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} name="text" placeholder="Enter Text..." id=""/>
                </div>

                <div className="form-control">
                    <label htmlFor="amout">Amout <br/> 
                    (negative - expense, position - income)
                     </label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} name="amount" placeholder="Enter amount..." id=""/>
                </div>
                <button type="submit" className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
