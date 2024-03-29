import { get, post } from "./api"

export async function getAllLikes(bookId) {
    return get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
}

export async function getLikesByUserId(bookId, userId) {
    return get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function likeBook(bookId) {
    return post('/data/likes', { bookId });
}