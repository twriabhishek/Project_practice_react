import React from "react";

const CurrencyBox = ({
  lable,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "",
  amountDisable = false,
  currencyDisable = false,
}) => {
  console.log();
  return (
    <div className="currency-box-container">
      <div className="left">
        <label htmlFor="">{lable}</label>
        <input
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="right">
        <label htmlFor="">Currency Type</label>
        <select
          name="choice"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOption.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CurrencyBox;
