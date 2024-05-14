export default function removeCard(evt) {
    const cardElement = evt.target.closest('.card');
    cardElement.remove();
}