class Book {
    title: string;
    author: string;
    isAvailable: boolean;

    public static bookCount: number = 0;

    public constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
        Book.bookCount++;
    }

    public borrowBook() : void {
        if(!this.isAvailable){
            throw new Error("Book is not available");
        } else {
            this.isAvailable = false;
        }
    }

    public returnBook() : void {
        if(this.isAvailable){
            throw new Error("Book is already available");
        } else {
            this.isAvailable = true;
        }
    }

    public static getBookCount() : number {
        return Book.bookCount;
    }
}

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald");

console.log(Book.getBookCount()); // 2

book1.borrowBook();
console.log(book1.isAvailable);   // false

book1.returnBook();
console.log(book1.isAvailable);   // true

book2.borrowBook();
console.log(Book.getBookCount()); // 2

book1.returnBook();           // Throws Error: "Book is already avaliable."