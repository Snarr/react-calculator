import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("");
  const [number2Toggle, setNumberState] = useState(false);

  useEffect(() => {

  }, [operation])

  return (
    <div className="App">
      <p>{number2Toggle ? number2 : number}</p>
      <br/>
      <button className="operators" onClick={() => number2Toggle ? setNumber2("") : setNumber("")}>CLS</button>
      <button className="operators" onClick={() => number2Toggle ? (number2.startsWith("-") ? setNumber2(number2.replace("-", "")) : setNumber2(`-${number2}`)) : (number.startsWith("-") ? setNumber(number.replace("-", "")) : setNumber(`-${number}`))}>±</button>
      <button className="operators" onClick={() => number2Toggle ? (number2.includes(".") ? null : setNumber2(number2 + ".")) : (number.includes(".") ? null : setNumber(number + "."))}>.</button>
      <button className="operators">&nbsp;</button>
      <br/>
      <button onClick={() => number2Toggle ? setNumber2(number2 + "9") : setNumber(number + "9")}>9</button>
      <button onClick={() => number2Toggle ? setNumber2(number2 + "8") : setNumber(number + "8")}>8</button>
      <button onClick={() => number2Toggle ? setNumber2(number2 + "7") : setNumber(number + "7")}>7</button>
      <button className="operators" onClick={() => {
                                setNumberState(true);
                                setOperation("+");
                             }
      }>+</button>
      <br/>
      <button onClick={() => number2Toggle ? setNumber2(number2 + "6") : setNumber(number + "6")}>6</button>
      <button onClick={() => number2Toggle ? setNumber2(number2 + "5") : setNumber(number + "5")}>5</button>
      <button onClick={() => number2Toggle ? setNumber2(number2 + "4") : setNumber(number + "4")}>4</button>
      <button className="operators" onClick={() => {
                                setNumberState(true);
                                setOperation("-");
                             }
      }>-</button>
      <br/>
      <button onClick={() => number2Toggle ? setNumber2(number2 + "3") : setNumber(number + "3")}>3</button>
      <button onClick={() => number2Toggle ? setNumber2(number2 + "2") : setNumber(number + "2")}>2</button>
      <button onClick={() => number2Toggle ? setNumber2(number2 + "1") : setNumber(number + "1")}>1</button>
      <button className="operators" onClick={() => {
                                setNumberState(true);
                                setOperation("*");
                             }
      }>x</button>
      <br/>
      <button>&nbsp;</button>
      <button id="equals" onClick={() => {
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
        setNumber2("")

      }}>=</button>
      <button onClick={() => number2Toggle ? setNumber2(number2 + "0") : setNumber(number + "0")}>0</button>
      <button className="operators" onClick={() => {
                                setNumberState(true);
                                setOperation("/");
                             }
      }>/</button>
    </div>
  );
}

export default App;
