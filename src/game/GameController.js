import { useState } from "react";
import Currency from "./Currency";
import { useSelector, useDispatch } from "react-redux";
import { addBux } from "./gameSlice";
import "../styles.css";

export const GameController = () => {
  // Use useSelector to get the value of the bux from the store
  const bux = useSelector((state) => state.game.bux);
  const [steps, setSteps] = useState(0);
  const [income, setIncome] = useState(0);
  const [fbIncome, setFBIncome] = useState(0); //funbux income
  const [zIncome, setZIncome] = useState(0); //zenny income
  const [timeSinceLastStep, setTimeSinceLastStep] = useState(1);
  //const [lastTime, setLastTime] = useState(Date.now());
  const incomes = [];

  // Use dispatch to dispatch redux actions
  const dispatch = useDispatch();

  incomes.push(fbIncome);
  // console.log(incomes);
  // console.log(incomes.length);
  incomes.push(zIncome);
  // console.log(incomes);
  // console.log(incomes.length);

  function updateIncome() {
    //for inc in incomes:
    //    setIncome((c) => c + inc)
    //setIncome(3);
    let incomeSum = incomes[0] + incomes[1];
    setIncome((c) => incomeSum);
  }

  function tickStep() {
    setSteps((steps) => steps + 1);
    //let newTime = Date.now();
    //timeSinceLastStep = newTime - lastTime;
    //setLastTime((t) => newTime);
    updateIncome();
    //recalculate income rate
    //check makers
    // recalculate income
    const stepIncome = income * timeSinceLastStep;
    //setBux((bux) => bux + stepIncome);
    dispatch(addBux(stepIncome));
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>You have {bux} bux.</p>
      <p>You have taken {steps} steps.</p>
      <p style={{ backgroundColor: "red" }} onClick={() => setIncome(500000)}>
        Your income is {income} bux per step.
      </p>
      <button onClick={tickStep} className="buttonClass">
        Take 1 step
      </button>
      {/*
        <button onClick={() => setIncome((i) => i + 1)}>
          Increase income by 1
        </button>
    */}
      <div className="CurrencyContainer">
        <Currency curName="Funbux" income={fbIncome} setIncome={setFBIncome} />
        <Currency curName="Zenny" income={zIncome} setIncome={setZIncome} />
      </div>
    </div>
  );
};
