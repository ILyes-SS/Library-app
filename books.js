const theHobbit = new Book("The Hobbit","J.R.R. Tolkien","295 pages","not read yet");


const myLibrary = [theHobbit];



function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.info = function(){
    return(
            this.title + " by "+
            this.author + ", " +
            this.pages + ", " +
            this.read
    );
    }

    console.log(theHobbit.info());

function addBookTOLibrary(){
    let title = prompt("enter the title of your book");
    let author = prompt("enter the author name of your book");
    let pages = prompt("enter the number of pages of your book");
    let read = prompt("have you read the book");

    let book = new Book(title,author,pages,read);
        return myLibrary.push(book); 
    }
function displayBooks(){

   for(let i=0 ; i < myLibrary.length ; i++){ 
    const cards = document.querySelector(".cards");
    const card = document.createElement("div");
    card.setAttribute("class","card");

    const cardInfos = document.createElement("div");
    cardInfos.innerHTML = `Title: ${myLibrary[i].title} <br>
                            Author: ${myLibrary[i].author} <br>
                             Pages: ${myLibrary[i].pages}<br>
                             reading state:${myLibrary[i].read}`

    card.appendChild(cardInfos);
    cards.appendChild(card);
   }
}

displayBooks();