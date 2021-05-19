import './App.css';
import {useState} from 'react';

function App() {
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("");
  const [number2Toggle, setNumberState] = useState(false);
  
  function NumberButton({buttonNum}) {
    return <button onClick={() => number2Toggle ? setNumber2(number2 + buttonNum) : setNumber(number + buttonNum)}>{buttonNum}</button>
  }

  function OperatorButton({operator}) {
      return <button className="operators" onClick={() => {
                                setNumberState(true);
                                setOperation(operator);
                             }
      }>{operator}</button>
  }

  return (
    <div className="App">
      <p>{number2Toggle ? number2 : number}</p>
      <br/>
      <button className="operators" onClick={() => number2Toggle ? setNumber2("") : setNumber("")}>CLS</button>
      <button className="operators" onClick={() => number2Toggle ? (number2.startsWith("-") ? setNumber2(number2.replace("-", "")) : setNumber2(`-${number2}`)) : (number.startsWith("-") ? setNumber(number.replace("-", "")) : setNumber(`-${number}`))}>±</button>
      <button className="operators" onClick={() => number2Toggle ? (number2.includes(".") ? null : setNumber2(number2 + ".")) : (number.includes(".") ? null : setNumber(number + "."))}>.</button>
      <button className="operators">&nbsp;</button>
      <br/>
      <NumberButton buttonNum="9"/>
      <NumberButton buttonNum="8"/>
      <NumberButton buttonNum="7"/>
      <OperatorButton operator="+" />
      <br/>
      <NumberButton buttonNum="6"/>
      <NumberButton buttonNum="5"/>
      <NumberButton buttonNum="4"/>
      <OperatorButton operator="-" />
      <br/>
      <NumberButton buttonNum="3"/>
      <NumberButton buttonNum="2"/>
      <NumberButton buttonNum="1"/>
      <OperatorButton operator="*" />
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
      <NumberButton buttonNum="0"/>
      <OperatorButton operator="/" />
    </div>
  );
}

export default App;