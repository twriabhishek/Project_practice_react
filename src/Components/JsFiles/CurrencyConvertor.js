import React, { useState } from "react";
import CurrencyBox from "./CurrencyBox";
import { MdOutlineSwapVerticalCircle } from "react-icons/md";
import UseCurrencyInfo from "./CustomHooks/UseCurrencyInfo";
const CurrencyConvertor = () => {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = UseCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setfrom(to);
    setto(from);
    setconvertedAmount(amount);
    setamount(convertedAmount);
  };

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="curr-main-container">
      <h1>Currency Convertor</h1>
      <div className="curr-inner-container">
        <CurrencyBox
          lable={"From"}
          amount={amount}
          currencyOption={options}
          onAmountChange={(newAmount) => setamount(newAmount)} // Update the amount state with newAmount
          onCurrencyChange={(currency) => setfrom(currency)}
          selectCurrency={from}
        />
        <button className="button1" onClick={swap}>
          Swap
          <MdOutlineSwapVerticalCircle />
        </button>
        <CurrencyBox
          lable={"To"}
          amount={convertedAmount}
          currencyOption={options}
          onCurrencyChange={(currency)=>{
            setto(currency)
          }}
          selectCurrency={to}
        />
        <button onClick={convert}>Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
