export default function handleFormSubmit(evt) {
    evt.preventDefault();
    const formEditProfile = document.forms['edit-profile'] 
    const inputUserName = formEditProfile.elements.name;
    const inputUserDescription = formEditProfile.elements.description;

    const profileInfo = document.querySelector('.profile__info');
    const profileTitle = profileInfo.querySelector('.profile__title');
    const profileDescription = profileInfo.querySelector('.profile__description');
    profileTitle.textContent = inputUserName.value;
    profileDescription.textContent = inputUserDescription.value;
    
    formEditProfile.reset();

}