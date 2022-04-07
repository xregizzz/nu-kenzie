import Card from "../Card";
import "./styles.css";

function List({ listTransactions, deleteTransaction }) {
  return (
    <ul className="cardList">
      {listTransactions.map((transaction, index) => (
        <Card
          key={index}
          id={transaction.id}
          description={transaction.description}
          type={transaction.type}
          value={transaction.value}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </ul>
  );
}

export default List;
