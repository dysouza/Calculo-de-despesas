const form = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");

let total = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (description === "" || isNaN(amount) || amount <= 0) {
    alert("Por favor, insira uma descrição válida e um valor positivo.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${description} - R$ ${amount.toFixed(2)}`;
  expenseList.appendChild(li);

  total += amount;
  totalDisplay.textContent = total.toFixed(2);

  descriptionInput.value = "";
  amountInput.value = "";
});