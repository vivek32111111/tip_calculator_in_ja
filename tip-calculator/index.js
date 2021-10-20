const slider = document.getElementById("progress");

slider.addEventListener("change", calTip);

const amountInput = document.getElementById("addAmount");
amountInput.addEventListener("input", calTip);

function calTip() {
  let amount = parseFloat(amountInput.value);

  let tipPercent = slider.value;

  console.log(amount, tipPercent);
  let totalTip = parseFloat((amount * tipPercent) / 100);
  let totalAmount = parseFloat(amount + totalTip);

  document.getElementById("tipAmount").textContent = ` ${totalTip}`;
  document.getElementById("totalAmount").textContent = `${totalAmount}`;
  document.getElementById("percent").textContent = `${tipPercent}%`;
}
