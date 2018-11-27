export class BookModel {
    Id: number;
    Title: string;
    Author: string;

    /**
     *
     */
    constructor(cId, cTitle, cAuthor) {
        this.Id = cId;
        this.Title = cTitle;
        this.Author = cAuthor;
    }

}
