function filterValues(array) {
    const navButtons = document.querySelector('.navbar__items').querySelectorAll('button');
    
    array = insertedValues;
    
    navButtons[0].addEventListener('click', () => {
        array = insertedValues;
        showValues(array);
        renderInsertedValues(array);

        navButtons.forEach((button) => {
            button.classList.remove('btn__outline--active');
            button.classList.add('btn__outline');
        });

        navButtons[0].classList.remove('btn__outline');
        navButtons[0].classList.add('btn__outline--active');
    });

    navButtons[1].addEventListener('click', () => {
        array = insertedValues.filter((element) => element.categoryID === 0);
        showValues(array);
        renderInsertedValues(array);

        navButtons.forEach((button) => {
            button.classList.remove('btn__outline--active');
            button.classList.add('btn__outline');
        });

        navButtons[1].classList.remove('btn__outline');
        navButtons[1].classList.add('btn__outline--active');
    });

    navButtons[2].addEventListener('click', () => {
        array = insertedValues.filter((element) => element.categoryID === 1);
        showValues(array);
        renderInsertedValues(array);

        navButtons.forEach((button) => {
            button.classList.remove('btn__outline--active');
            button.classList.add('btn__outline');
        });

        navButtons[2].classList.remove('btn__outline');
        navButtons[2].classList.add('btn__outline--active');
    });
}

filterValues(insertedValuesFiltered);