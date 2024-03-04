import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ inputValue }) {
  const resultData = calculateInvestmentResults(inputValue);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Time (Year)</th>
          <th>Invested Capital</th>
          <th>Interest(per Year)</th>
          <th>Total Interest</th>
          <th>Return Value</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(totalAmountInvested)} </td>
              <td>{formatter.format(yearData.interest)} </td>
              <td>{formatter.format(totalInterest)} </td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
