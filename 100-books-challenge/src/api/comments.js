import { get, post } from "./api";

export async function addComment(comment) {
    return post('/data/comments', comment);
}

export async function getAllComments(bookId) {
    return get(`/data/comments?where=bookId%3D%22${bookId}%22`)
}