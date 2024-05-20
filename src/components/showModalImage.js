export default function showModalImage(data, popupImage, closePopup) {
    
    const cardSignature = popupImage.querySelector('.popup__caption');
    const cardClose = popupImage.querySelector('.popup__close');
    const cardImage = popupImage.querySelector('.popup__image');
    cardImage.setAttribute('src', data.link);
    cardImage.setAttribute('alt', data.name);
    cardSignature.textContent = data.name;

    cardClose.addEventListener('click', () => closePopup(popupImage));
}