import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import CardValor from "./components/CardValor";
import Header from "./components/Header";
// import ImgLanc from "./components/ImgLanc";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [listFilterTransactions, setListFilterTransactions] = useState([]);

  function filtrar(tipo) {
    setListFilterTransactions(
      listTransactions.filter((transaction) => transaction.type === tipo)
    );
  }

  function deleteTransaction(idToRemove) {
    const filteredList = listTransactions.filter(
      (element) => element.id !== idToRemove
    );
    setListTransactions(filteredList);
  }

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main className="App-header">
        <div>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <CardValor listTransactions={listTransactions} />
        </div>
        <div className="listTransactions">
          <div className="filtros">
            <h3>Resumo Financeiro</h3>
            <div className="divFilterButton">
              <button
                className="filterButton"
                onClick={() => setListFilterTransactions([])}
              >
                Todos
              </button>
              <button
                className="filterButton"
                onClick={() => filtrar("Entrada")}
              >
                Entradas
              </button>
              <button
                className="filterButton"
                onClick={() => filtrar("Despesa")}
              >
                Despesas
              </button>
            </div>
          </div>

          <List
            deleteTransaction={deleteTransaction}
            listTransactions={
              listFilterTransactions.length > 0
                ? listFilterTransactions
                : listTransactions
            }
          />
        </div>
      </main>
    </div>
  );
}

export default App;
