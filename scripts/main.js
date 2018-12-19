let myLibrary = []

const newBookBtn = document.querySelector('#new');
newBookBtn.addEventListener('click', addBookToLibrary);
//newBookBtn.addEventListener('click', render);

const shelf = document.querySelector('#shelf');


//Functions

function render() {
	const tome = document.createElement('div')
	tome.classList.add('tome')
	tome.innerHTML = newBook.title

	shelf.appendChild(tome)
}

function book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function() {
		return read === true ?
			`${title} by ${author}, ${pages} pages, have read` :
			`${title} by ${author}, ${pages} pages, have not read`
	}
}

function addBookToLibrary() {
	let title = prompt("Enter the title:")
	let author = prompt("Enter the author:")
	let pages = prompt("How many pages is it?", "600")
	let read = prompt("You've already read it: true or false", "true")

	newBook = new book(title, author, pages, read)
	myLibrary.push(newBook)
	render()

	return console.log(myLibrary)
}






