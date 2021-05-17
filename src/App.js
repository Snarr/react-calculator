import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [number, setNumber] = useState("-");
  const [number2, setNumber2] = useState("-");
  const [operation, setOperation] = useState("");
  const [number2Toggle, setNumberState] = useState(false);

  useEffect(() => {

  }, [operation])

  return (
    <div className="App">
      <p>{number2Toggle ? number2 : number}</p>
      <br/>
      <button onClick={() => number2Toggle ? (number2 === "-" ? setNumber2("9") : setNumber2(number2 + "9")) : (number === "-" ? setNumber("9") : setNumber(number + "9"))}>9</button>
      <button onClick={() => number2Toggle ? (number2 === "-" ? setNumber2("8") : setNumber2(number2 + "8")) : (number === "-" ? setNumber("8") : setNumber(number + "8"))}>8</button>
      <button onClick={() => number2Toggle ? (number2 === "-" ? setNumber2("7") : setNumber2(number2 + "7")) : (number === "-" ? setNumber("7") : setNumber(number + "7"))}>7</button>
      <button className="operators" onClick={() => {
                                setNumberState(true);
                                setOperation("+");
                             }
      }>+</button>
      <br/>
      <button onClick={() => number2Toggle ? (number2 === "-" ? setNumber2("6") : setNumber2(number2 + "6")) : (number === "-" ? setNumber("6") : setNumber(number + "6"))}>6</button>
      <button onClick={() => number2Toggle ? (number2 === "-" ? setNumber2("5") : setNumber2(number2 + "5")) : (number === "-" ? setNumber("5") : setNumber(number + "5"))}>5</button>
      <button onClick={() => number2Toggle ? (number2 === "-" ? setNumber2("4") : setNumber2(number2 + "4")) : (number === "-" ? setNumber("4") : setNumber(number + "4"))}>4</button>
      <button className="operators" onClick={() => {
                                setNumberState(true);
                                setOperation("-");
                             }
      }>-</button>
      <br/>
      <button onClick={() => number2Toggle ? (number2 === "-" ? setNumber2("3") : setNumber2(number2 + "3")) : (number === "-" ? setNumber("3") : setNumber(number + "3"))}>3</button>
      <button onClick={() => number2Toggle ? (number2 === "-" ? setNumber2("2") : setNumber2(number2 + "2")) : (number === "-" ? setNumber("2") : setNumber(number + "2"))}>2</button>
      <button onClick={() => number2Toggle ? (number2 === "-" ? setNumber2("1") : setNumber2(number2 + "1")) : (number === "-" ? setNumber("1") : setNumber(number + "1"))}>1</button>
      <button className="operators" onClick={() => {
                                setNumberState(true);
                                setOperation("*");
                             }
      }>x</button>
      <br/>
      <button onClick={() => number2Toggle ? (number2.includes(".") ? null : setNumber2(number2 + ".")) : (number.includes(".") ? null : setNumber(number + "."))}>.</button>
      <button onClick={() => number2Toggle ? (number2 === "-" ? setNumber2("0") : setNumber2(number2 + "0")) : (number === "-" ? setNumber("0") : setNumber(number + "0"))}>0</button>
      <button onClick={() => {
        setNumberState(false);

        let output = 0;

        switch (operation) {
          case "+":
            output = (parseFloat(number) + parseFloat(number2)).toString();
            break;
          case "-":
            output = (parseFloat(number) - parseFloat(number2)).toString();
            break;
          case "*":
            output = (parseFloat(number) * parseFloat(number2)).toString();
            break;
          case "/":
            output = (parseFloat(number) / parseFloat(number2)).toString();
            break;
          default:
            break;
        }

        if (isNaN(output)) {
          output = "0";
        }

        setNumber(output);
        setNumber2("-")

      }}>=</button>
      <button className="operators" onClick={() => {
                                setNumberState(true);
                                setOperation("/");
                             }
      }>/</button>
    </div>
  );
}

export default App;
