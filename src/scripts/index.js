function sumValues(array) {
    let sum = 0;
    array.forEach((element) => {
        if (element.categoryID == 0) {
            sum += element.value;
        } else {
            sum -= element.value;
        }
    });
    return sum.toFixed(2);
}

function showValues(array) {
    const totalValue = document.querySelector('.valuesSum');
    const valuesSum = sumValues(array);

    totalValue.innerText = `R$${valuesSum}`.replace('.', ',');
}