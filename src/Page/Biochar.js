import React, { useState } from "react";
import "../App.css";

const Biochar = () => {
  const [agriWaste, setAgriWaste] = useState(0);
  const [wasteType, setWasteType] = useState(0.4); // Default to Rice Husk
  const [biocharIncome, setBiocharIncome] = useState(0);

  const [electricityConsumption, setElectricityConsumption] = useState(0);
  const [electricityRate, setElectricityRate] = useState(0);
  const [emissionSavings, setEmissionSavings] = useState(0);
  const [costSavings, setCostSavings] = useState(0);

  const calculateBiocharIncome = () => {
    if (agriWaste < 0) return;
    const y = agriWaste * wasteType;
    const income = 0.2 * y;
    setBiocharIncome(income.toFixed(2));
  };

  const calculateSolarSavings = () => {
    if (electricityConsumption < 0 || electricityRate < 0) return;
    const A = electricityConsumption * 0.89;
    const B = electricityConsumption * electricityRate;
    const C = electricityConsumption * 0.04;
    const D = electricityConsumption * 4.5;
    setEmissionSavings((A - C).toFixed(2));
    setCostSavings((B - D).toFixed(2));
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Biochar Income Calculator</h2>
        <label>Amount of Agri-Waste (kg):</label>
        <input
          type="number"
          placeholder="Amount of Agri-Waste (kg)"
          value={agriWaste}
          onChange={(e) => setAgriWaste(Math.max(0, parseFloat(e.target.value)))}
        />

        <label>Type of Waste:</label>
        <select value={wasteType} onChange={(e) => setWasteType(parseFloat(e.target.value))}>
          <option value="0.4">Rice Husk</option>
          <option value="0.3">Wheat Straw</option>
          <option value="0.3">Corn Stalks</option>
        </select>

        <button onClick={calculateBiocharIncome}>Calculate Income</button>
        <p>Potential Income: ${biocharIncome}</p>
      </div>

      <div className="card">
        <h2>Solar Energy Savings Calculator</h2>
        <label>Total Electricity Consumption (kWh):</label>
        <input
          type="number"
          placeholder="Total Electricity Consumption (kWh)"
          value={electricityConsumption}
          onChange={(e) => setElectricityConsumption(Math.max(0, parseFloat(e.target.value)))}
        />

        <label>Current Electricity Rate (Rs./kWh):</label>
        <input
          type="number"
          placeholder="Current Electricity Rate (Rs./kWh)"
          value={electricityRate}
          onChange={(e) => setElectricityRate(Math.max(0, parseFloat(e.target.value)))}
        />

        <button onClick={calculateSolarSavings}>Calculate Savings</button>
        <p>Emission Savings: {emissionSavings} kg CO2</p>
        <p>Cost Savings: Rs. {costSavings}</p>
      </div>
    </div>
  );
};

export default Biochar;