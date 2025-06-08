const result = document.getElementById("result");
const submitButton = document.getElementById("submit");
const billAmount = document.getElementById("bill");
const tipPercentage = document.getElementById("tip");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const bill = parseFloat(billAmount.value);
    const tip = parseFloat(tipPercentage.value);
    if (isNaN(bill) || isNaN(tip)) {
        result.textContent = "Please enter valid numbers for bill and tip percentage.";
        return;
    }
    const tipAmount = (bill * tip) / 100;
    const totalAmount = bill + tipAmount;
    result.textContent = `Tip Amount: $${tipAmount.toFixed(2)}, Total Amount: $${totalAmount.toFixed(2)}`;
    
});