const userInput = document.getElementById("input-value");

function formattNumber(value) {
    return (value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"));
}

function getRow() {
  const calculebtn = document.getElementById("calcule");

  calculebtn.addEventListener("click", () => {
    const row = taxesData.findIndex(
      (element) =>
        userInput.value >= element.min && userInput.value <= element.max
    );
    setTaxes(row);
  });
}

function setTaxes(index) {
  const { min, fixedTaxes, variabelTaxes } = taxesData[index];
  const percentajeTax = document.getElementById("variabel-tax");
  const totalVariabelTax = document.getElementById("variabel-total");
  const fixedTax = document.getElementById("fixed-tax");
  const total = document.getElementById("total");
  let variabelCalc = (variabelTaxes / 100) * (userInput.value - min);

  percentajeTax.textContent = `${variabelTaxes}%`;
  totalVariabelTax.textContent = formattNumber(variabelCalc);
  fixedTax.textContent = formattNumber(fixedTaxes);
  total.textContent = `$ ${formattNumber(variabelCalc + fixedTaxes)}`;
}

getRow();
