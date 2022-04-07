import "./styles.css";
import { useState } from "react";

function Form({ listTransactions, setListTransactions }) {
  const [inputDescription, setInputDescription] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("Entrada");

  return (
    <div className="form" onSubmit={(event) => event.preventDefault()}>
      <div>
        <label htmlFor="descricao">
          Descrição
          <input
            className="inputDescricao"
            type="text"
            placeholder="Digite aqui sua descrição"
            value={inputDescription}
            onChange={(event) => setInputDescription(event.target.value)}
            required
          />
        </label>
        <label className="labelEx">Ex: Compra de Roupas</label>
      </div>

      <div className="divInputs">
        <label htmlFor="valor">
          Valor
          <input
            className="inputValor"
            type="number"
            placeholder="1              R$"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            required
          />
        </label>
        <label htmlFor="tipoValor">
          Tipo de Valor
          <select
            className="inputSelect"
            name="select"
            value={inputType}
            onChange={(event) => setInputType(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </label>
      </div>

      <button
        className="button"
        onClick={() =>
          inputType === "Entrada"
            ? setListTransactions([
                ...listTransactions,
                {
                  id: Math.random(),
                  description: inputDescription,
                  type: inputType,
                  value: inputValue,
                },
              ])
            : setListTransactions([
                ...listTransactions,
                {
                  id: Math.random(),
                  description: inputDescription,
                  type: inputType,
                  value: -inputValue,
                },
              ])
        }
      >
        Inserir Valor
      </button>
    </div>
  );
}

export default Form;
