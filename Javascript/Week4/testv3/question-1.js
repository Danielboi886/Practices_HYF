/**
 * You have been tasked to create an array of books to be provided as demo data.
 * The requirements:
 * - The array should be called bookList
 * - There should be 3 books in it
 * - Every book needs a title property that is of type string
 */

class book {
    constructor(title,author)
{
    this.title = title
    this.author = author
}    
}

const book1 = new book ('Picture of Dorian Grey','Oscar Wilde')
const book2 = new book ('Critique of Pure Reason', 'Immanuel Kant')
const book3 = new book ('Foreman', 'Jason Lee')

const bookList = [book1, book2, book3]
/**
 * TEST CODE. DO NOT EDIT
 */
console.assert(bookList.length === 3)

bookList.forEach(item => {
    console.assert(typeof item.title === 'string');
});