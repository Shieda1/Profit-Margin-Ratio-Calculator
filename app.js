// https://calculator.swiftutors.com/profit-margin-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const profitMarginRatioRadio = document.getElementById('profitMarginRatioRadio');
const netIncomeRadio = document.getElementById('netIncomeRadio');
const netSalesRadio = document.getElementById('netSalesRadio');

let profitMarginRatio;
let netIncome = v1;
let netSales = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

profitMarginRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Income ($)';
  variable2.textContent = 'Net Sales ($)';
  netIncome = v1;
  netSales = v2;
  result.textContent = '';
});

netIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Profit Margin Ratio (%)';
  variable2.textContent = 'Net Sales ($)';
  profitMarginRatio = v1;
  netSales = v2;
  result.textContent = '';
});

netSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Profit Margin Ratio (%)';
  variable2.textContent = 'Net Income ($)';
  profitMarginRatio = v1;
  netIncome = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(profitMarginRatioRadio.checked)
    result.textContent = `Profit Margin Ratio = ${computeProfitMarginRatio().toFixed(2)} %`;

  else if(netIncomeRadio.checked)
    result.textContent = `Net Income = ${computeNetIncome().toFixed(2)} $`;

  else if(netSalesRadio.checked)
    result.textContent = `Net Sales = ${computeNetSales().toFixed(2)} $`;
})

// calculation

function computeProfitMarginRatio() {
  return (Number(netIncome.value) / Number(netSales.value)) * 100;
}

function computeNetIncome() {
  return (Number(profitMarginRatio.value) / 100) * Number(netSales.value);
}

function computeNetSales() {
  return Number(netIncome.value) / (Number(profitMarginRatio.value) / 100);
}