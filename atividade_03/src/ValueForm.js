import React, { Fragment, useState } from 'react';

const ValueForm = () => {
  
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState();

  const handleSubmit = () => {
    setCounter(counter + number);
    resetInput();
  }

  const handleSubtract = () => {
    setCounter(counter - number);
    resetInput();
  }

  const handleReset = () => {
    setCounter(0);
    resetInput();
  }

  const resetInput = () => setNumber("");

  return (
    <Fragment>
      <center>
        <table>
          <tr>
            <td>
              Número:
            </td>
            <td>
              <input type="number" value={number}
                class="form-control text-input"
                maxlength="1"
                onChange={(e) => setNumber(Number(e.target.value))}
              />
            </td>
          </tr>
        </table>

        <table>
          <tr>
            <td>
              <button onClick={handleSubmit}>
                Somar
              </button>
            </td>
            <td>
              <button onClick={handleSubtract}>
                Subtrair
              </button>
            </td>
            <td>
              <button onClick={handleReset}>
                Resetar
              </button>
            </td>
          </tr>
        </table>
        <label>{counter}</label>
      </center>
    </Fragment>
  );
}

export default ValueForm;
