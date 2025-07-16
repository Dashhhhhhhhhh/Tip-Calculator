const calculate = document.getElementById("calculateBtn");
const customTipContainer = document.getElementById("customTipContainer");

document.querySelectorAll('input[name="tip"]').forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === 'custom') {
      customTipContainer.style.display = 'block';
    } else {
      customTipContainer.style.display = 'none';
    }
  });
});

calculate.addEventListener("click", () => {
    const amountValue = parseFloat(document.getElementById("amount").value);
    const selectedRadio = document.querySelector('input[name="tip"]:checked');

    if (!selectedRadio) {
        alert("Please select a tip option.");
        return;
    }
    if (isNaN(amountValue) || amountValue <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const selectedTip = selectedRadio.value;
    const tipPercent = selectedTip === "custom"
        ? parseFloat(document.getElementById("customTip").value)
        : parseFloat(selectedTip);

    const tipAmount = amountValue * (tipPercent / 100);
    const totalBill = amountValue + tipAmount;

    document.getElementById("tipResult").textContent = "Tip: " + tipAmount.toFixed(2);
    document.getElementById("totalResult").textContent = "Total Bill: " + totalBill.toFixed(2);
});
