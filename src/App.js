import './App.css';
import Header from './components/header/header.component';
import Balance from './components/balance/balance.component';
import Expense from './components/expense/expense.component';
import TransactionList from './components/transactionList/transactionList.component';
import AddTransaction from './components/addtransaction/addtransaction.component';



function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <Expense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
     
    </div>
  );
}

export default App;
