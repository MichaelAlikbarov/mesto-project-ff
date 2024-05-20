import closePopup from "./closePopup";

export default function closePopupByClickingOn(evt) {
    
    if (evt.target === evt.currentTarget) {
        const targetItem = evt.target;
        closePopup(targetItem);
    }
}