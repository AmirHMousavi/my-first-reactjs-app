/**
 * selectBook is an actionCreator, it needs to return an action, an object with a type property.
 */
export function selectBook(book) {
    console.log('the slected bood is:', book.title);
    return {type: 'BOOK_SELETED', payload: book};
}