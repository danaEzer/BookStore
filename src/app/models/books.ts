export enum Genre{
    SF = 1,
    Satire = 2,
    Drama = 3,
    Action = 4,
    Romance = 5,
    Mystery = 6,
    Horror = 7
}
export const BookPresentationStructure = {
    title: {type: String,  name: 'Title'},
    description: {type: String, name: 'Description'},
    ISBN: {type: String, name: 'ISBN'},
    author: {type: String, name: 'Author'},
    publicationDate: {type: Date, name: 'Publication Date'},
    genre: {type: Genre, name: 'Genre'},
    price: {type: Number, name: 'Price', unit: '$'}
};
export class Book{
    title;
    description;
    author;
    publicationDate;
    genre;
    ISBN;
    price;
}

