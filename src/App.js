import React from "react";
import { Balance } from './components/Balance'
import { IncomeExpenses } from "./components/IncomeExpenses";
import { Layout } from './components/Layout/Layout'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

function App() {
  return (
  <div>
<Layout>

</Layout>
<Balance />
<IncomeExpenses />
<TransactionList />
<AddTransaction />  </div>
  );
}

export default App;
