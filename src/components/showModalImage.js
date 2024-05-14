export default function showModalImage(popup, item) {
    
    console.log(item);
    const cardImage = popup.querySelector('.popup__image');
    console.log(cardImage)
    const cardSignature = popup.querySelector('.popup__caption');
    cardImage.setAttribute('src', item.link);
    cardImage.setAttribute('alt', item.name);
    cardSignature.textContent = item.name;
}