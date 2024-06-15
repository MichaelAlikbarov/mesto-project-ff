import { baseURL, tokenAuth } from "./constants";

const headers = {
    authorization: tokenAuth,
    'Content-Type': 'application/json',
};

const handleRequest = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
};

export const handleError = (err => console.log(err));

export const getInitialCards = () => {
    return fetch(`${baseURL}cards`, {
        method: 'GET',
        headers: headers
    })
    .then(handleRequest)
};

export const getInfoUser = () => {
    return fetch(`${baseURL}users/me`, {
        method: 'GET',
        headers: headers
    })
    .then(handleRequest)
};

export const postAddCard = (data) => {
    return fetch(`${baseURL}cards`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            name: data.name,
            link: data.link
        })
    })
    .then(handleRequest)
};

export const deleteCard = (cardId) => {
    return fetch(`${baseURL}cards/${cardId}`, {
        method: 'DELETE',
        headers: headers
    })
    .then(handleRequest)
};

export const putAddLike = (cardId) => {
    return fetch(`${baseURL}cards/likes/${cardId}`, {
        method: 'PUT',
        headers: headers
    })
    .then(handleRequest)
};

export const deleteLike = (cardId) => {
    return fetch(`${baseURL}cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: headers
    })
    .then(handleRequest)
};

export const patchInfoUser = (data) => {
    return fetch(`${baseURL}users/me`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify({
            name: data.name,
            about: data.about
        })
    })
    .then(handleRequest)
};

export const patchUserAvatar = (data) => {
    return fetch(`${baseURL}users/me/avatar`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify({
            avatar: data.avatar
        })
    })
    .then(handleRequest)
};