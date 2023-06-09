function renderInsertedValues(array) {
    const allValuesList = document.querySelector('.app__allValues');
    const allValuesEmpty = document.querySelector('.allValues__empty');

    allValuesList.innerHTML = '';
    allValuesList.appendChild(allValuesEmpty);

    if (array.length === 0) {
        allValuesEmpty.classList.remove('close');
        allValuesEmpty.classList.add('show');
    } else {
        allValuesEmpty.classList.remove('show');
        allValuesEmpty.classList.add('close');
        
        array.forEach((element) => {
            const item = document.createElement('li');
            const value = document.createElement('p');
            const itemButtons = document.createElement('div');
            const buttonType = document.createElement('button');
            const buttonTrash = document.createElement('button');
    
            item.classList.add('allValues__item');
            value.classList.add('text-1');
            itemButtons.classList.add('item__buttons');
            buttonType.classList.add('btn__greylow');
            buttonTrash.classList.add('btn__trash');
    
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
            allValuesList.appendChild(item);
        });
    }
    
    showValues(array);
}

renderInsertedValues(insertedValues);