
// Input income function
function getIncome() {
    const inputMoney = document.getElementById('income-money');
    const incomeMoney = parseFloat(inputMoney.value);
    return incomeMoney;
}
// Total cost function
function getTotalCost() {
    const foodCost = document.getElementById('food-cost');
    const rentCost = document.getElementById('rent-cost');
    const clothesCost = document.getElementById('clothes-cost');
    const totalCost = parseFloat(foodCost.value) + parseFloat(rentCost.value) + parseFloat(clothesCost.value);
    return totalCost;
}
// Total Expenses event handler
document.getElementById('expenses-btn').addEventListener('click', function () {
    const totalIncome = getIncome();
    const totalCost = getTotalCost();
    const totalExpenses = document.getElementById('total-expenses');
    if (isNaN(totalCost)) {
        alert('plz input number');
        totalBalance.innerText = 0;
    } else {
        totalExpenses.innerText = totalCost;
    }

    const totalBalance = document.getElementById('total-balance');
    if (totalCost > totalIncome) {
        alert('Your cost is big to your income');
    } else {
        totalBalance.innerText = totalIncome - totalCost;
    }

});

// Total save event handler
document.getElementById('save-btn').addEventListener('click', function () {
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalance.innerText);

    // Calculate saveing amount
    const totalIncome = getIncome();
    const inputSaveAmountPercent = document.getElementById('save-money-percent');
    const saveAmountPercent = parseFloat(inputSaveAmountPercent.value);
    const saveAmount = (totalIncome * saveAmountPercent) / 100;


    const saveBalance = document.getElementById('save-balance');
    if (saveAmount > totalBalanceAmount) {
        saveBalance.innerText = 0;
        alert('You are not saveing amount');
        inputSaveAmountPercent.value = '';
    } else if (isNaN(saveAmount)) {
        alert('plz input number');
    } else {
        saveBalance.innerText = saveAmount;
    }
    const remaingBalance = document.getElementById('remaing-balance');
    remaingBalance.innerText = totalBalanceAmount - parseFloat(saveBalance.innerText);

});



