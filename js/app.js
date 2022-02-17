
function getIncome() {
    const inputMoney = document.getElementById('income-money');
    const incomeMoney = parseFloat(inputMoney.value);
    return incomeMoney;
}

function getTotalCost() {
    const foodCost = document.getElementById('food-cost');
    const rentCost = document.getElementById('rent-cost');
    const clothesCost = document.getElementById('clothes-cost');
    const totalCost = parseFloat(foodCost.value) + parseFloat(rentCost.value) + parseFloat(clothesCost.value);
    return totalCost;
}

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
        alert('very big cost');
    } else {
        totalBalance.innerText = totalIncome - totalCost;
    }

});



