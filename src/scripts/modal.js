function showModal() {
    const newValueButtons = document.querySelectorAll('.registerNewValue');
    const modalController = document.querySelector('.modal__controller');

    newValueButtons.forEach((element) => {
        element.addEventListener('click', () => {
            modalController.showModal();
            modalController.style.top = '0';
        })
    })
}

function closeModal(category, categoryButtons) {
    const modalController = document.querySelector('.modal__controller');
    const inputModal = document.querySelector('.input__insertValue');
    const closeModalButtons = document.querySelectorAll('.btn__closeModal');

    closeModalButtons.forEach((element) => {
        element.addEventListener('click', () => {
            modalController.close();
            modalController.style.top = '-150%';
        });
    });

    closeModalButtons[1].addEventListener('click', () => {
        inputModal.value = '';

        category = undefined;

        categoryButtons.forEach((button) => {
            button.classList.remove('btn__outline--active');
            button.classList.add('btn__outline');
        });
    });
}

function addNewValue() {
    const modalController = document.querySelector('.modal__controller');
    const inputModal = document.querySelector('.input__insertValue');
    const categoryTypes = document.querySelectorAll('.categoryOption');
    const buttonConfirm = document.querySelector('.btn__confirmModal');
    let category;

    categoryTypes.forEach((button, index) => {
        button.addEventListener('click', () => {
            category = index;

            categoryTypes.forEach((buttonToo) => {
                buttonToo.classList.remove('btn__outline--active');
                buttonToo.classList.add('btn__outline');
            });

            button.classList.remove('btn__outline');
            button.classList.add('btn__outline--active');
        });
    });

    buttonConfirm.addEventListener('click', () => {
        if (inputModal.value == '' || category == undefined) {
            alert('Ainda há campos não preenchidos...');
        } else {
            const newObj = {
                id: insertedValues.length + 1,
                value: parseFloat(inputModal.value),
                categoryID: category
            }

            inputModal.value = '';
            category = undefined;

            categoryTypes.forEach((button) => {
                button.classList.remove('btn__outline--active');
                button.classList.add('btn__outline');
            });
    
            insertedValues.push(newObj);
    
            filterValues(insertedValuesFiltered);
            renderInsertedValues(insertedValues);
    
            modalController.close();
        }
    });

    closeModal(category, categoryTypes);
}

showModal();
addNewValue();