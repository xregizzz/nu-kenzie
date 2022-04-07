import "./styles.css";

function CardValor({ listTransactions }) {
  const totalSaida = listTransactions
    .filter((transaction) => transaction.type === "Despesa")
    .reduce((a, b) => a - Number(b.value), 0);

  const totalEntrada = listTransactions
    .filter((transaction) => transaction.type === "Entrada")
    .reduce((a, b) => a + Number(b.value), 0);

  const totalValue = totalEntrada - totalSaida;

  return (
    <div className="cardValor">
      <div className="cardLabel">
        <h1 className="valorTotalTxt">Valor Total:</h1>
        <h2 className="labelValorTotal">O valor se refere ao saldo</h2>
      </div>
      <span className="valorTotalNumero">
        $ {totalValue.toFixed(2).toString().replace(".", ",")}
      </span>
    </div>
  );
}

export default CardValor;
