let myLibrary = []

const newBookBtn = document.querySelector('#new');
newBookBtn.addEventListener('click', addBookToLibrary);

const shelf = document.querySelector('#shelf');



const removeBtn = document.querySelectorAll('.remove');
removeBtn.forEach(button => {
	removeBtn.addEventListener('click', (e) => removeBook(e))
});

//Constructor

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

//Functions

function addBookToLibrary() {
	let title = prompt("Enter the title:")
	let author = prompt("Enter the author:")
	let pages = prompt("How many pages is it?", "600")
	let read = prompt("You've already read it: true or false", "false")
	
	if (read === "true") {
		read = true
	} else {
		read = false
	}

	newBook = new book(title, author, pages, read)
	myLibrary.push(newBook)
	render()

	return console.log(myLibrary)
}

function render() {
	const tome = document.createElement('div')
	tome.classList.add('tome')
	tome.setAttribute("data-index", `${myLibrary.indexOf(newBook)}`)
	tome.innerHTML = newBook.title

	shelf.appendChild(tome)

	const remove = document.createElement('button')
	remove.classList.add('remove')
	remove.setAttribute("data-index", `${myLibrary.indexOf(newBook)}`)
	remove.innerHTML = "Remove"

	const status = document.createElement('button')
	status.classList.add('status')
	status.setAttribute("data-index", `${myLibrary.indexOf(newBook)}`)
	if (newBook.read == true) {
		status.innerHTML = "finished"
	} else {
		status.innerHTML = "To Read"
	}

	document.querySelectorAll(".status").forEach(button => {
		button.addEventListener('click', (e) => toggle(e))
	});

	tome.appendChild(remove)
	tome.appendChild(status)
}

function toggle(e) {
	console.log(e)
}

function removeBook(e) {
	console.log(e)
}







