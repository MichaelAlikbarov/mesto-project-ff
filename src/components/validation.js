const showInputError = (formItem, inputItem, errorMessage) => {
    const errorItem = formItem.querySelector(`.${inputItem.id}-error`);
    inputItem.classList.add('popup__input_type_error');
    errorItem.textContent = errorMessage;
    errorItem.classList.add('popup__input-error_active');
}

const hideInputError = (formItem, inputItem) => {
    const errorItem = formItem.querySelector(`.${inputItem.id}-error`);
    inputItem?.classList.remove('popup__input_type_error');
    errorItem?.classList.remove('popup__input-error_active');
    errorItem.textContent = '';
    console.log('test')
}

const isValid = (formItem, inputItem) => {
    if (inputItem.validity.patternMismatch) {
        inputItem.setCustomValidity(inputItem.dataset.errorMessage);
    } else {
        inputItem.setCustomValidity("");
    }

    if (!inputItem.validity.valid) {
        showInputError(formItem, inputItem, inputItem.validationMessage);
    } else {
        hideInputError(formItem, inputItem);
    }
};

const setEventListener = (formItem) => {
    const inputList = Array.from(formItem.querySelectorAll('.popup__input'));
    const buttonItem = formItem.querySelector('.popup__button');
    toggleButtonState(inputList, buttonItem)
    inputList.forEach((inputItem) => {
        inputItem.addEventListener('input', () => {
            isValid(formItem, inputItem);
            toggleButtonState(inputList, buttonItem);
        })
    })
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputItem) => {
        return !inputItem.validity.valid;
    });
}

const toggleButtonState = (inputList, buttonItem) => {
    if (hasInvalidInput(inputList)) {
        buttonItem.disabled = true;
        buttonItem.classList.add('popup__button_disabled');
    } else {
        buttonItem.disabled = false;
        buttonItem.classList.remove('popup__button_disabled');
    }
}

const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((formItem) => {
        formItem.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListener(formItem);
    })
};

const clearValidation = (formItem, validationConfig) => {
    const inputList = Array.from(formItem.querySelectorAll(validationConfig.inputSelector));
    const buttonItem = formItem.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonItem);
    inputList.forEach((item) => {
        hideInputError(formItem, item);
    })
};

export { enableValidation, clearValidation };