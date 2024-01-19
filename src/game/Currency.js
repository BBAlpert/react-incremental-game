import { useState } from "react";

export default function Currency(props) {
  const [multiplier, setMultiplier] = useState(1);
  let income, setIncome;
  let curName;
  if (props.income != undefined) {
    income = props.income;
  } else {
    income = "UNSET_INCOME";
  }
  setIncome = props.setIncome;
  if (props.curName != undefined) {
    curName = props.curName;
  } else {
    curName = "Dollars";
  }

  function increaseIncome() {
    props.setIncome((c) => c + 1);
  }

  return (
    <div className="Currency">
      <p>This money is called {curName}</p>
      <p>
        You earn {income} {curName} per step.
      </p>
      <button onClick={increaseIncome}> Increase income</button>
      <br />
      <IncomeUpgrade />
      <p>The current multiplier is x{multiplier}.</p>
    </div>
  );
}

function IncomeUpgrade(props) {
  return (
    <div className="IncomeUpgrade" style={{ backgroundColor: "red" }}>
      <p> hey what's up</p>
    </div>
  );
}
