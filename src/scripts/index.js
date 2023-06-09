function sumValors(array) {
    let sum = 0;
    array.forEach((element) => sum += element.value);
    return sum.toFixed(2);
}

function showValues(array) {
    const totalValor = document.querySelector('.valorsSum');
    const valorsSum = sumValors(array);

    totalValor.innerText = `R$${valorsSum}`.replace('.', ',');
}

function renderInsertedValues(array) {
    const allValorsList = document.querySelector('.app__allValors');
    const allValorsEmpty = document.querySelector('.allValors__empty');

    allValorsList.innerHTML = '';
    allValorsList.appendChild(allValorsEmpty);

    if (array.length === 0) {
        allValorsEmpty.classList.remove('close');
        allValorsEmpty.classList.add('show');
    } else {
        allValorsEmpty.classList.remove('show');
        allValorsEmpty.classList.add('close');
        
        array.forEach((element) => {
            const item = document.createElement('li');
            const value = document.createElement('p');
            const itemButtons = document.createElement('div');
            const buttonType = document.createElement('button');
            const buttonTrash = document.createElement('button');
    
            item.classList.add('allValors__item');
            value.classList.add('text-1');
            itemButtons.classList.add('item__buttons');
            buttonType.classList.add('btn--greylow');
            buttonTrash.classList.add('btn--trash');
    
            value.innerText = `R$${element.value.toFixed(2)}`.replace('.', ',');
            buttonType.innerText = valuesCategory[element.categoryID];

            buttonTrash.addEventListener('click', () => {
                const thisElementIndex = insertedValues.findIndex((value) => value === element);

                insertedValues.splice(thisElementIndex, 1);

                renderInsertedValues(insertedValues);
                filterValues(insertedValuesFiltered);
            });
    
            itemButtons.append(buttonType, buttonTrash);
            item.append(value, itemButtons);
            allValorsList.appendChild(item);
        });
    }
    
    showValues(array);
}

function filterValues(array) {
    const navButtons = document.querySelector('.navbar__items').querySelectorAll('button');
    
    array = insertedValues;
    
    navButtons[0].addEventListener('click', () => {
        array = insertedValues;
        showValues(array);
        renderInsertedValues(array);

        navButtons.forEach((button) => {
            button.classList.remove('btn--outline--active');
            button.classList.add('btn--outline');
        });

        navButtons[0].classList.remove('btn--outline');
        navButtons[0].classList.add('btn--outline--active');
    });

    navButtons[1].addEventListener('click', () => {
        array = insertedValues.filter((element) => element.categoryID === 0);
        showValues(array);
        renderInsertedValues(array);

        navButtons.forEach((button) => {
            button.classList.remove('btn--outline--active');
            button.classList.add('btn--outline');
        });

        navButtons[1].classList.remove('btn--outline');
        navButtons[1].classList.add('btn--outline--active');
    });

    navButtons[2].addEventListener('click', () => {
        array = insertedValues.filter((element) => element.categoryID === 1);
        showValues(array);
        renderInsertedValues(array);

        navButtons.forEach((button) => {
            button.classList.remove('btn--outline--active');
            button.classList.add('btn--outline');
        });

        navButtons[2].classList.remove('btn--outline');
        navButtons[2].classList.add('btn--outline--active');
    });
}

renderInsertedValues(insertedValues);
filterValues(insertedValuesFiltered);