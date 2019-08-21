//#1 Book class=>repsesents a book
class Book{
    constructor(title, author, isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}
// #end class book



//#2 UI class=>handle ui tasks ///==>ACTIONS
class UI{
    static displayBooks(){
        const StoredBooks=[
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '32432432'    
            },
             {
                title: 'Book One',
                author: 'John Doe',
                isbn: '32432432'    
            }
        ];
        const books= StoredBooks;

        books.forEach((book)=> UI.addBookToList(book));
    }

    static addBookToList(book){
        const list=document.querySelector("#book-list");

        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a herf="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

     

    static deleteBook(el){
        if(el.classList.contains('delete') && confirm("Are you")){
            el.parentElement.parentElement.remove();
        }
    }

    // show alert message
    static showAlert(message, className){
          const div=document.createElement("div");
      
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container=document.querySelector(".container");
        const form=document.querySelector("#book-form");
        container.insertBefore(div, form);
        // make go awey after 3 sec;
       setTimeout(()=>document.querySelector(".alert").remove(), 3000);
    }
}

// #end class UI

 
 
//#3 event: display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);


//#4 event: add a book to list
const form=document.querySelector("#book-form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const title=document.querySelector("#title").value;
    const author=document.querySelector("#author").value;
    const isbn=document.querySelector("#isbn").value;

    // instatiate book//izvrsiti
    const book= new Book(title, author, isbn);

     if(title === '' || author === '' || isbn === ''){
        // alert("Plese fill all fields!");
        UI.showAlert("Plese fill all fields!", "danger");
    }else{
        // add book to UI
    UI.addBookToList(book);
    UI.showAlert("Successfully inserted book!", "success");
    form.reset();
    }
});

//#5 event: remove book
document.querySelector("#book-list").addEventListener("click", (e)=>{
    UI.deleteBook(e.target);
    console.log(e.target);
})

//#6 event: update book

 

 