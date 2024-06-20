import { validationConfig } from "./constants";

const showInputError = (formItem, inputItem, errorMessage, validationConfig) => {
    const errorItem = formItem.querySelector(`.${inputItem.id}-error`);
    inputItem.classList.add(validationConfig.inputErrorClass);
    errorItem.textContent = errorMessage;
    errorItem.classList.add(validationConfig.errorClass);
}

const hideInputError = (formItem, inputItem, validationConfig) => {
    const errorItem = formItem.querySelector(`.${inputItem.id}-error`);
    inputItem?.classList.remove(validationConfig.inputErrorClass);
    errorItem?.classList.remove(validationConfig.errorClass);
    errorItem.textContent = '';
}

const isValid = (formItem, inputItem) => {
    if (inputItem.validity.patternMismatch) {
        inputItem.setCustomValidity(inputItem.dataset.errorMessage);
    } else {
        inputItem.setCustomValidity("");
    }

    if (!inputItem.validity.valid) {
        showInputError(formItem, inputItem, inputItem.validationMessage, validationConfig);
    } else {
        hideInputError(formItem, inputItem, validationConfig);
    }
};

const setEventListener = (formItem, validationConfig) => {
    const inputList = Array.from(formItem.querySelectorAll(validationConfig.inputSelector));
    const buttonItem = formItem.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonItem, validationConfig)
    inputList.forEach((inputItem) => {
        inputItem.addEventListener('input', () => {
            isValid(formItem, inputItem);
            toggleButtonState(inputList, buttonItem, validationConfig);
        })
    })
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputItem) => {
        return !inputItem.validity.valid;
    });
}

const toggleButtonState = (inputList, buttonItem, validationConfig) => {
    if (hasInvalidInput(inputList)) {
        buttonItem.disabled = true;
        buttonItem.classList.add(validationConfig.inactiveButtonClass);
    } else {
        buttonItem.disabled = false;
        buttonItem.classList.remove(validationConfig.inactiveButtonClass);
    }
}

const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((formItem) => {
        formItem.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListener(formItem, validationConfig);
    })
};

const clearValidation = (formItem, validationConfig) => {
    const inputList = Array.from(formItem.querySelectorAll(validationConfig.inputSelector));
    const buttonItem = formItem.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonItem, validationConfig);
    inputList.forEach((item) => {
        hideInputError(formItem, item, validationConfig);
    })
};

export { enableValidation, clearValidation };