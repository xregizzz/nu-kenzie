import "./styles.css";
import { FaTrash } from "react-icons/fa";

function Card({ id, description, type, value, deleteTransaction }) {
  return (
    <div
      className={
        type === "Entrada" ? "divCard greenClass" : "divCard greyClass"
      }
    >
      <div className="divCardPosition">
        <h1>{description}</h1>
        <h2>{type}</h2>
      </div>
      <div className="divCardPosition2">
        <h2>{Number(value).toFixed(2).toString().replace(".", ",")}</h2>
        <div></div>
        <button className="buttonTrash" onClick={() => deleteTransaction(id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Card;
