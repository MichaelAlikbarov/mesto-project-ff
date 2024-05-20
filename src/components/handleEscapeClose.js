import closePopup from "./closePopup";

export default function handleEscapeClose(evt) {
    if (evt.key == 'Escape') {
        const popup = document.querySelectorAll('.popup');
        popup.forEach((item) => {
            closePopup(item)
        })
    }
}